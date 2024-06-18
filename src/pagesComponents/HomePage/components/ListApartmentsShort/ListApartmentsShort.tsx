import { List, SkeletonApartmentsList } from 'components';
import { APARTMENT_MAX_PRICE_FOR_BOOKING, APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT, Routes } from 'constains';
import { useGetShortRentAdsList } from 'graphql/queries/Apartments/__generated__/getShortApartmentsForList.query';
import { usePagination } from 'hooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCallback, useRef, useState } from 'react';
import { dayjs } from 'services';
import styled, { css } from 'styled-components';
import { ApartmentAdInList } from 'types/advert';

import { Arrow } from '../../../../../public/svg/components';
import {
  ApartmentAdShortTermRentViewModel,
  ApartmentCategory,
  ApartmentRentPeriodType,
  ApartmentRuleType,
  ApartmentType,
  ShortTermRentBookingType,
  ShortTermRentCancellationPolicyType,
} from '../../../../__generated__/types';
import { BASE_COORDINATE } from '../../../../components/Map/Map';

const ListApartments = () => {
  const { t } = useTranslation('homePage', { keyPrefix: 'list' });
  const { query } = useRouter();
  const { page, limit } = usePagination(8);
  const router = useRouter();

  const listApartmentInnerRef = useRef<HTMLDivElement>(null);
  const handleChangePage = () => {};

  const [ads, setAds] = useState<Array<ApartmentAdInList>>([]);
  const [markers, setMarkers] = useState<Array<ApartmentAdInList>>([]);

  const numberOfRooms = query.rooms ? [...query.rooms].map((elem) => +elem) : null;

  const filters = {
    priceRange: {
      min: query?.min ? String(query?.min) : APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT,
      max: query?.max ? String(query?.max) : APARTMENT_MAX_PRICE_FOR_BOOKING,
    },
    dateRange: {
      startDate: query.start
        ? dayjs(query.start as string)
            .format('YYYY-MM-DD')
            .toString()
        : null,
      endDate: query.end
        ? dayjs(query.end as string)
            .format('YYYY-MM-DD')
            .toString()
        : null,
    },
    apartmentTypes: []?.length > 0 ? ([] as ApartmentType[]) : null,
    apartmentCategory: query.category ? (query.category as ApartmentCategory) : null,
    numberOfRooms: numberOfRooms || null,
    numberOfChild: Number(query.kids) === 0 ? null : Number(query.kids),
    numberOfPets: Number(query.pets) === 0 ? null : Number(query.pets),
    numberOfAdults: Number(query.guests) || 1,
    departureTimeEnd: query.departureEnd ? String(query.departureEnd) : null,
    departureTimeStart: query.departureStart ? String(query.departureStart) : null,
    rentBookingType: (query.rentBookingType as ShortTermRentBookingType) || null,
    cancellationPolicyType: (query.cancellationPolicy as ShortTermRentCancellationPolicyType) || null,
    arrivalTimeEnd: query.arrivalEnd ? String(query.arrivalEnd) : null,
    rules: (query.rules as ApartmentRuleType[]) || null,
    arrivalTimeStart: query.arrivalStart ? String(query.arrivalStart) : null,
    location: {
      lat: Number(query.lat) || BASE_COORDINATE.lat,
      lng: Number(query.lng) || BASE_COORDINATE.lng,
      radiusInKm: Math.ceil(query.radius && query.radius !== '0' ? +query.radius : 30),
    },
  };

  const handleNormalizeAds = useCallback(
    (ads: Array<ApartmentAdShortTermRentViewModel>) => {
      return ads?.map((ad) => {
        return {
          rentType: ad.apartmentAd.rentPeriodType,
          guestsNum: ad.apartmentAd.details?.numberOfGuests,
          bedNum: '1',
          bathNum: '1',
          location: {
            lat: ad.apartmentAd.address?.lat,
            lng: ad.apartmentAd.address?.lng,
          },
          apartmentType: ad.apartmentAd.apartmentType,
          pictureSrc: ad.apartmentAd.photos[0].fileKey,
          title: ad.apartmentAd.description?.name,
          price: ad.apartmentAd.shortTermRent?.cost,
          address: `${ad.apartmentAd.address?.street || ''}  ${ad.apartmentAd.address?.houseNumber || ''},  ${
            ad.apartmentAd.address?.city || ''
          },  Казахстан`,
          id: ad.apartmentAd.shortTermRent?.id,
          type: ApartmentRentPeriodType.ShortTerm,
        };
      });
    },
    [ads],
  );

  const { data, loading: loadingForList } = useGetShortRentAdsList({
    fetchPolicy: 'cache-and-network',
    onError: () => {
      setAds([]);
    },
    onCompleted: (data) => {
      const apartments = data.rentAd__find_shortTermAds.data || [];
      const { slugs } = data.rentAd__find_shortTermAds;
      let filteredApartments = handleNormalizeAds(apartments as Array<ApartmentAdShortTermRentViewModel>);
      filteredApartments = filteredApartments.map((el) => {
        return { ...el, slug: slugs?.find((sl) => sl.id === el.id)?.slug };
      });
      setAds(filteredApartments as Array<ApartmentAdInList>);
    },
    variables: {
      filter: {
        ...filters,
      },
      pagination: {
        page: page + 1,
        limit,
      },
    },
  });
  const pagesData = data?.rentAd__find_shortTermAds.pageInfo;

  const showMore = async () => {
    const queries = {
      guests: 1,
      city: 'almaty',
      lat: BASE_COORDINATE.lat,
      lng: BASE_COORDINATE.lng,
    };

    router.push({ pathname: `${Routes.listApartmentsShort}/almaty`, query: queries });
  };

  const handleSetFocusOnCard = (id: string) => {
    const currentAd = markers.map((ad) => {
      if (ad.id === id) {
        ad = {
          ...ad,
          isFocus: true,
        };
      } else {
        ad = {
          ...ad,
          isFocus: false,
        };
      }
      return ad;
    });
    setMarkers(currentAd);
  };

  const handleDeleteFocusOnCard = (id: string) => {
    const currentAd = markers.map((ad) => {
      if (ad.id === id) {
        ad = {
          ...ad,
          isFocus: false,
        };
      }
      return ad;
    });
    setMarkers(currentAd);
  };

  const isCards = ads?.length > 0;

  return (
    <Container>
      <div ref={listApartmentInnerRef}>
        {loadingForList ? (
          <SkeletonApartmentsList />
        ) : (
          <List
            page={page}
            onSetFocusOnCard={handleSetFocusOnCard}
            onDeleteFocusOnCard={handleDeleteFocusOnCard}
            onSetPage={handleChangePage}
            totalPages={pagesData?.totalPages || 0}
            ads={ads || []}
            totalItems={pagesData?.totalItems || 0}
          />
        )}
      </div>
      {isCards && (
        <ButtonShowMore onClick={showMore}>
          <StyledText>{t('showMore')}</StyledText>
          <Arrow />
        </ButtonShowMore>
      )}
    </Container>
  );
};

export default ListApartments;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonShowMore = styled.button`
  padding: 10px 24px;
  border-radius: 12px;
  display: flex;
  width: fit-content;
  align-items: center;
  margin-top: 40px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.greyScale[30]};
  `}
`;

const StyledText = styled.p`
  margin-right: 8px;
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[100]};
    ${typography.caption_16_12_regular}
  `}
`;
