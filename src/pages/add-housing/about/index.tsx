import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../../public/locales/types';
import { Routes } from '../../../constains';
import { checkActualStep } from '../../../hocs';

const aboutHouse = dynamic(() => import('../../../pagesComponents/AboutHouse/AboutHouse'), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [LocalTypes.UI, LocalTypes.COMMON, LocalTypes.ABOUT_HOUSE])),
  },
});

export default checkActualStep(aboutHouse, Routes.adCreateAboutHouse);
