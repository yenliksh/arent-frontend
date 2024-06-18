import { useTranslation } from 'next-i18next';
import { dayjs, notify } from 'services';
import styled from 'styled-components';
import { handleDivisionOnCategories } from 'utils';

import { LongPeriodTenantCheckOutCancelationType } from '../../../../../../../../__generated__/types';
import { useGetCancellationInfoLazyQuery } from '../../../../../../../../graphql/queries/Contracts/__generated__/getCancellationInfo.query';
import { TextVariants } from '../../../../../../../../types';
import { AppText } from '../../../../../../../../ui';

const useCancelRent = () => {
  const [getCancelInfo, { data, loading }] = useGetCancellationInfoLazyQuery();
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'cancelRentModal' });
  const { t: tRules } = useTranslation('activeRentPage', { keyPrefix: 'cancelRentModal.longRentRules' });

  const cancelationInfo = data?.contract__tenant_cancelationInfo;

  const checkoutDate = dayjs(data?.contract__tenant_cancelationInfo?.checkOutDate).format('DD MMMM YYYY');

  const checkoutType = cancelationInfo?.checkoutType as LongPeriodTenantCheckOutCancelationType;

  const refundsAmount = handleDivisionOnCategories(cancelationInfo?.refundsAmount || '');

  const withdrawalAmount = handleDivisionOnCategories(cancelationInfo?.withdrawalAmount || '');

  const recomputedLastStayWithdrawalAmount = handleDivisionOnCategories(
    cancelationInfo?.recomputedLastStayWithdrawalAmount || '',
  );

  const showNotify = () => {
    // eslint-disable-next-line default-case
    switch (checkoutType) {
      case LongPeriodTenantCheckOutCancelationType.AllowedRefund: {
        notify(t('longRentRules.cancelTost.allowedRefund'));
        break;
      }
      case LongPeriodTenantCheckOutCancelationType.PartialRefund: {
        notify(t('longRentRules.cancelTost.partialRefund'));
        break;
      }
      case LongPeriodTenantCheckOutCancelationType.CheckOutGreaterThanThirtyDaysNotice: {
        notify(
          t('longRentRules.cancelTost.thanThirtyDays', {
            count: {
              date: checkoutDate,
              cost: withdrawalAmount,
            } as any,
          }),
        );
        break;
      }
      case LongPeriodTenantCheckOutCancelationType.CheckOutLessThanThirtyDaysNotice: {
        notify(
          t('longRentRules.cancelTost.lessThirtyDays', {
            count: {
              date: checkoutDate,
              cost: withdrawalAmount,
            } as any,
          }),
        );
        break;
      }
    }
  };

  const cancelRentRulesMapping = {
    [LongPeriodTenantCheckOutCancelationType.CancelationByAdmin]: <></>,
    [LongPeriodTenantCheckOutCancelationType.RefundBeforeThirtyDaysArrival]: (
      <RulesConteainer $isAttention={false}>
        <RulesTitle font="body_20_14_medium" variant={TextVariants.SECONDARY}>
          {t('shortRentRulesTitle')}
        </RulesTitle>
        <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
          {tRules('beforeRent')}
        </Rules>
      </RulesConteainer>
    ),
    [LongPeriodTenantCheckOutCancelationType.NotAllowedRefund]: (
      <RulesConteainer $isAttention>
        <RulesTitle font="body_20_14_medium" variant={TextVariants.SECONDARY}>
          {t('shortRentRulesTitle')}
        </RulesTitle>
        <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
          {tRules('after24HoursBeforeRent')}
        </Rules>
      </RulesConteainer>
    ),
    [LongPeriodTenantCheckOutCancelationType.AllowedRefund]: (
      <RulesConteainer $isAttention={false}>
        <RulesTitle font="body_20_14_medium" variant={TextVariants.SECONDARY}>
          {t('shortRentRulesTitle')}
        </RulesTitle>
        <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
          {tRules('beforeRent')}
        </Rules>
      </RulesConteainer>
    ),
    [LongPeriodTenantCheckOutCancelationType.PartialRefund]: (
      <>
        <RulesConteainer $isAttention={false}>
          <RulesTitle font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {t('shortRentRulesTitle')}
          </RulesTitle>
          <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
            {tRules('after30DaysAndChargebackAfterRent')}
          </Rules>
          <Cost font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {refundsAmount} тенге
          </Cost>
          <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
            Пожалуйста, свяжитесь с поддержкой через чат.
          </Rules>
        </RulesConteainer>
      </>
    ),
    [LongPeriodTenantCheckOutCancelationType.CheckOutLessThanThirtyDaysNotice]: (
      <>
        <RulesConteainer $isAttention>
          <RulesTitle font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {t('shortRentRulesTitle')}
          </RulesTitle>
          <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
            По правилам нашего сервиса при расторжении договора, вы обязаны уведомить арендодателя об этом более, чем за
            30 дней. С учётом оплаченного вами периода проживания, с вас будет дополнительно удержана плата в размере:
          </Rules>
          <Cost font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {withdrawalAmount} тенге
          </Cost>
        </RulesConteainer>
      </>
    ),
    [LongPeriodTenantCheckOutCancelationType.CheckOutGreaterThanThirtyDaysNotice]: (
      <>
        <RulesConteainer $isAttention={false}>
          <RulesTitle font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {t('shortRentRulesTitle')}
          </RulesTitle>
          <Rules font="body_20_14_regular" variant={TextVariants.SECONDARY}>
            По правилам нашего сервиса стоимость проживание за неполный месяц будет расчитана пропорционально прожитым
            дням. Стоимость проживания за последний платежный период будет составлять:
          </Rules>
          <Cost font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {recomputedLastStayWithdrawalAmount} тенге
          </Cost>
        </RulesConteainer>
      </>
    ),
  };

  return { getCancelInfo, showNotify, rules: cancelRentRulesMapping[checkoutType], loading };
};

export default useCancelRent;

const RulesConteainer = styled.div<{ $isAttention: boolean }>`
  padding: 16px 24px;
  background-color: ${({ $isAttention, theme: { colors } }) =>
    $isAttention ? colors.additional.redLight : colors.greyScale[10]};
  border-radius: 12px;
  margin-bottom: 24px;
`;

const RulesTitle = styled(AppText)`
  margin-bottom: 8px;
`;

const Rules = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const Cost = styled(AppText)`
  margin-top: 8px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
