import { client } from 'libs';
import { CardStatusEnum } from 'types';

import {
  ApartmentAdLongTermRentModel,
  ApartmentAdShortTermRentModel,
  ApartmentAdStatusType,
  MyApartmentAdStatusCountResponse,
  RentPeriodType,
} from '../../__generated__/types';
import { useDeleteRentAdvert } from '../../graphql/mutations/Advert/__generated__/deleteAdvert.mutation';
import { GetMyAdsStatusCountDocument } from '../../graphql/queries/MyAds/__generated__/getMyAdsStatusCount.query';
import { GetMyRentAdsDocument } from '../../graphql/queries/MyAds/__generated__/getMyApartmentAds.query';

const useDeleteAd = (id: string, advertType: ApartmentAdStatusType, rentType: RentPeriodType) => {
  const [deleteAdvertFetch, { loading }] = useDeleteRentAdvert();

  const mappingCountTypes = {
    [ApartmentAdStatusType.Published]: CardStatusEnum.PUBLISHED,
    [ApartmentAdStatusType.Paused]: CardStatusEnum.PAUSED,
    [ApartmentAdStatusType.Processing]: CardStatusEnum.PROCESSING,
    [ApartmentAdStatusType.Active]: CardStatusEnum.ACTIVE,
    [ApartmentAdStatusType.Draft]: CardStatusEnum.DRAFT,
  };

  const countType = mappingCountTypes[advertType];

  const getCountAds = () => {
    return client.readQuery({
      query: GetMyAdsStatusCountDocument,
    }).rentAd__myRentAd_statusCount as MyApartmentAdStatusCountResponse;
  };

  const readAllAdverts = async () => {
    const data = await client.readQuery({
      query: GetMyRentAdsDocument,
      variables: { input: { status: advertType } },
    });
    const shortTermAds = data.rentAd__myRentAd_unionRentPeriods.apartmentAdShortTermRent;
    const longTermAds = data.rentAd__myRentAd_unionRentPeriods.apartmentAdLongTermRent;
    return {
      shortTermAds,
      longTermAds,
    };
  };

  const deleteAdvert = async () => {
    await deleteAdvertFetch({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const deleteAdvertFromCache = async () => {
    const { shortTermAds, longTermAds } = await readAllAdverts();
    let newAds;
    let currentAdvert;

    if (rentType === RentPeriodType.ShortTerm) {
      currentAdvert = shortTermAds.find((ad: ApartmentAdShortTermRentModel) => ad.apartmentAdId === id);
      newAds = {
        apartmentAdLongTermRent: longTermAds,
        apartmentAdShortTermRent: shortTermAds.filter(
          (elem: ApartmentAdShortTermRentModel) => elem.apartmentAdId !== id,
        ),
      };
    } else {
      currentAdvert = longTermAds.find((ad: ApartmentAdShortTermRentModel) => ad.apartmentAdId === id);
      newAds = {
        apartmentAdLongTermRent: longTermAds.filter((elem: ApartmentAdLongTermRentModel) => elem.apartmentAdId !== id),
        apartmentAdShortTermRent: shortTermAds,
      };
    }

    await client.writeQuery({
      query: GetMyRentAdsDocument,
      variables: { input: { status: advertType } },
      data: {
        rentAd__myRentAd_unionRentPeriods: {
          ...newAds,
        },
      },
    });

    return currentAdvert;
  };

  const decrementCount = () => {
    const count = getCountAds();
    const currentCount = Number(count[countType]);
    client.writeQuery({
      query: GetMyAdsStatusCountDocument,
      data: {
        rentAd__myRentAd_statusCount: {
          ...count,
          [countType]: currentCount - 1,
        },
      },
    });
  };

  const deleteAdvertWithSideEffects = async () => {
    await deleteAdvert();
    await deleteAdvertFromCache();
    decrementCount();
  };

  return { deleteAdvertWithSideEffects, loading };
};

export default useDeleteAd;
