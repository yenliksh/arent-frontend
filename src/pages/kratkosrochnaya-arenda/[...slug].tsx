import { apartmentCategoriesList } from 'constains';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GoogleMapService from 'services/google-maps';

import { LocalTypes } from '../../../public/locales/types';
import { ListApartmentsShort } from '../../pagesComponents/ListApartmentsShortPage';

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { slug } = props.query;

  const city = slug![0].toLocaleLowerCase() || 'almaty';

  let category = null;

  if (slug!.length > 1) {
    category = apartmentCategoriesList.find((el) => el.slug === slug![1])?.value;
  }

  let location = null;

  props.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=59');

  try {
    const places = await GoogleMapService.getPlacesBySystem(city);

    const coordinates = await GoogleMapService.getPlacesDetailsBySystem(places[0]?.value);

    location = {
      lat: coordinates?.location?.lat,
      lng: coordinates?.location?.lng,
      label: coordinates.city,
    };
  } catch (e) {
    console.log('SSR error short term page');
  }

  return {
    props: {
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

export default ListApartmentsShort;
