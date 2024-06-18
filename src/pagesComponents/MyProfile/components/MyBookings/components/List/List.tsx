import { FC, useMemo } from 'react';
import { dayjs } from 'services';
import styled from 'styled-components';
import { getPercentOnRent } from 'utils';

import { CardActiveRent } from '../../../../../../components/СardActiveRent';
import { FEE_PERCENTS_LONG_TERM, FEE_PERCENTS_SHORT_TERM } from '../../../../../../constains';
import { getTenantActiveShortTerms } from '../../../../../../graphql/queries/Contracts/__generated__/getTenantShortTerms.query';
import { RentTypeEnum } from '../../../../../../types';

type ListProps = {
  rents: getTenantActiveShortTerms['contract__tenant_shortTermRents']['data'];
  typeRent: RentTypeEnum;
};

const List: FC<ListProps> = ({ rents, typeRent }) => {
  const isShortTerm = typeRent === RentTypeEnum.SHORT;

  const calculateCostWithComission = (cost: number) => {
    const commission = isShortTerm ? FEE_PERCENTS_SHORT_TERM : FEE_PERCENTS_LONG_TERM;
    return String(cost + Math.round(getPercentOnRent(cost, commission)));
  };

  const renderRents = useMemo(() => {
    return rents?.map((item, index) => {
      const address = item.apartmentAd?.address!;
      const formattedAddress = `${address.region || ''} ${address.city || ''} ${address.street || ''} ${
        address.houseNumber || ''
      }`;
      const paymentDate = item?.nextPayment?.withdrawFundsDate
        ? dayjs(item.nextPayment?.withdrawFundsDate).format('DD.MM.YYYY')
        : null;

      const costWithCommisson = calculateCostWithComission(Number(item?.cost));
      return (
        <CardActiveRent
          key={index}
          id={item.id}
          pictureSrc={item.apartmentAd?.photos[0]?.fileKey || ''}
          title={item.apartmentAd?.description?.name || ''}
          address={formattedAddress || ''}
          price={costWithCommisson || ''}
          paymentDate={paymentDate}
          rentType={item.apartmentAd?.rentPeriodType!}
        />
      );
    });
  }, [rents]);

  return <Root>{renderRents}</Root>;
};

export default List;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
