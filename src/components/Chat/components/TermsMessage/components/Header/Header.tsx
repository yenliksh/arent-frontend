import { MessageModel } from '__generated__/types';
import { ModalInnopayEcommerceMethod } from 'components';
import { Routes } from 'constains';
import { useContractOfferAccept } from 'graphql/mutations/Contract/__generated__/contractOfferAccept';
import { useContractOfferAcceptByNewCard } from 'graphql/mutations/Contract/__generated__/contractOfferAcceptByNewCard';
import { useContractOfferReject } from 'graphql/mutations/Contract/__generated__/contractOfferReject';
import { useContractOfferStatusSendEmail } from 'graphql/mutations/Contract/__generated__/contractOfferStatusEmailSend';
import { useInnopayPageUrl } from 'graphql/subscription/Contract/__generated__/innopayPageUrl';
import { useUpdateContract } from 'graphql/subscription/Contract/__generated__/updateContract';
import { useToggle } from 'hooks';
import { stickyTopHeaderOpenedVar } from 'libs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ExpiredPaymentModal } from 'pagesComponents/BookingPage/components';
import React, { FC, useEffect } from 'react';
import SystemMessage from 'services/systemMessage';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, DocumentsTabsSlug, TextVariants } from 'types';
import { AppText, BaseModal, Button, LinkTo } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { getQueryFromUrl, setCookie } from 'utils';
import { getStorageById, resetStorageById, setStorageById } from 'utils/storage-service';

import { CardSelectModal } from './CardSelectModal';
import { StickyTopHeaderPaymentTimer } from './StickyTopHeaderPaymentTimer';

export type HeaderProps = {
  isLandlord?: boolean;
  isLastMessage: boolean;
  isShortPeriodType: boolean;
  isContractStatusOffering: boolean;
  myId?: string;
  isPending: boolean;

  message: MessageModel;
  advertId: string;

  hasButtons?: boolean;
  hasInfoContainer?: boolean;

  hasContinuePayment?: boolean;
};

const Header: FC<HeaderProps> = ({
  isContractStatusOffering,
  isLastMessage,
  isShortPeriodType,
  isLandlord,
  myId,
  message,
  advertId,
  isPending,
  hasButtons = true,
  hasInfoContainer = true,
  hasContinuePayment,
}) => {
  const { t } = useTranslation('ui', { keyPrefix: 'chat.termsMessage' });
  const { t: tPayments } = useTranslation('profilePage', { keyPrefix: 'payments' });
  const [rejectContractOffer] = useContractOfferReject({ variables: { input: { chatId: message.chatId } } });
  const [acceptContractOfferFetch, { loading }] = useContractOfferAccept();
  const [sendContractOfferStatusFetch] = useContractOfferStatusSendEmail();
  const [acceptContractOfferByNewCardFetch] = useContractOfferAcceptByNewCard({
    variables: { input: { chatId: message.chatId } },
  });

  const { asPath } = useRouter();
  const { chatId } = getQueryFromUrl(asPath);

  const {
    isOpened: isOpenAddBankCardModal,
    close: closeAddBankCardModal,
    toggle: toggleAddBankCardModal,
  } = useToggle();
  const {
    isOpened: isOpenUsersBanksCards,
    open: openUsersBanksCards,
    close: closeUsersBanksCards,
    toggle: toggleUsersBanksCards,
  } = useToggle();

  const {
    isOpened: isExpiredPaymentModalOpen,
    open: openExpiredPaymentModal,
    toggle: toggleExpiredPaymentModal,
  } = useToggle();

  const handleChangeCardsModal = () => {
    toggleAddBankCardModal();
    toggleUsersBanksCards();
  };

  const acceptContractOffer = async (cardId: string) => {
    await acceptContractOfferFetch({ variables: { input: { chatId: message.chatId, cardId } } });
    if (!message.senderId || !isLandlord) return;
    await sendContractOfferStatusFetch({
      variables: { input: { recipientId: message.senderId, isLandLord: isLandlord } },
    });
  };

  const handleRejectContractOffer = async () => {
    await rejectContractOffer();
    if (!message.senderId || !isLandlord) return;
    await sendContractOfferStatusFetch({
      variables: { input: { recipientId: message.senderId, isLandLord: isLandlord } },
    });
  };

  const checkCanAcceptContractOffer = () => {
    if (isShortPeriodType) {
      openUsersBanksCards();
    } else {
      openUsersBanksCards();
      setCookie('chatId', message.chatId);
    }
  };

  const disabled = (!isLastMessage && !isContractStatusOffering) || isPending;
  const title = new SystemMessage({ message, myId }).getSystemMessage();
  const description = isLandlord ? t('landlordDescription') : t('tenantDescription');

  const handleOpenInnopeyModal = async () => {
    handleChangeCardsModal();
    await acceptContractOfferByNewCardFetch({ variables: { input: { chatId: message.chatId } } });
    stickyTopHeaderOpenedVar(true);
  };

  const { data: innopayPageUrlSubscriptionData } = useInnopayPageUrl();
  const { data: updateContractData } = useUpdateContract();

  if (
    innopayPageUrlSubscriptionData?.innopayPageUrl.contractId &&
    chatId &&
    updateContractData?.updateContract.contract?.id === advertId &&
    updateContractData?.updateContract.contract?.isTemporary === true
  ) {
    setStorageById(chatId as string, innopayPageUrlSubscriptionData);
  }

  const handleCloseModalInnopay = () => {
    closeAddBankCardModal();
    stickyTopHeaderOpenedVar(false);
  };

  const { isOpened: isStickyTopHeaderPaymentTimerOpen, close: closeStickyTopHeaderPaymentTimerOpen } = useToggle(true);

  const lastContractData = getStorageById(chatId as string);

  const handleToggleExpiredModal = () => {
    closeUsersBanksCards();
    closeAddBankCardModal();
    resetStorageById(chatId as string);
    openExpiredPaymentModal();
    closeStickyTopHeaderPaymentTimerOpen();
  };

  useEffect(() => {
    if (
      lastContractData &&
      updateContractData?.updateContract.contract?.id === lastContractData.innopayPageUrl.contractId &&
      !updateContractData?.updateContract.contract?.isTemporary
    ) {
      resetStorageById(chatId as string);
      closeStickyTopHeaderPaymentTimerOpen();
    }
  }, [updateContractData]);

  return (
    <Root>
      {hasInfoContainer && (
        <InfoContainer>
          <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {title}
          </AppText>
          <Description font="caption_16_12_regular">
            {description}
            {!isLandlord && (
              <StyledLinkTo
                href={{
                  pathname: Routes.documents,
                  query: {
                    tab: DocumentsTabsSlug.AGREEMENT,
                  },
                }}
                text={t('userAgreement')}
                target="_blank"
              />
            )}
          </Description>
        </InfoContainer>
      )}
      {hasButtons && (
        <>
          {isLandlord ? (
            <ButtonContainer>
              <Button
                isFullWight
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.SMALL}
                disabled={disabled}
                text={t('terminate')}
                onClick={() => handleRejectContractOffer()}
              />
            </ButtonContainer>
          ) : (
            <ButtonContainer>
              <Button
                onClick={checkCanAcceptContractOffer}
                isFullWight
                disabled={disabled}
                text={t('apply')}
                isLoading={loading}
              />
              <Button
                isFullWight
                disabled={disabled}
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.SMALL}
                text={t('reject')}
                onClick={() => handleRejectContractOffer()}
              />
            </ButtonContainer>
          )}
        </>
      )}

      {chatId && lastContractData && isOpenAddBankCardModal && isStickyTopHeaderPaymentTimerOpen && (
        <StickyTopHeaderPaymentTimer
          chatId={chatId}
          isVisible={isOpenAddBankCardModal}
          onExpiredPaymentTimer={handleToggleExpiredModal}
        />
      )}

      <ExpiredPaymentModal isVisible={isExpiredPaymentModalOpen} onClose={toggleExpiredPaymentModal} />

      <StyledSelectBankCardModal
        title={t('cardSelectModalTitle')}
        onClose={closeUsersBanksCards}
        isVisible={isOpenUsersBanksCards}
        isBottomMobile>
        <CardSelectModal
          isLoading={loading}
          submit={acceptContractOffer}
          onClose={closeUsersBanksCards}
          advertId={advertId}
          onOpenInnopeyModal={handleOpenInnopeyModal}
          hasContinuePayment={hasContinuePayment}
        />
      </StyledSelectBankCardModal>

      <StyledInnopayModal
        onClose={handleCloseModalInnopay}
        withBackOption
        onGoBack={handleChangeCardsModal}
        title={tPayments('modalTitleAddNewCard')}
        isVisible={isOpenAddBankCardModal && !isExpiredPaymentModalOpen}
        isBottomMobile>
        <ModalInnopayEcommerceMethod iframeSrc={innopayPageUrlSubscriptionData?.innopayPageUrl.url} />
      </StyledInnopayModal>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-gap: 16px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: flex;
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  gap: 4px;
`;

const ButtonContainer = styled.div`
  display: grid;
  align-content: flex-start;
  gap: 8px;
`;

const Description = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const StyledLinkTo = styled(LinkTo)`
  ${({ theme: { colors, typography } }) => css`
    text-decoration: underline;
    color: ${colors.greyScale[60]};
    ${typography.caption_16_12_regular};
  `}
`;

const StyledSelectBankCardModal = styled(BaseModal)`
  width: 100%;
  max-width: 448px;
`;

const StyledInnopayModal = styled(BaseModal)`
  width: 100%;
  max-width: 672px;
`;
