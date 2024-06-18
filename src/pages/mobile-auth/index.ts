import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../public/locales/types';

const MobileAuth = dynamic(() => import('../../pagesComponents/MobileAuth/MobileAuth'));

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      LocalTypes.UI,
      LocalTypes.COMMON,
      LocalTypes.AUTH_PAGE,
      LocalTypes.MOBILE_AUTH_PAGE,
    ])),
  },
});

export default MobileAuth;
