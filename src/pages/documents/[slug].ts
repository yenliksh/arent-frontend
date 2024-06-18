import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DocumentsPage from 'pagesComponents/DocumentsPage/DocumentsPage';

import { LocalTypes } from '../../../public/locales/types';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        LocalTypes.UI,
        LocalTypes.COMMON,
        LocalTypes.AUTH_PAGE,
        LocalTypes.DOCUMENTS_PAGE,
      ])),
    },
  };
};

export default DocumentsPage;
