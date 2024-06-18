import { checkAuth } from 'hocs';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../../public/locales/types';

const BookingPage = dynamic(() => import('../../pagesComponents/BookingPage/BookingPage'), {
  ssr: false,
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      LocalTypes.UI,
      LocalTypes.COMMON,
      LocalTypes.IMPORTANT_INFO_PAGE,
      LocalTypes.BOOKING_PAGE,
      LocalTypes.ACTIVE_RENT,
      LocalTypes.PAYMENT_PAGE,
    ])),
  },
});

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/booking/first-apartment',
      // Object variant:
      { params: { slug: 'second-apartment' } },
    ],
    fallback: true,
  };
}

export default checkAuth(BookingPage);
