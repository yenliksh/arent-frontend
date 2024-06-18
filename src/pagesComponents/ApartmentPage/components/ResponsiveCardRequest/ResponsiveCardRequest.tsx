import { ApartmentRentPeriodType } from '__generated__/types';
import { FormDataFormRequest } from 'components/CardRequest/FormRequest/FormRequest';
import { FEE_PERCENTS_LONG_TERM, Routes } from 'constains';
import { useSendContractRequest } from 'graphql/mutations/Advert/__generated__/sendContractRequest.mutation';
import { useToggle } from 'hooks';
import useAuthAction from 'hooks/useAuthAction';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { notify } from 'services';
import styled from 'styled-components';
import { RequestStatusEnum, TextVariants } from 'types';
import { AppText, Button, ResponsiveModal } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { getPercentOnRent, handleDivisionOnCategories } from 'utils';

import { ResponsiveFormLongTerm } from '../ResponsiveFormLongTerm';
import { ResponsiveFormShortTerm } from '../ResponsiveFormShortTerm';

type ResponsiveCardRequestProps = {
  cost: number;
  cardStatus: RequestStatusEnum;
  id?: string;
  isShortTermType: boolean;
  isPaused?: boolean;
  landlordIsCurrentUser: boolean;
};

const ResponsiveCardRequest: FC<ResponsiveCardRequestProps> = ({
  cost,
  cardStatus,
  id,
  isShortTermType,
  isPaused,
  landlordIsCurrentUser,
}) => {
  const router = useRouter();

  const { t } = useTranslation('ui', { keyPrefix: 'cards' });
  const { isOpened, open, close } = useToggle();

  const [sendContractRequest, { loading }] = useSendContractRequest();

  const sendContractHandler = async (data: FormDataFormRequest) => {
    await sendContractRequest({
      variables: {
        input: {
          apartmentAdId: id!,
          apartmentRentPeriodType: ApartmentRentPeriodType.LongTerm,
          guests: {
            numberOfAdult: data.numberOfGuests,
            numberOfChildren: data.numberOfChilds,
            numberOfPets: 0,
          },
        },
      },
      onCompleted: () => notify(t('requestSuccessful')),
    });
  };

  const { action } = useAuthAction(open);

  const checkAuthorized = async () => {
    await action();
  };

  const serviceCommission = Math.round(getPercentOnRent(cost, FEE_PERCENTS_LONG_TERM));
  const showServiceCommission = handleDivisionOnCategories(String(serviceCommission));
  const showTotal = `${handleDivisionOnCategories(String(cost + serviceCommission))} ₸`;
  const isAvailableFormRequest = cardStatus === 'INIT' || isPaused;

  const RequestStatusMapping = {
    [RequestStatusEnum.INIT]: (
      <AppText font="caption_14_10_regular">
        {t('serviceFee')} {showServiceCommission} ₸ {t('feeIncluded')}
      </AppText>
    ),
    [RequestStatusEnum.PAUSED]: (
      <AppText font="caption_14_10_regular">
        {t('serviceFee')} {showServiceCommission} ₸ {t('feeIncluded')}
      </AppText>
    ),
    [RequestStatusEnum.SENDED]: (
      <>
        <AppText font="caption_14_10_regular">{t('infoSendRequest')}</AppText>
        <AppText font="caption_14_10_regular">{t('sellerWaiting')}</AppText>
      </>
    ),
    [RequestStatusEnum.APPROVED]: <AppText font="caption_16_12_regular">{t('requestApproved')}</AppText>,
  };

  const handlePushToMyMessages = () => router.push(Routes.chat);
  const handlePushToMyAds = () => router.push(Routes.myAds);

  const getApartmentButton = () => {
    switch (true) {
      case isAvailableFormRequest && !landlordIsCurrentUser: {
        return (
          <StyledButton
            size={ButtonSize.NORMAL}
            isFullWight
            text={t('send')}
            onClick={checkAuthorized}
            disabled={isPaused}
            variant={ButtonVariant.VIOLET}
          />
        );
      }
      case landlordIsCurrentUser: {
        return (
          <StyledButton
            size={ButtonSize.NORMAL}
            isFullWight
            text={t('goToMyAds')}
            onClick={handlePushToMyAds}
            disabled={isPaused}
            variant={ButtonVariant.VIOLET}
          />
        );
      }
      default: {
        return (
          <StyledSecondaryButton
            text={t('goToChat')}
            isFullWight
            size={ButtonSize.NORMAL}
            variant={ButtonVariant.SECONDARY}
            onClick={handlePushToMyMessages}
          />
        );
      }
    }
  };

  const apartmentButton = getApartmentButton();

  return (
    <Root>
      <MainContainer>
        <Container>
          <PeriodContainer>
            {isPaused ? (
              <StyledAppText font="title_22_18_bold">{showTotal}</StyledAppText>
            ) : (
              <AppText variant={TextVariants.SECONDARY} font="title_22_18_bold">
                {showTotal}
              </AppText>
            )}
            <StyledAppText font="body_20_14_regular">{isShortTermType ? t('perDay') : t('perMonth')}</StyledAppText>
          </PeriodContainer>
        </Container>
        <NotifyContainer>{RequestStatusMapping[cardStatus]}</NotifyContainer>
      </MainContainer>
      {apartmentButton}
      <ResponsiveModal onClose={close} isVisible={isOpened}>
        {isShortTermType ? (
          <ResponsiveFormShortTerm cost={cost} />
        ) : (
          <ResponsiveFormLongTerm sendContractHandler={sendContractHandler} loading={loading} close={close} />
        )}
      </ResponsiveModal>
    </Root>
  );
};

export default ResponsiveCardRequest;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const NotifyContainer = styled.div``;

const StyledSecondaryButton = styled(Button)`
  min-width: 140px !important;
  width: 140px;
  padding: 0;
  ${({ theme: { typography } }) => typography.caption_16_12_medium}
`;

const StyledButton = styled(Button)`
  min-width: 140px !important;
  width: 140px;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 9px;
`;

const StyledAppText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
`;

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 9px;
  padding: 16px 0;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  border-top: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;
