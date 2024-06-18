import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { ContractPaymentStatusType } from '../../../../__generated__/types';
import {
  getActiveContractById,
  getActiveContractByIdDocument,
  getActiveContractByIdVariables,
} from '../../../../graphql/queries/Contracts/__generated__/getActiveContractById.query';
import { useGetPaymentInfo } from '../../../../graphql/queries/Contracts/__generated__/getPaymentInfo.query';
import { client } from '../../../../libs';
import { dayjs } from '../../../../services';
import { handleDivisionOnCategories } from '../../../../utils';

const usePaymentInfo = () => {
  const { t } = useTranslation('activeRentPage', { keyPrefix: 'rentDetails' });
  const { query } = useRouter();
  const contractId = query?.id;

  const { data, loading } = useGetPaymentInfo({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        id: `${contractId}`,
      },
    },
  });

  const contract = client.readQuery<getActiveContractById, getActiveContractByIdVariables>({
    query: getActiveContractByIdDocument,
    variables: {
      input: {
        id: `${contractId}`,
      },
    },
  });

  const departureDate = dayjs(contract?.contract__tenant_find.departureDate).format('DD MMMM YYYY');

  const paymentInfo = data?.contract__tenant_paymentInfo;

  const cancellationDate = dayjs(paymentInfo?.cancellationDate).format('DD MMMM YYYY');
  const refundsAmount = handleDivisionOnCategories(paymentInfo?.refundsAmount || '');

  const isRecuring = paymentInfo?.type === ContractPaymentStatusType.Recurring;

  const dateOfNextChargeFormatted = dayjs(paymentInfo?.dateOfNextCharge).format('DD MMMM YYYY');

  const accommodationAvailableDateFormatted = dayjs(paymentInfo?.accommodationAvailableDate).format('DD MMMM YYYY');

  const paidAmount = handleDivisionOnCategories(paymentInfo?.paidAmount || '');

  const totalAmount = handleDivisionOnCategories(paymentInfo?.totalAmount || '');

  const payableAmountOfNextCharge = handleDivisionOnCategories(paymentInfo?.payableAmountOfNextCharge || '');

  const refundDescription =
    refundsAmount === '0'
      ? `${t('refundTitle')} - ${cancellationDate}`
      : `${t('refundTitle')} - ${cancellationDate} ${t('returned')}  ${refundsAmount} 〒. ${t(
          'validity',
        )} ${departureDate}`;

  const descriptionMapping = {
    [ContractPaymentStatusType.ShortFull]: t('paid'),
    [ContractPaymentStatusType.ShortPartial]: `${t('paid')} ${paidAmount} 〒. ${t(
      'remains',
    )} ${payableAmountOfNextCharge} 〒 ${t('payDay')} ${dateOfNextChargeFormatted}`,
    [ContractPaymentStatusType.Recurring]: `${t('nextPayment')} - ${payableAmountOfNextCharge} ${t(
      'nextPaymentDate',
    )} ${dateOfNextChargeFormatted}`,
    [ContractPaymentStatusType.RecurringCompleted]: `${t('validity')} ${accommodationAvailableDateFormatted}`,
    [ContractPaymentStatusType.Refund]: refundDescription,
    [ContractPaymentStatusType.Canceled]: `${t('refundTitle')}`,
  };

  const description = paymentInfo?.type ? descriptionMapping[paymentInfo?.type] : '';

  const title = isRecuring ? t('recuringTitle') : t('fullPrice');

  return {
    title,
    description,
    totalAmount,
    loading,
  };
};

export default usePaymentInfo;
