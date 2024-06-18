import { Routes } from 'constains';
import { checkActualStep } from 'hocs';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../../public/locales/types';

const typeHousing = dynamic(() => import('../../../pagesComponents/ChooseHouseType/TypeHousing'), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [LocalTypes.UI, LocalTypes.COMMON, LocalTypes.TYPE_HOUSING])),
  },
});

export default checkActualStep(typeHousing, Routes.adCreateHouseType);
