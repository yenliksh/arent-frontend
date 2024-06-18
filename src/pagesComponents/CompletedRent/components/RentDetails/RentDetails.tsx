import { useClientSize, useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';
import React, { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, BaseModal, LightButton, MultipleSignedInput, SignedInput } from 'ui';

import { ArrowRight } from '../../../../../public/svg/components';
import {
  ApartmentRentPeriodType,
  LongTermRentCancellationPolicyType,
  UserComplaintType,
} from '../../../../__generated__/types';
import { ModalComplain } from '../../../../components';
import PaymentInfo from '../../../../components/PaymentInfo/PaymentInfo';
import { guestPlural } from '../../../../constains';
import { useSendUserComplaint } from '../../../../graphql/mutations/User/__generated__/sendUserComplaint';
import {
  getActiveContractById,
  getActiveContractByIdDocument,
} from '../../../../graphql/queries/Contracts/__generated__/getActiveContractById.query';
import { client } from '../../../../libs';
import { dayjs } from '../../../../services';
import { handleWordsDeclination } from '../../../../utils';
import { cardTypeEnum } from '../Card/Card';
import { CancelRulesModal, Card, CardSelectModal, HouseRulesModal } from '../index';
import { CancelLongRentModal, CancelShortRentModal } from './components';

export enum CancelRentRulesEnum {
  beforeRent,
  after24HoursBeforeRent,
  less14daysBeforeRent,
  less30DaysAfterRent,
  after30DaysAndChargebackAfterRent,
  after30DaysAndRechargeAfterRent,
  after30DaysNoChargebackNoRechargeAfterRent,
}

type RentDetailsProps = {
  contractId: string;
};

const RentDetails: FC<RentDetailsProps> = ({ contractId }) => {
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'rentDetails' });
  const { t: tCancelRentModal } = useTranslation('activeRentPage', { keyPrefix: 'cancelRentModal' });
  const { t: tUserComplains } = useTranslation('common', { keyPrefix: 'complains.user' });

  const contract = client.readQuery({
    query: getActiveContractByIdDocument,
    variables: {
      input: {
        id: contractId,
      },
    },
  }) as getActiveContractById;

  const [sendUserComplaintFetch, { loading }] = useSendUserComplaint();

  const sendUserComplaint = async (causes: string[], reason: string) => {
    await sendUserComplaintFetch({
      variables: { input: { recipientUserId: landlordId!, cause: causes as UserComplaintType[], reason } },
    });
  };

  const dates = {
    arrivalDate: dayjs(contract?.contract__tenant_find.arrivalDate).format('DD.MM.YYYY'),
    departureDate: dayjs(contract?.contract__tenant_find.departureDate).format('DD.MM.YYYY'),
  };

  const datesForRules = {
    arrivalDate: contract?.contract__tenant_find.arrivalDate,
    departureDate: contract?.contract__tenant_find.departureDate,
  };

  const { isOpened: isOpenComplaintModal, toggle: toggleComplaintModal } = useToggle();
  const { isOpened: isOpenCancelRulesModal, toggle: toggleCancelRulesModal } = useToggle();
  const { isOpened: isOpenHouseRulesModal, toggle: toggleHouseRulesModal } = useToggle();
  const { isOpened: isOpenCardSelectModal, toggle: toggleCardSelectModal } = useToggle();
  const { isOpened: isOpenCancelShortRentModal, toggle: toggleCancelShortRentModal } = useToggle();
  const { isOpened: isOpenCancelLongRentModal, toggle: toggleCancelLongRentModal } = useToggle();

  const { getIsBreakpoint } = useClientSize();
  const { control } = useForm();

  const propsForMultiInputs = useMemo(() => {
    return [
      { title: t('arrival'), placeholder: '', name: 'arrival', defaultValue: dates.arrivalDate },
      { title: t('depart'), placeholder: '', name: 'depart', defaultValue: dates.departureDate },
    ];
  }, [dates, t]);

  const landlordId = contract?.contract__tenant_find?.landlord?.id;

  const rules = contract?.contract__tenant_find?.rules;

  const guests = contract?.contract__tenant_find?.guests;

  const guestsCounter = guests.numberOfAdult + guests.numberOfChildren;

  const guestSubtitle = `${guestsCounter} ${handleWordsDeclination(Number(guestsCounter), guestPlural)}`;

  const isShortRent = contract?.contract__tenant_find.apartmentRentPeriodType === ApartmentRentPeriodType.ShortTerm;

  const cancellationPolicy = contract?.contract__tenant_find?.shortTermRentCancellationPolicyType;

  const rule = CancelRentRulesEnum.less30DaysAfterRent as CancelRentRulesEnum;

  const hasActiveRent = !(
    rule === CancelRentRulesEnum.beforeRent ||
    rule === CancelRentRulesEnum.after24HoursBeforeRent ||
    rule === CancelRentRulesEnum.less14daysBeforeRent
  );

  const userComplains = useMemo(
    () => [
      { label: tUserComplains('IThinkTheyAreDeceiving'), value: UserComplaintType.IThinkTheyAreDeceiving },
      { label: tUserComplains('thisUserIsBehavingIndecently'), value: UserComplaintType.ThisUserIsBehavingIndecently },
      { label: tUserComplains('thisIsSpam'), value: UserComplaintType.ThisIsSpam },
      { label: tUserComplains('other'), value: UserComplaintType.Other },
    ],
    [tUserComplains],
  );

  return (
    <MainContainer>
      <InnerContainer>
        <Title variant={TextVariants.SECONDARY}>{t('detailTitle')}</Title>
        <BordersContainer>
          <InfoContainer>
            <Dates control={control} defaultsInputsVariables={propsForMultiInputs} isInputsBlockedOnly disabled />
            <SignedInput title={t('quantity')} defaultValue={guestSubtitle} isInputsBlockedOnly disabled />
          </InfoContainer>
        </BordersContainer>
        <RulesContainer>
          <ContainerWithBottomBorder onClick={toggleCancelRulesModal}>
            <StyledLightButton text={t('rulesCancel')} />
            <ArrowRight />
          </ContainerWithBottomBorder>
          <ContainerWithBottomBorder onClick={toggleHouseRulesModal}>
            <StyledLightButton text={t('rulesHouse')} />
            <ArrowRight />
          </ContainerWithBottomBorder>
        </RulesContainer>
      </InnerContainer>
      <InnerContainer>
        <PaymentsTitleContainer>
          <Title variant={TextVariants.SECONDARY}>{t('paymentsTitle')}</Title>
        </PaymentsTitleContainer>
        <PaymentsContainer>
          <PaymentInfo />
          <WithBorder>
            <InnerBorder>
              <PriceContainer>
                <Card cardType={cardTypeEnum.VISA} cardLastFourDigits="1234" />
              </PriceContainer>
            </InnerBorder>
          </WithBorder>
        </PaymentsContainer>
      </InnerContainer>
      <InnerContainer>
        <Title variant={TextVariants.SECONDARY}>{t('support')}</Title>
        <RulesContainer>
          <ContainerWithBottomBorder onClick={toggleComplaintModal}>
            <StyledLightButton text={t('complaint')} />
            <ArrowRight />
          </ContainerWithBottomBorder>
        </RulesContainer>

        <ModalComplain
          isLoading={loading}
          submit={sendUserComplaint}
          close={toggleComplaintModal}
          isVisible={isOpenComplaintModal}
          complains={userComplains}
        />

        <SmallModal
          onClose={toggleCancelRulesModal}
          title={t('cancelRulesModalTitle')}
          isVisible={isOpenCancelRulesModal}
          isBottomMobile={getIsBreakpoint('s')}>
          <CancelRulesModal
            startDate={datesForRules.arrivalDate || ''}
            endDate={datesForRules.departureDate || ''}
            onClose={toggleCancelRulesModal}
            cancelationPolicy={isShortRent ? cancellationPolicy! : LongTermRentCancellationPolicyType.Forfeit}
          />
        </SmallModal>

        <SmallModal
          onClose={toggleHouseRulesModal}
          title={t('cancelRulesModalTitle')}
          isVisible={isOpenHouseRulesModal}
          isBottomMobile={getIsBreakpoint('s')}>
          <HouseRulesModal
            onClose={toggleHouseRulesModal}
            isPets={rules?.allowedWithPets!}
            isSmoking={rules?.allowedToSmoke!}
            isParty={rules?.allowedToHangingOut!}
            isChildren={rules?.allowedWithChildren!}
          />
        </SmallModal>

        <SmallModal
          onClose={toggleCardSelectModal}
          title={t('cardSelectModalTitle')}
          isVisible={isOpenCardSelectModal}
          isBottomMobile={getIsBreakpoint('s')}>
          <CardSelectModal submit={() => {}} onClose={() => {}} onOpenInnopeyModal={() => {}} advertId="" />
        </SmallModal>

        <StyledCancelRentModal
          onClose={toggleCancelShortRentModal}
          title={tCancelRentModal('shortRentTitle')}
          isVisible={isOpenCancelShortRentModal}
          isBottomMobile={getIsBreakpoint('s')}>
          <CancelShortRentModal onClose={toggleCancelShortRentModal} />
        </StyledCancelRentModal>

        <StyledCancelRentModal
          onClose={toggleCancelLongRentModal}
          title={hasActiveRent ? tCancelRentModal('longRentTitleActiveRent') : tCancelRentModal('longRentTitle')}
          isVisible={isOpenCancelLongRentModal}
          isBottomMobile={getIsBreakpoint('s')}>
          <CancelLongRentModal onClose={toggleCancelLongRentModal} rule={rule} hasActiveRent={hasActiveRent} />
        </StyledCancelRentModal>
      </InnerContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 8px 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled(AppText)`
  ${({ theme: { typography } }) => typography.title_22_18_bold};
`;

const BordersContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  @media (max-width: ${BreakpointsEnum.s}px) {
    flex-direction: column;
  }
`;

const Dates = styled(MultipleSignedInput)`
  width: 100%;
`;

const ContainerWithBottomBorder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  padding-bottom: 15px;
  cursor: pointer;
`;

const StyledLightButton = styled(LightButton)`
  height: 24px;
  padding: 0;
`;

const PaymentsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WithBorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  border-radius: 12px;
`;

const InnerBorder = styled.div`
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  gap: 4px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SmallModal = styled(BaseModal)`
  width: 100%;
  max-width: 448px;
  border-radius: 32px;
`;

const StyledCancelRentModal = styled(BaseModal)`
  max-width: 448px;
`;

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default RentDetails;