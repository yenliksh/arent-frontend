import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../../public/locales/types';
import { Routes } from '../../../constains';
import { checkActualStep } from '../../../hocs';

const informationHouse = dynamic(() => import('../../../pagesComponents/InformationHouse/InformationHouse'), {
  ssr: false,
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [LocalTypes.UI, LocalTypes.COMMON, LocalTypes.IMPORTANT_INFO_PAGE])),
  },
});

export default checkActualStep(informationHouse, Routes.adInformationHouse);
