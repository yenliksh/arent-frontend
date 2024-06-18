const path = require('path');
const HttpBackend = require('i18next-http-backend/cjs');
const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;

module.exports = {
  backend: {
    backendOptions: [{ expirationTime: 60 * 60 * 1000 }],
    backends: typeof window !== 'undefined' ? [LocalStorageBackend, HttpBackend] : [],
  },
  use: typeof window !== 'undefined' ? [ChainedBackend] : [],
  serializeConfig: false,
  i18n: {
    defaultLocale: 'ru',
    lng: 'ru',
    locales: ['en', 'ru'],
    localePath: path.resolve('./public/locales'),
    fallbackLng: 'en',
    ns: [
      'common',
      'ui',
      'profilePage',
      'homePage',
      'myAdsPage',
      'houseMediasPage',
      'authPage',
      'apartmentPage',
      'formatPage',
      'typeHousingPage',
      'aboutHousePage',
      'addressPage',
      'descriptionPage',
      'bookingPage',
      'listApartmentsPage',
      'activeRentPage',
      'importantInfoPage',
      'chatPage',
      'paymentPage',
      'documentsPage',
      'descriptionHousePage',
    ],
  },
};
