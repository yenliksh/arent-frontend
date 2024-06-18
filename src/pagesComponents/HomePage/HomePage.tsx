import { Categories } from 'components/Categories';
import { MainLayout } from 'layouts';
import { Filters } from 'layouts/MainLayout/components/Filters';
import dynamic from 'next/dynamic';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { ListApartmentsShort } from './components/ListApartmentsShort';

const Advantages = dynamic(() => import('./components/Advantages/Advantages'), {
  ssr: false,
});
const HowItWorks = dynamic(() => import('./components/HowItWorks/HowItWorks'), {
  ssr: false,
});

const HomePage = () => {
  const metaTitle = 'Аренда жилья в Казахстане по лучшим ценам от владельцев | Arent';

  return (
    <MainLayout headTitle={metaTitle} filters={<Filters />} childrenForHeader={<Categories />}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} data-react-helmet="true" />
        <meta
          name="description"
          content="На arent.app вы можете снять и сдать жилье в долгосрочную и краткосрочную аренду в любом городе Казахстана ✔ Ежедневное обновление ✔ Проверка владельцев."
          data-react-helmet="true"
        />
      </Helmet>
      <ListApartmentsShort />
      <HowItWorks />
      <Advantages
        payPicSrc="/img/macbook.png"
        ownerPicSrc="/img/onlyOwners.png"
        legallyPicSrc="/img/legallyProtection.png"
      />
    </MainLayout>
  );
};

export default HomePage;
