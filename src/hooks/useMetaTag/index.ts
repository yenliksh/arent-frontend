import { houseTypeOptions, optionsNumberOfRooms } from 'pagesComponents/ListApartmentsLongPage/options';
import { i18n } from 'services';

const useMetaTag = (city: string, filters: any, page: number, isLongTerm?: boolean) => {
  const translitetaredCity = getTransliteratedCity(city);

  function getTransliteratedCity(city: string) {
    const isCyrillic = /[а-яА-ЯЁё]/.test(city);
    if (isCyrillic) return city;
    const lower = city.toLowerCase();
    return i18n.t(`cities.${lower}`);
  }

  const metaH1 = `${isLongTerm ? 'Долгосрочная аренда' : 'Аренда посуточно'}: ${translitetaredCity} ${
    filters.apartmentTypes
      ? Array.isArray(filters.apartmentTypes)
        ? `, ${filters.apartmentTypes
            ?.map((at: any) => {
              return houseTypeOptions.find((ht) => ht.value === at)?.label;
            })
            .join(', ')}`
        : `, ${houseTypeOptions.find((ht) => ht.value === (filters.apartmentTypes as unknown as string))?.label}`
      : ''
  } ${
    filters.numberOfRooms
      ? `, ${filters.numberOfRooms
          ?.map((el: any) => {
            return optionsNumberOfRooms.find((nr) => nr.value === el)?.label;
          })
          .join(', ')}`
      : ''
  }`;

  const metaTitle = `${metaH1} | aRent ${page > 1 ? `-стр ${page}` : ''}`;

  const metaContent = `${isLongTerm ? 'Долгосрочная аренда' : 'Аренда помесячно'} => ${translitetaredCity} => ${
    filters.apartmentTypes
      ? Array.isArray(filters.apartmentTypes)
        ? filters.apartmentTypes
            ?.map((at: any) => {
              return houseTypeOptions.find((ht) => ht.value === at)?.label;
            })
            .join(', ')
        : houseTypeOptions.find((ht) => ht.value === (filters.apartmentTypes as unknown as string))?.label
      : ''
  } ${
    filters.numberOfRooms
      ? `=> ${filters.numberOfRooms
          ?.map((el: any) => {
            return optionsNumberOfRooms.find((nr) => nr.value === el)?.label;
          })
          .join(', ')}`
      : ''
  }  ⭐  aRent.app: у нас долгосрочная аренда жилья по лучшим ценам от владельцев ✔ Прямые контакты ✔ Скидки и акции ✔ Большой выбор ✔ Проверка владельцев. ${
    page > 1 ? `-стр ${page}` : ''
  }`;

  const shouldIndex = !(
    Array.isArray(filters.apartmentTypes) ||
    filters.numberOfRooms?.length > 1 ||
    Array.isArray(filters.rules)
  );

  return {
    metaH1,
    metaTitle,
    metaContent,
    shouldIndex,
  };
};

export default useMetaTag;
