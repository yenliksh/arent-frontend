import { PaymentHistorySearchType } from '../../../../../../__generated__/types';
import { useGetCards } from '../../../../../../graphql/queries/User/__generated__/getCards.query';
import { useGetHistoryInvoice } from '../../../../../../graphql/queries/User/__generated__/getHistoryInvoice.query';

const DEFAULT_LIMIT = 6;

const usePaymentsLoading = () => {
  const { loading: CardsLoading } = useGetCards({ fetchPolicy: 'cache-and-network' });

  const { loading: RecuringPaymentsLoading } = useGetHistoryInvoice({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        limit: DEFAULT_LIMIT,
        paymentSearchType: PaymentHistorySearchType.Recurring,
      },
    },
  });

  const { loading: SubscriptionsPaymentsLoading } = useGetHistoryInvoice({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        limit: DEFAULT_LIMIT,
        paymentSearchType: PaymentHistorySearchType.Single,
      },
    },
  });

  const isLoading = !CardsLoading && !RecuringPaymentsLoading && !SubscriptionsPaymentsLoading;

  return isLoading;
};

export default usePaymentsLoading;
