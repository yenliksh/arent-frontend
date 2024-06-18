import { MainLayout } from 'layouts';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { Header } from './components';

const MyAds: FC = () => {
  return (
    <StyledLayout headTitle="Мои объявления">
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
    </StyledLayout>
  );
};

const StyledLayout = styled(MainLayout)`
  max-width: 100%;
  padding: 0;
`;

export default MyAds;
