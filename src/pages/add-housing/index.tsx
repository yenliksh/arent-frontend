import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../public/locales/types';

const advert = dynamic(() => import('../../pagesComponents/ChooseRentType/ChooseRentType'), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [LocalTypes.UI, LocalTypes.COMMON, LocalTypes.FORMAT_PAGE])),
  },
});

export default advert;
