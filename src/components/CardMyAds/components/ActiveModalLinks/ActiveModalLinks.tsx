import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { TextVariants } from 'types';
import { AppText, BaseModal } from 'ui';

import { useAddPaymentMethod } from '../../../../graphql/mutations/Advert/__generated__/addPaymentMethod.mutation';
import { useToggle } from '../../../../hooks';
import { CardSelectModal } from '../../../../pagesComponents/ActiveRent/components';
import { ModalInnopay } from '../../../ModalInnopay';

type ActiveModalLinksProps = {
  id: string;
  payMethod: string;
};

const ActiveModalLinks: FC<ActiveModalLinksProps> = ({ id, payMethod }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'myAdsCard' });

  const { isOpened: isOpenedBanksCardsModal, toggle: toggleBanksCardsModal, close: closeBanksCardsModal } = useToggle();

  const { isOpened: isOpenUsersBanksCards, close: closeUsersBanksCards, toggle: toggleUsersBanksCards } = useToggle();

  const [setPaymentMethod, { loading }] = useAddPaymentMethod();

  const submitCard = async (cardId: string) => {
    await setPaymentMethod({
      variables: {
        input: {
          id: id!,
          cardId,
        },
      },
    });
  };

  const handleChangeCardsModal = () => {
    toggleBanksCardsModal();
    toggleUsersBanksCards();
  };

  return (
    <MainContainer>
      <TextContainerWithBorder onClick={toggleUsersBanksCards}>
        <ModalText variant={TextVariants.SECONDARY} font="caption_16_12_regular">
          {t('dropDownLinks.paymentWay')}
        </ModalText>
      </TextContainerWithBorder>
      <StyledInnopayModal
        onClose={closeBanksCardsModal}
        withBackOption
        title={t('bankCardsModal.titleForAddCard')}
        onGoBack={() => {}}
        isVisible={isOpenedBanksCardsModal}
        isBottomMobile>
        <ModalInnopay onComplete={closeUsersBanksCards} />
      </StyledInnopayModal>

      <StyledVerifyModal
        onClose={closeUsersBanksCards}
        title={t('bankCardsModal.titleForChange')}
        isVisible={isOpenUsersBanksCards}>
        <CardSelectModal
          submit={submitCard}
          payMethod={payMethod}
          isLoading={loading}
          onClose={closeUsersBanksCards}
          advertId={id!}
          onOpenInnopeyModal={handleChangeCardsModal}
        />
      </StyledVerifyModal>
    </MainContainer>
  );
};

const StyledInnopayModal = styled(BaseModal)`
  width: 100%;
  max-width: 672px;
`;

const StyledVerifyModal = styled(BaseModal)`
  width: 100%;
  max-width: 448px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
`;

const TextContainerWithBorder = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.greyScale[30]};
    &:hover {
      cursor: pointer;
    }
  `}
`;

const ModalText = styled(AppText)`
  padding: 12px 0;
`;

export default ActiveModalLinks;
