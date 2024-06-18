import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import systemHttp from 'services/systemHttp';

import { LocalTypes } from '../../../public/locales/types';
import { ApartmentPage } from '../../pagesComponents/ApartmentPage';

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { query } = props;

  const { slug } = query;

  const apartmentAdSearchId = (slug as string)?.split('-')[0];

  let apartmentAdIdentificator = null;

  try {
    const res = await systemHttp.get(`/user-panel/apartment-identificator/${apartmentAdSearchId}/find`);
    if (res) apartmentAdIdentificator = res.data;
  } catch (e) {
    console.log('SSR apartment page error', e);
  }

  const apartmentId = apartmentAdIdentificator?.props?.apartmentId.props.value || '';
  const keywordsSeo = apartmentAdIdentificator?.props?.keywordsSeo || '';
  const titleSeo = apartmentAdIdentificator?.props?.titleSeo || '';
  const descriptionSeo = apartmentAdIdentificator?.props?.descriptionSeo || '';

  props.res.setHeader('Cache-Control', 'public, s-maxage=6000, stale-while-revalidate=59');

  return {
    props: {
      apartmentId,
      keywordsSeo,
      titleSeo,
      descriptionSeo,
      slug,
      apartmentAdSearchId,
      ...(await serverSideTranslations(props.locale!, [
        LocalTypes.UI,
        LocalTypes.COMMON,
        LocalTypes.AUTH_PAGE,
        LocalTypes.IMPORTANT_INFO_PAGE,
        LocalTypes.APARTMENT_PAGE,
        LocalTypes.ACTIVE_RENT,
      ])),
    },
  };
};

export default ApartmentPage;
