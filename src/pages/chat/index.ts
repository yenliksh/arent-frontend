import { checkAuth } from 'hocs';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../public/locales/types';

const ChatPage = dynamic(() => import('../../pagesComponents/ChatPage/ChatPage'), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      LocalTypes.UI,
      LocalTypes.ACTIVE_RENT,
      LocalTypes.COMMON,
      LocalTypes.AUTH_PAGE,
      LocalTypes.APARTMENT_PAGE,
      LocalTypes.IMPORTANT_INFO_PAGE,
      LocalTypes.PROFILE_PAGE,
      LocalTypes.CHAT_PAGE,
      LocalTypes.PAYMENT_PAGE,
    ])),
  },
});

export default checkAuth(ChatPage);
