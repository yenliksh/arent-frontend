import { Categories } from 'components/Categories';
import { List } from 'components/List';
import { Map } from 'components/Map';
import { BASE_COORDINATE } from 'components/Map/Map';
import { APARTMENT_MAX_PRICE_FOR_BOOKING, APARTMENT_MIN_PRICE_FOR_BOOKING_LONG, isClientSide } from 'constains';
import { useGetFilteredRentAdsListLazyQuery } from 'graphql/queries/Apartments/__generated__/getLongApartmentsForList.query';
import { useGetFilteredRentAdsForMapLazyQuery } from 'graphql/queries/Apartments/__generated__/getLongApartmentsForMap.query';
import useMetaTag from 'hooks/useMetaTag';
import Filters from 'layouts/MainLayout/components/Filters/Filters';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CommunicationsEnum } from 'pagesComponents/ListApartmentsShortPage/options';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { ApartmentAdInList } from 'types/advert';
import { Breadcrumbs } from 'ui';

import {
  ApartmentAdClusterModel,
  ApartmentAdLongTermRentViewModel,
  ApartmentCategory,
  ApartmentRentPeriodType,
  ApartmentRuleType,
  ApartmentType,
  BaseOffsetPaginationInfoModel,
} from '../../__generated__/types';
import { ApartamentListWrapper } from '../../components';
import useClientSize from '../../hooks/useClientSize';
import usePagination from '../../hooks/usePagination';
import useToggle from '../../hooks/useToggle';
import { BottomToggle } from './components/BottomToggle';

const Layout = dynamic(() => import('layouts/MainLayout/MainLayout'), { ssr: true });
const BottomFilters = dynamic(() => import('./components/BottomFilters/BottomFilters'), { ssr: true });

type ListApartmentsLongProps = {
  defaultPagesData: BaseOffsetPaginationInfoModel;
  defaultAdverts: Array<ApartmentAdLongTermRentViewModel>;
  defaultMarkers: Array<ApartmentAdClusterModel>;
  city: string;
  lat: string;
  lng: string;
  category: ApartmentCategory;
};

const ListApartmentsLong: FC<ListApartmentsLongProps> = ({ defaultPagesData, city, lat, lng, category }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { t } = useTranslation('listApartmentsPage', { keyPrefix: 'page' });

  const { page, handleSetPage, limit } = usePagination(12);

  const { getIsBreakpoint } = useClientSize();
  const isWidthSm = getIsBreakpoint('sm');

  const listApartmentInnerRef = useRef<HTMLDivElement>(null);

  const { isOpened: isMapsOpened, open: openMaps, close: closeMaps } = useToggle(false);

  const handleChangePage = () => {
    handleSetPage(page + 1);

    if (isWidthSm && listApartmentInnerRef) {
      listApartmentInnerRef.current?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }

    if (!isWidthSm && isClientSide) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const [ads, setAds] = useState<Array<ApartmentAdInList>>([]);
  const [markers, setMarkers] = useState<Array<ApartmentAdInList>>([]);

  const { query } = router;

  const [center, setCenter] = useState({
    lat: Number(lat) === 0 ? BASE_COORDINATE.lat : Number(lat),
    lng: Number(lng) === 0 ? BASE_COORDINATE.lng : Number(lng),
  });

  const numberOfRooms = router.query.rooms ? [...router.query.rooms].map((elem) => +elem) : null;

  const filters = {
    priceRange: {
      min: query?.min ? String(query?.min) : APARTMENT_MIN_PRICE_FOR_BOOKING_LONG,
      max: query?.max ? String(query?.max) : APARTMENT_MAX_PRICE_FOR_BOOKING,
    },
    apartmentTypes: query.housingTypes ? (query.housingTypes as ApartmentType[]) : null,
    apartmentCategory: query.category ? (query.category as ApartmentCategory) : category || ApartmentCategory.Flat,
    numberOfRooms: numberOfRooms || null,
    numberOfChild: Number(query.kids) === 0 ? null : Number(query.kids),
    numberOfPets: Number(query.pets) === 0 ? null : Number(query.pets),
    numberOfAdults: Number(query.guests) || 1,
    rules: (query.rules as Array<ApartmentRuleType>) || null,
    location: {
      lat: Number(lat) || BASE_COORDINATE.lat,
      lng: Number(lng) || BASE_COORDINATE.lng,
      radiusInKm: Math.ceil(query.radius ? +query.radius : 30),
    },
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
  };

  const handleNormalizeAds = useCallback(
    (ads: Array<ApartmentAdLongTermRentViewModel>) => {
      return ads?.map((ad) => {
        return {
          rentType: ad?.apartmentAd?.rentPeriodType,
          guestsNum: ad?.apartmentAd?.details?.numberOfGuests,
          location: {
            lat: ad?.apartmentAd?.address?.lat,
            lng: ad?.apartmentAd?.address?.lng,
          },
          apartmentType: ad?.apartmentAd?.apartmentType! || ApartmentType.Flat,
          pictureSrc: ad?.apartmentAd?.photos[0].fileKey,
          title: ad?.apartmentAd?.description?.name,
          price: String(ad.apartmentAd?.longTermRent?.cost),
          address: `${ad.apartmentAd?.address?.street || ''}  ${ad.apartmentAd?.address?.houseNumber || ''},  ${
            ad.apartmentAd?.address?.city || ''
          },  Казахстан`,
          id: ad.apartmentAd?.longTermRent?.id,
          type: ApartmentRentPeriodType.LongTerm,
        };
      });
    },
    [ads],
  );

  const [fetch, { data, loading }] = useGetFilteredRentAdsListLazyQuery();

  const fetchAdverts = async () => {
    await fetch({
      fetchPolicy: 'cache-first',
      nextFetchPolicy: 'network-only',
      onCompleted: (data) => {
        const apartments = data.rentAd__find_longTermAds.data || [];
        const { slugs } = data.rentAd__find_longTermAds;
        let filteredApartments = handleNormalizeAds(apartments as Array<ApartmentAdLongTermRentViewModel>);
        filteredApartments = filteredApartments.map((el) => {
          return { ...el, slug: slugs?.find((sl) => sl.id === el.id)?.slug };
        });
        if (page === 0) setAds(filteredApartments as Array<ApartmentAdInList>);
        else setAds((prev) => [...prev, ...(filteredApartments as Array<ApartmentAdInList>)]);
        setIsLoading(false);
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
  };

  useEffect(() => {
    fetchAdverts();
  }, [router.query, page]);

  const [fetchMarkers] = useGetFilteredRentAdsForMapLazyQuery();

  useEffect(() => {
    fetchMarkers({
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'network-only',
      onCompleted: (data) => {
        const markers = data.rentAd__find_longTermAdsCluster.data;
        const { slugs } = data.rentAd__find_longTermAdsCluster;
        let filteredMarkers = handleNormalizeMarkers(markers as Array<ApartmentAdClusterModel>);
        filteredMarkers = filteredMarkers.map((el) => {
          return { ...el, slug: slugs.find((sl) => sl.id === el.id)?.slug };
        });
        if (page === 0) setMarkers(filteredMarkers as unknown as Array<ApartmentAdInList>);
        else setMarkers((prev) => [...prev, ...(filteredMarkers as unknown as Array<ApartmentAdInList>)]);
      },
      variables: {
        filter: {
          ...filters,
        },
      },
    });
  }, [router.query]);

  const apartments = data?.rentAd__find_longTermAds?.data;
  const pagesData = data?.rentAd__find_longTermAds.pageInfo
    ? data?.rentAd__find_longTermAds.pageInfo
    : defaultPagesData;

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
          type: ApartmentRentPeriodType.LongTerm,
        };
      });
    },
    [apartments],
  );

  useEffect(() => {
    setCenter({ lat: +lat! || 0, lng: +lng! || 0 });
  }, [lat, lng]);

  // useEffect(() => {
  //   const filteredApartments = handleNormalizeAds(defaultAdverts as Array<ApartmentAdLongTermRentViewModel>);
  //   setAds(filteredApartments as Array<ApartmentAdInList>);
  // }, [defaultAdverts]);

  // useEffect(() => {
  //   const filteredMarkers = handleNormalizeMarkers(defaultMarkers as Array<ApartmentAdClusterModel>);
  //   setMarkers(filteredMarkers as unknown as Array<ApartmentAdInList>);
  // }, [defaultMarkers]);

  const { isOpened: listModalVisibility, close: hideListModal } = useToggle(false);

  const { metaTitle, metaContent } = useMetaTag(city, filters, page, true);

  const isBreakpoint = getIsBreakpoint('sm');

  return (
    <StyledMainLayout headTitle={metaTitle || t('headTitle')} filters={<Filters />} childrenForHeader={<Categories />}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} data-react-helmet="true" />
        <meta name="description" content={metaContent} data-react-helmet="true" />
      </Helmet>
      <Container>
        <Breadcrumbs title={t('longTerm')} />
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
                loadingForList={loading}
              />
            </div>
          </StyledApartamentListWrapper>
        )}
        {isMapsOpened && (
          <MapWrapper>
            <Map setCenter={setCenter} center={center} isLoading={isLoading} markers={markers || []} isFullWidth />
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

export default ListApartmentsLong;

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

const MapWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 24px;
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
