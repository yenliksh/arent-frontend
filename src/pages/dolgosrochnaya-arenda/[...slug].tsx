import { client } from 'libs/apollo-client/client';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GoogleMapService from 'services/google-maps';

import { LocalTypes } from '../../../public/locales/types';
import { ApartmentRuleType, ApartmentType } from '../../__generated__/types';
import { BASE_COORDINATE } from '../../components/Map/Map';
import {
  APARTMENT_MAX_PRICE_FOR_BOOKING,
  APARTMENT_MIN_PRICE_FOR_BOOKING_LONG,
  apartmentCategoriesList,
} from '../../constains';
import {
  GetFilteredRentAdsList,
  GetFilteredRentAdsListDocument,
  GetFilteredRentAdsListVariables,
} from '../../graphql/queries/Apartments/__generated__/getLongApartmentsForList.query';
import {
  GetFilteredRentAdsForMap,
  GetFilteredRentAdsForMapDocument,
  GetFilteredRentAdsForMapVariables,
} from '../../graphql/queries/Apartments/__generated__/getLongApartmentsForMap.query';
import { ListApartmentsLong } from '../../pagesComponents/ListApartmentsLongPage';

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { query } = props;

  const { slug } = query;

  const city = slug![0].toLocaleLowerCase() || 'almaty';

  let category = null;

  if (slug!.length > 1) {
    category = apartmentCategoriesList.find((el) => el.slug === slug![1])?.value;
  }

  let markers = null;
  let adverts = null;
  let location = null;

  const numberOfRooms = query.rooms ? [...query.rooms].map((elem) => +elem) : null;

  const filters = {
    priceRange: {
      min: query?.min ? String(query?.min) : APARTMENT_MIN_PRICE_FOR_BOOKING_LONG,
      max: query?.max ? String(query?.max) : APARTMENT_MAX_PRICE_FOR_BOOKING,
    },
    apartmentTypes: (query.apartmentTypes as ApartmentType[]) || null,
    numberOfRooms: numberOfRooms || null,
    numberOfChild: Number(query.kids) === 0 ? null : Number(query.kids),
    numberOfPets: Number(query.pets) === 0 ? null : Number(query.pets),
    numberOfAdults: Number(query.guests) || 1,
    rules: (query.rules as Array<ApartmentRuleType>) || null,
    location: {
      lat: Number(query.lat) || BASE_COORDINATE.lat,
      lng: Number(query.lng) || BASE_COORDINATE.lng,
      radiusInKm: 30,
    },
  };

  try {
    const places = await GoogleMapService.getPlacesBySystem(city);

    const coordinates = await GoogleMapService.getPlacesDetailsBySystem(places[0]?.value);

    location = {
      lat: coordinates?.location?.lat,
      lng: coordinates?.location?.lng,
      label: coordinates.city,
    };

    const { data: advertsData } = await client.query<GetFilteredRentAdsList, GetFilteredRentAdsListVariables>({
      query: GetFilteredRentAdsListDocument,
      variables: {
        filter: { ...filters },
        pagination: { page: 1, limit: 15 },
      },
    });
    adverts = advertsData;
  } catch (e) {
    console.log(e, 'error adverts SSR');
  }

  try {
    const { data: markersData } = await client.query<GetFilteredRentAdsForMap, GetFilteredRentAdsForMapVariables>({
      query: GetFilteredRentAdsForMapDocument,
      variables: {
        filter: { ...filters },
      },
    });
    markers = markersData;
  } catch (e) {
    console.log(e, 'error adverts SSR');
  }

  const defaultAdverts = adverts ? adverts.rentAd__find_longTermAds.data : [];
  const defaultMarkers = markers ? markers.rentAd__find_longTermAdsCluster.data : [];
  const defaultPagesData = adverts ? adverts.rentAd__find_longTermAds.pageInfo : [];

  props.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=59');

  return {
    props: {
      defaultAdverts,
      defaultMarkers,
      defaultPagesData,
      city,
      lat: location?.lat,
      lng: location?.lng,
      category,
      ...(await serverSideTranslations(props.locale!, [
        LocalTypes.UI,
        LocalTypes.COMMON,
        LocalTypes.AUTH_PAGE,
        LocalTypes.LIST_APARTMENTS_PAGE,
        LocalTypes.HOME_PAGE,
      ])),
    },
  };
};

export default ListApartmentsLong;
