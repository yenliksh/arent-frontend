import 'react-i18next';

declare module 'react-i18next' {
  export interface Resources {
    ui: typeof import('../../public/locales/ru/ui.json');
    authPage: typeof import('../../public/locales/ru/authPage.json');
    common: typeof import('../../public/locales/ru/common.json');
    profilePage: typeof import('../../public/locales/ru/profilePage.json');
    homePage: typeof import('../../public/locales/ru/homePage.json');
    myAdsPage: typeof import('../../public/locales/ru/myAdsPage.json');
    apartmentPage: typeof import('../../public/locales/ru/apartmentPage.json');
    formatPage: typeof import('../../public/locales/ru/formatPage.json');
    typeHousingPage: typeof import('../../public/locales/ru/typeHousingPage.json');
    aboutHousePage: typeof import('../../public/locales/ru/aboutHousePage.json');
    addressPage: typeof import('../../public/locales/ru/addressPage.json');
    descriptionHousePage: typeof import('../../public/locales/ru/descriptionHousePage.json');
    importantInfoPage: typeof import('../../public/locales/ru/importantInfoPage.json');
    bookingPage: typeof import('../../public/locales/ru/bookingPage.json');
    listApartmentsPage: typeof import('../../public/locales/ru/listApartmentsPage.json');
    activeRentPage: typeof import('../../public/locales/ru/activeRentPage.json');
    paymentPage: typeof import('../../public/locales/ru/paymentPage.json');
    cardLinkingPage: typeof import('../../public/locales/ru/cardLinkingPage.json');
    chatPage: typeof import('../../public/locales/ru/chatPage.json');
    houseMediasPage: typeof import('../../public/locales/ru/houseMediasPage.json');
    documentsPage: typeof import('../../public/locales/ru/documentsPage.json');
  }
}
