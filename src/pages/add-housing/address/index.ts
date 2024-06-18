import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../../public/locales/types';
import { Routes } from '../../../constains';
import { checkActualStep } from '../../../hocs';

const addressHouse = dynamic(() => import('../../../pagesComponents/AddressHouse/AddressHouse'), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [LocalTypes.UI, LocalTypes.COMMON, LocalTypes.ADDRESS_HOUSE])),
  },
});

export default checkActualStep(addressHouse, Routes.adCreateAddress);
