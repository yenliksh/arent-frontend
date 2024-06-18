import { useState } from 'react';

import { ContractRentStatus } from '../../../../../../__generated__/types';
import { usegetTenantActiveShortTerms } from '../../../../../../graphql/queries/Contracts/__generated__/getTenantShortTerms.query';

const useTenantShortRentsList = (type: ContractRentStatus, limit = 10) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: shortRentsData,
    fetchMore: fetchMoreShortRents,
    loading: defaultLoading,
  } = usegetTenantActiveShortTerms({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        type,
        limit,
      },
    },
  });

  const activeShortRents = shortRentsData?.contract__tenant_shortTermRents.data;

  const paginationInfoForShortRents = shortRentsData?.contract__tenant_shortTermRents.pageInfo;

  const afterCursorForShortRents = paginationInfoForShortRents?.afterCursor;

  const loadMoreShortRents = async () => {
    setIsLoading(true);
    await fetchMoreShortRents({
      variables: {
        input: {
          afterCursor: paginationInfoForShortRents?.afterCursor,
          limit,
          type,
        },
      },
    });
    setIsLoading(false);
  };

  return {
    defaultLoading,
    loadMoreShortRents,
    shortRentsData,
    activeShortRents,
    afterCursorForShortRents,
    isLoading,
  };
};

export default useTenantShortRentsList;
