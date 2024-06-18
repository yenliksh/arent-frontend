import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { AppText, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { PaymentHistorySearchType, PaymentInvoiceType } from '../../../../../../__generated__/types';
import { useGetHistoryInvoice } from '../../../../../../graphql/queries/User/__generated__/getHistoryInvoice.query';
import { dayjs } from '../../../../../../services';
import { TableCaptions, Transaction } from '..';
import { CustomPaymentInvoiceModel } from '../types';
import { NextPayments } from './components';

const DEFAULT_LIMIT = 6;

const SubscriptionPayments: FC = () => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });

  const { data: payments, fetchMore } = useGetHistoryInvoice({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        limit: DEFAULT_LIMIT,
        paymentSearchType: PaymentHistorySearchType.Recurring,
      },
    },
  });

  const paymentsData = payments?.paymentTransaction_historyInvoice.data;

  const isEmpty = paymentsData?.length === 0 || !paymentsData;

  const pageInfo = payments?.paymentTransaction_historyInvoice?.pageInfo;

  const handleShowMoreClick = async () => {
    const afterCursor = pageInfo?.afterCursor;
    await fetchMore({
      variables: {
        input: {
          afterCursor,
          limit: DEFAULT_LIMIT,
          paymentSearchType: PaymentHistorySearchType.Recurring,
        },
      },
    });
  };

  const paymentTransactionsMap: { [P in PaymentInvoiceType]: (paymentItem: CustomPaymentInvoiceModel) => string } = {
    [PaymentInvoiceType.Withdraw]: (paymentItem) => paymentItem.paymentTransaction.totalAmountPayable,
    [PaymentInvoiceType.Receiving]: (paymentItem) => paymentItem.paymentTransaction.totalAmountToBeTransferred,
  };

  return (
    <Root>
      {isEmpty ? (
        <Empty>{t('noPayments')}</Empty>
      ) : (
        <Content>
          <NextPayments type={PaymentHistorySearchType.Recurring} />
          <TableCaptions />
          {paymentsData?.map((payment) => (
            <Transaction
              key={payment.id}
              isSuccess={payment.isSuccess}
              variant={payment.type}
              panMasked={payment.cardMeta?.panMasked || ''}
              date={dayjs(payment.invoiceDate).format('DD.MM.YYYY') || ''}
              cost={paymentTransactionsMap[payment.type](payment)}
              title={payment.paymentTransaction.contract.baseApartmentAdData.title}
            />
          ))}
          <StyledButton
            isFullWight
            disabled={!pageInfo?.afterCursor}
            text={t('showMore')}
            size={ButtonSize.NORMAL}
            variant={ButtonVariant.SECONDARY}
            onClick={handleShowMoreClick}
          />
        </Content>
      )}
    </Root>
  );
};

export default SubscriptionPayments;

const Root = styled.div``;

const Content = styled.div``;

const Empty = styled(AppText)`
  ${({ theme: { typography } }) => typography.body_24_16_regular}
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  ${({ theme: { typography } }) => typography.caption_16_12_medium};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    margin-top: 32px;
    max-width: 232px;
  }
`;
