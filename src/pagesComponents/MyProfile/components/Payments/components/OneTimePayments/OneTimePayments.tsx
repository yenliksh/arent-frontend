import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { dayjs } from 'services';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { AppText, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { PaymentHistorySearchType, PaymentInvoiceType } from '../../../../../../__generated__/types';
import { useGetHistoryInvoice } from '../../../../../../graphql/queries/User/__generated__/getHistoryInvoice.query';
import { TableCaptions, Transaction } from '..';
import { NextPayments } from '../SubscriptionPayments/components';
import { CustomPaymentInvoiceModel } from '../types';

const DEFAULT_LIMIT = 6;

const OneTimePayments: FC = () => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });

  const { data: payments, fetchMore } = useGetHistoryInvoice({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        limit: DEFAULT_LIMIT,
        paymentSearchType: PaymentHistorySearchType.Single,
      },
    },
  });

  const isEmpty = payments?.paymentTransaction_historyInvoice?.data?.length === 0;

  const pageInfo = payments?.paymentTransaction_historyInvoice.pageInfo;

  const handleShowMoreClick = async () => {
    const afterCursor = pageInfo?.afterCursor;
    await fetchMore({
      variables: {
        input: {
          afterCursor,
          paymentSearchType: PaymentHistorySearchType.Single,
          limit: DEFAULT_LIMIT,
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
          <NextPayments type={PaymentHistorySearchType.Single} />
          <TableCaptions />
          {payments?.paymentTransaction_historyInvoice.data?.map((payment) => (
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

export default OneTimePayments;

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
