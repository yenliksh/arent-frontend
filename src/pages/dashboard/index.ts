import { checkAuth } from 'hocs';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../public/locales/types';

const MyAds = dynamic(() => import('../../pagesComponents/MyAds/MyAds'), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      LocalTypes.UI,
      LocalTypes.ACTIVE_RENT,
      LocalTypes.COMMON,
      LocalTypes.AUTH_PAGE,
      LocalTypes.MY_ADS_PAGE,
      LocalTypes.PROFILE_PAGE,
      LocalTypes.CHAT_PAGE,
      LocalTypes.IMPORTANT_INFO_PAGE,
      LocalTypes.APARTMENT_PAGE,
    ])),
  },
});

export default checkAuth(MyAds);
