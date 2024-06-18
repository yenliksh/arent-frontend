import { GetMyAdsStatusCountDocument } from 'graphql/queries/MyAds/__generated__/getMyAdsStatusCount.query';
import {
  GetMyRentAds,
  GetMyRentAdsDocument,
  GetMyRentAdsVariables,
} from 'graphql/queries/MyAds/__generated__/getMyApartmentAds.query';
import { client } from 'libs';
import { CardStatusEnum } from 'types';
import { StatusChangeRentType } from 'types/card';

import { ApartmentAdStatusType, RentPeriodType } from '../../__generated__/types';

type ApartmentAdShortTermRent = GetMyRentAds['rentAd__myRentAd_unionRentPeriods']['apartmentAdShortTermRent'][number];
type ApartmentAdLongTermRent = GetMyRentAds['rentAd__myRentAd_unionRentPeriods']['apartmentAdLongTermRent'][number];

const isShortTermRent = (
  rent: ApartmentAdShortTermRent | ApartmentAdLongTermRent,
): rent is ApartmentAdShortTermRent => {
  return (rent as ApartmentAdShortTermRent)?.apartmentAd?.shortTermRent !== undefined;
};

const isLongTermRent = (rent: ApartmentAdShortTermRent | ApartmentAdLongTermRent): rent is ApartmentAdLongTermRent => {
  return (rent as ApartmentAdLongTermRent)?.apartmentAd?.longTermRent !== undefined;
};

const useChangeAdvertStatus = (id: string, advertStatus: ApartmentAdStatusType, rentType: StatusChangeRentType) => {
  const mappingCountTypes = {
    [ApartmentAdStatusType.Published]: CardStatusEnum.PUBLISHED,
    [ApartmentAdStatusType.Paused]: CardStatusEnum.PAUSED,
    [ApartmentAdStatusType.Processing]: CardStatusEnum.PROCESSING,
    [ApartmentAdStatusType.Active]: CardStatusEnum.ACTIVE,
    [ApartmentAdStatusType.Draft]: CardStatusEnum.DRAFT,
  };

  const countType = mappingCountTypes[advertStatus];

  const readAllAdverts = () => {
    const data = client.readQuery<GetMyRentAds, GetMyRentAdsVariables>({
      query: GetMyRentAdsDocument,
      variables: { input: { status: advertStatus } },
    });

    const shortTermAds = data?.rentAd__myRentAd_unionRentPeriods.apartmentAdShortTermRent || [];
    const longTermAds = data?.rentAd__myRentAd_unionRentPeriods.apartmentAdLongTermRent || [];

    return {
      shortTermAds,
      longTermAds,
    };
  };

  const changePaymentMethod = async () => {
    const { shortTermAds, longTermAds } = readAllAdverts();

    let newAds;

    let currentAdvert: ApartmentAdShortTermRent | ApartmentAdLongTermRent | undefined;

    if (rentType === RentPeriodType.ShortTerm) {
      currentAdvert = shortTermAds.find((ad) => ad.apartmentAdId === id);

      if (!currentAdvert) {
        return;
      }

      currentAdvert = { ...currentAdvert, apartmentAd: { ...currentAdvert.apartmentAd, innopayCardId: 'true' } };

      newAds = {
        apartmentAdLongTermRent: longTermAds,
        apartmentAdShortTermRent: shortTermAds.map((elem) => {
          if (elem.apartmentAdId === id && currentAdvert && isShortTermRent(currentAdvert)) {
            elem = currentAdvert;
          }
          return elem;
        }),
      };
    }

    if (rentType === RentPeriodType.LongTerm) {
      currentAdvert = longTermAds.find((ad) => ad.apartmentAdId === id);

      if (!currentAdvert) {
        return;
      }

      currentAdvert = { ...currentAdvert, apartmentAd: { ...currentAdvert.apartmentAd, innopayCardId: 'true' } };

      newAds = {
        apartmentAdShortTermRent: shortTermAds,
        apartmentAdLongTermRent: longTermAds.map((elem) => {
          if (elem.apartmentAdId === id && currentAdvert && isLongTermRent(currentAdvert)) {
            elem = currentAdvert;
          }
          return elem;
        }),
      };
    }

    client.writeQuery({
      query: GetMyRentAdsDocument,
      variables: { input: { status: advertStatus } },
      data: {
        rentAd__myRentAd_unionRentPeriods: {
          ...newAds,
        },
      },
    });

    return currentAdvert;
  };

  const deleteAdvertFromCache = async () => {
    const { shortTermAds, longTermAds } = readAllAdverts();
    let newAds;
    let currentAdvert;

    if (rentType === RentPeriodType.ShortTerm) {
      currentAdvert = shortTermAds.find((ad) => ad.apartmentAdId === id);
      newAds = {
        apartmentAdLongTermRent: longTermAds,
        apartmentAdShortTermRent: shortTermAds.filter((elem) => elem.apartmentAdId !== id),
      };
    } else {
      currentAdvert = longTermAds.find((ad) => ad.apartmentAdId === id);
      newAds = {
        apartmentAdLongTermRent: longTermAds.filter((elem) => elem.apartmentAdId !== id),
        apartmentAdShortTermRent: shortTermAds,
      };
    }

    client.writeQuery({
      query: GetMyRentAdsDocument,
      variables: { input: { status: advertStatus } },
      data: {
        rentAd__myRentAd_unionRentPeriods: {
          ...newAds,
        },
      },
    });

    return currentAdvert;
  };

  const getCountAds = () => {
    return client.readQuery({
      query: GetMyAdsStatusCountDocument,
    }).rentAd__myRentAd_statusCount;
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
  const incrementCount = () => {
    const count = getCountAds();
    const currentCount = Number(count[countType]);
    client.writeQuery({
      query: GetMyAdsStatusCountDocument,
      data: {
        rentAd__myRentAd_statusCount: {
          ...count,
          [countType]: currentCount + 1,
        },
      },
    });
  };

  const addAdvertFromCache = (advert: ApartmentAdShortTermRent | ApartmentAdLongTermRent) => {
    const { shortTermAds, longTermAds } = readAllAdverts();

    const newAdvert = {
      ...advert,
      status: [advertStatus],
    };

    let newAds;

    if (rentType === RentPeriodType.ShortTerm) {
      newAds = {
        apartmentAdLongTermRent: longTermAds,
        apartmentAdShortTermRent: [newAdvert, ...shortTermAds],
      };
    }

    if (rentType === RentPeriodType.LongTerm) {
      newAds = {
        apartmentAdLongTermRent: [newAdvert, ...longTermAds],
        apartmentAdShortTermRent: shortTermAds,
      };
    }

    client.writeQuery({
      query: GetMyRentAdsDocument,
      variables: { input: { status: advertStatus } },
      data: {
        rentAd__myRentAd_unionRentPeriods: {
          ...newAds,
        },
      },
    });
  };

  return { decrementCount, incrementCount, deleteAdvertFromCache, addAdvertFromCache, changePaymentMethod };
};

export default useChangeAdvertStatus;
