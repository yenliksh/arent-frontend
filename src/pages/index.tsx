import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocalTypes } from '../../public/locales/types';
import HomePage from '../pagesComponents/HomePage/HomePage';

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale!, [
        LocalTypes.UI,
        LocalTypes.COMMON,
        LocalTypes.AUTH_PAGE,
        LocalTypes.HOME_PAGE,
      ])),
    },
  };
};

export default HomePage;
