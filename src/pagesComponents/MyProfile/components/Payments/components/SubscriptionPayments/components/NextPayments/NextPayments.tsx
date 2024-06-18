import { FC } from 'react';
import { dayjs } from 'services';
import styled from 'styled-components';
import { compareDateWithToday } from 'utils';

import { PaymentHistorySearchType } from '../../../../../../../../__generated__/types';
import { useGetNextPayment } from '../../../../../../../../graphql/queries/User/__generated__/getPaymentNext.query';
import { Alert } from '../../../Alert';

type NextPaymentsProps = {
  type: PaymentHistorySearchType;
};

const NextPayments: FC<NextPaymentsProps> = ({ type }) => {
  const { data: nextPayments } = useGetNextPayment({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        paymentSearchType: type,
      },
    },
  });

  return (
    <Alerts>
      {nextPayments?.paymentTransaction_paymentNext.map((payment) => {
        const isOverdue = compareDateWithToday(payment?.withdrawFundsDate);
        return (
          <Alert
            key={payment.id}
            id={payment.id}
            isOverdue={isOverdue}
            advertId={payment.contract.id}
            price={String(payment.totalAmountPayable)}
            hasButton={payment?.isReadyToPay}
            paymentDate={dayjs(payment?.withdrawFundsDate).format('DD MMMM YYYY')}
          />
        );
      })}
    </Alerts>
  );
};

export default NextPayments;

const Alerts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 24px;
`;
