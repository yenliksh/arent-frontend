import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../public/locales/types';

const ActiveRent = dynamic(() => import('../../pagesComponents/ActiveRent/ActiveRent'), {
  ssr: false,
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      LocalTypes.UI,
      LocalTypes.COMMON,
      LocalTypes.IMPORTANT_INFO_PAGE,
      LocalTypes.ACTIVE_RENT,
    ])),
  },
});

export default ActiveRent;
