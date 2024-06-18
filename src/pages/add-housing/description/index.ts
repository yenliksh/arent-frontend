import { Routes } from 'constains';
import { checkActualStep } from 'hocs';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../../public/locales/types';

const descriptionHouse = dynamic(() => import('../../../pagesComponents/DescriptionHouse/DescriptionHouse'), {
  ssr: false,
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [LocalTypes.UI, LocalTypes.COMMON, LocalTypes.DESCRIPTION_HOUSE])),
  },
});

export default checkActualStep(descriptionHouse, Routes.adDescriptionHouse);
