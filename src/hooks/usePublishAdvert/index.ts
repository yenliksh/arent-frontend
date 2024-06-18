import { notify } from 'services';
import { StatusChangeRentType } from 'types/card';

import { ApartmentAdStatusType, ApartmentRentPeriodType } from '../../__generated__/types';
import { usePublishAdvertAsync } from '../../graphql/mutations/Advert/__generated__/publishAd.mutation';
import useChangeAdvertStatus from '../useChangeAdvertStatus';

function usePublishAdvert(id: string, periodType: StatusChangeRentType) {
  const { decrementCount, deleteAdvertFromCache } = useChangeAdvertStatus(id, ApartmentAdStatusType.Paused, periodType);
  const { incrementCount } = useChangeAdvertStatus(id, ApartmentAdStatusType.Published, periodType);

  const [publishAdvertFetch, { loading }] = usePublishAdvertAsync({
    variables: {
      input: {
        id,
        periodType: periodType as unknown as ApartmentRentPeriodType,
      },
    },
  });

  const publishAdvert = async () => {
    try {
      const { data } = await publishAdvertFetch();
      const problemMessage = data?.rentAd__publish.problem?.message;

      if (problemMessage) {
        throw problemMessage;
      }

      await deleteAdvertFromCache();

      decrementCount();
      incrementCount();
    } catch (error) {
      notify(error as string);
    }
  };

  return { publishAdvert, loading };
}

export default usePublishAdvert;
