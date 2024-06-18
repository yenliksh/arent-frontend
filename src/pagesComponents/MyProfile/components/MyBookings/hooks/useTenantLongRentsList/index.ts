import { useState } from 'react';

import { ContractRentStatus } from '../../../../../../__generated__/types';
import { usegetTenantActiveLongTerms } from '../../../../../../graphql/queries/Contracts/__generated__/getTenantLongTerms.query';

const useTenantLongRentsList = (type: ContractRentStatus, limit = 10) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    data,
    fetchMore: fetchMoreLongRents,
    loading: defaultLoading,
  } = usegetTenantActiveLongTerms({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        type,
        limit,
      },
    },
  });

  const activeLongRents = data?.contract__tenant_longTermRents.data;

  const paginationInfoForLongRents = data?.contract__tenant_longTermRents.pageInfo;

  const afterCursorForLongRents = paginationInfoForLongRents?.afterCursor;

  const loadMoreLongRents = async () => {
    setIsLoading(true);
    await fetchMoreLongRents({
      variables: {
        input: {
          afterCursor: paginationInfoForLongRents?.afterCursor,
          limit,
          type,
        },
      },
    });
    setIsLoading(false);
  };

  return {
    isLoading,
    defaultLoading,
    loadMoreLongRents,
    data,
    activeLongRents,
    afterCursorForLongRents,
  };
};

export default useTenantLongRentsList;
