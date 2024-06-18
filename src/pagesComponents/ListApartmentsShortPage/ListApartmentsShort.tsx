import { ApartamentListWrapper, List } from 'components';
import { Categories } from 'components/Categories';
import { APARTMENT_MAX_PRICE_FOR_BOOKING, APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT } from 'constains';
import { useGetShortRentAdsList } from 'graphql/queries/Apartments/__generated__/getShortApartmentsForList.query';
import { useGetShortRentAdsForMap } from 'graphql/queries/Apartments/__generated__/getShortApartmentsForMap.query';
import { useClientSize, usePagination, useToggle } from 'hooks';
import useMetaTag from 'hooks/useMetaTag';
import Filters from 'layouts/MainLayout/components/Filters/Filters';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { dayjs } from 'services';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { ApartmentAdInList } from 'types/advert';
import { Breadcrumbs } from 'ui';

import {
  ApartmentAdClusterModel,
  ApartmentAdShortTermRentViewModel,
  ApartmentCategory,
  ApartmentRentPeriodType,
  ApartmentRuleType,
  ApartmentType,
  ShortTermRentBookingType,
  ShortTermRentCancellationPolicyType,
} from '../../__generated__/types';
import { Map } from '../../components/Map';
import { BASE_COORDINATE } from '../../components/Map/Map';
import { BottomToggle } from './components/BottomToggle';
import { CommunicationsEnum } from './options';

const Layout = dynamic(() => import('layouts/MainLayout/MainLayout'), { ssr: true });
const BottomFilters = dynamic(() => import('./components/BottomFilters/BottomFilters'), { ssr: true });

type ListApartmentsProps = {
  city: string;
  lat: string;
  lng: string;
  category: ApartmentCategory;
};

const ListApartments: FC<ListApartmentsProps> = ({ city, lat, lng, category }) => {
  const { t } = useTranslation('listApartmentsPage');
  const { query } = useRouter();
  const { page, handleSetPage, limit } = usePagination(4);

  const listApartmentInnerRef = useRef<HTMLDivElement>(null);

  const [ads, setAds] = useState<Array<ApartmentAdInList>>([]);
  const [markers, setMarkers] = useState<Array<ApartmentAdInList>>([]);

  const [center, setCenter] = useState({
    lat: Number(lat) === 0 ? BASE_COORDINATE.lat : Number(lat),
    lng: Number(lng) === 0 ? BASE_COORDINATE.lng : Number(lng),
  });

  const { isOpened: isMapsOpened, open: openMaps, close: closeMaps } = useToggle(false);

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
    apartmentTypes: query.housingTypes ? (query.housingTypes as ApartmentType[]) : null,
    apartmentCategory: query.category ? (query.category as ApartmentCategory) : category || ApartmentCategory.Flat,
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
    landArea: Number(query.landArea) || null,
    totalArea: Number(query.totalArea) || null,
    territoryArea: Number(query.territoryArea) || null,
    objectArea: Number(query.objectArea) || null,
    ceilingHeight: Number(query.ceilingHeight) || null,
    yearOfConstruction: Number(query.yearOfConstruction) || null,
    floor: Number(query.floor) || null,
    waterSupply: query.waterSupply ? String(query.waterSupply) : null,
    gasSupply: query.gasSupply ? String(query.gasSupply) : null,
    electricitySupply: query.electricitySupply ? String(query.electricitySupply) : null,
    objectPlacement: query.objectPlacement ? String(query.objectPlacement) : null,
    communications: (query.communications as CommunicationsEnum[]) || null,
    arrivalTimeStart: query.arrivalStart ? String(query.arrivalStart) : null,
    location: {
      lat: Number(lat) || BASE_COORDINATE.lat,
      lng: Number(lng) || BASE_COORDINATE.lng,
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

  const { data } = useGetShortRentAdsList({
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
      if (page === 0) setAds(filteredApartments as Array<ApartmentAdInList>);
      else setAds((prev) => [...prev, ...(filteredApartments as Array<ApartmentAdInList>)]);
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

  const handleNormalizeMarkers = useCallback(
    (ads: Array<ApartmentAdClusterModel>) => {
      return ads?.map((ad) => {
        return {
          ...ad,
          type: ApartmentRentPeriodType.ShortTerm,
        };
      });
    },
    [ads],
  );

  useEffect(() => {
    setCenter({ lat: +lat! || 0, lng: +lng! || 0 });
  }, [lat, lng]);

  const { getIsBreakpoint } = useClientSize();

  const { isOpened: listModalVisibility, close: hideListModal } = useToggle(false);

  const { metaTitle, metaContent } = useMetaTag(city, filters, page);

  const isBreakpoint = getIsBreakpoint('sm');

  const handleChangePage = useCallback(() => {
    handleSetPage(page + 1);
  }, [handleSetPage, page]);

  const { loading: loadingForMap } = useGetShortRentAdsForMap({
    fetchPolicy: 'cache-and-network',
    onError: () => {
      setMarkers([]);
    },
    onCompleted: (data) => {
      const markers = data.rentAd__find_shortTermAdsCluster.data;
      const { slugs } = data.rentAd__find_shortTermAdsCluster;
      let filteredMarkers = handleNormalizeMarkers(markers as Array<ApartmentAdClusterModel>);
      filteredMarkers = filteredMarkers.map((el) => {
        return { ...el, slug: slugs.find((sl) => sl.id === el.id)?.slug };
      });
      if (page === 0) setMarkers([]);
      else setMarkers(filteredMarkers as unknown as Array<ApartmentAdInList>);
    },
    variables: {
      filter: {
        ...filters,
      },
    },
  });

  return (
    <StyledMainLayout
      headTitle={metaTitle || t('page.headTitle')}
      filters={<Filters />}
      childrenForHeader={<Categories />}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} data-react-helmet="true" />
        <meta name="description" content={metaContent} data-react-helmet="true" />
      </Helmet>
      <Container>
        <Breadcrumbs title={t('page.shortTerm')} />
        {!isMapsOpened && (
          <StyledApartamentListWrapper isVisible={listModalVisibility} onClose={hideListModal}>
            <div ref={listApartmentInnerRef}>
              <List
                page={page}
                onSetFocusOnCard={handleSetFocusOnCard}
                onDeleteFocusOnCard={handleDeleteFocusOnCard}
                onSetPage={handleChangePage}
                totalPages={pagesData?.totalPages || 0}
                ads={ads || []}
                totalItems={pagesData?.totalItems || 0}
              />
            </div>
          </StyledApartamentListWrapper>
        )}
        {isMapsOpened && (
          <MapWrapper>
            <Map setCenter={setCenter} center={center} isLoading={loadingForMap} markers={markers || []} isFullWidth />
          </MapWrapper>
        )}
        <BottomButtonsContaner $isBreakpoint={isBreakpoint}>
          <BottomToggle isMapsOpened={isMapsOpened} toggleOpen={isMapsOpened ? closeMaps : openMaps} />
          <BottomFilters handleSetPage={handleSetPage} />
        </BottomButtonsContaner>
      </Container>
    </StyledMainLayout>
  );
};

export default ListApartments;

const StyledMainLayout = styled(Layout)`
  && {
    padding: 0;
    padding-left: 48px;
    padding-right: 48px;

    @media (min-width: ${BreakpointsEnum.sm}px) {
      padding-right: 0;
    }
    @media (min-width: ${BreakpointsEnum.md}px) {
      padding-left: 72px;
      padding-right: 72px;
    }
  }
`;
const Container = styled.div`
  --headerHeight: 108px;
  position: relative;
  min-height: calc(100vh - var(--headerHeight));
  min-height: calc(var(--100vh) - var(--headerHeight));
`;

const StyledApartamentListWrapper = styled(ApartamentListWrapper)`
  flex-shrink: 0;
`;

const BottomButtonsContaner = styled.div<{ $isBreakpoint: boolean }>`
  position: fixed;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
  ${({ $isBreakpoint }) => $isBreakpoint && `margin-bottom: 60px`}
`;

const MapWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 24px;
`;
