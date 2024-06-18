import { StatusChangeRentType } from 'types/card';

import { ApartmentAdStatusType, ApartmentRentPeriodType } from '../../__generated__/types';
import { useStopRentAdvert } from '../../graphql/mutations/Advert/__generated__/stopAdvert.mutation.gql';
import useChangeAdvertStatus from '../useChangeAdvertStatus';

const usePauseAdvert = (periodType: StatusChangeRentType, id: string) => {
  const [stopAdvertAsync, { loading }] = useStopRentAdvert();

  const { incrementCount, decrementCount, deleteAdvertFromCache, addAdvertFromCache } = useChangeAdvertStatus(
    id,
    ApartmentAdStatusType.Published,
    periodType,
  );

  const {
    incrementCount: incrementCountPausedAdverts,
    decrementCount: decrementCountPausedAdverts,
    addAdvertFromCache: addPausedAdvert,
  } = useChangeAdvertStatus(id, ApartmentAdStatusType.Paused, periodType);

  const changeAdvertStatus = async () => {
    await stopAdvertAsync({
      variables: {
        input: {
          id,
          periodType: periodType as unknown as ApartmentRentPeriodType,
        },
      },
    });
  };

  return {
    changeAdvertStatus,
    deleteAdvertFromCache,
    addAdvertFromCache,
    decrementCount,
    incrementCount,
    loading,
    addPausedAdvert,
    incrementCountPausedAdverts,
    decrementCountPausedAdverts,
  };
};
export default usePauseAdvert;
