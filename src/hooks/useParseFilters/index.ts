import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { removeQueryParam } from '../../utils';

const parsedFilters: ObjectInterface = {
  apartmentTypes: { name: 'apartmentTypes', label: 'Тип жилья' },
  startDate: { name: 'startDate', label: 'Дата начала' },
  endDate: { name: 'endDate', label: 'Дата конца' },
  rules: { name: 'rules', label: 'Правила дома' },
  departureEnd: { name: 'departureEnd', label: 'Конечное время выезда ' },
  departureStart: { name: 'departureStart', label: 'Начальное время выезда ' },
  arrivalEnd: { name: 'arrivalEnd', label: 'Конечное время прибытия ' },
  arrivalStart: { name: 'arrivalStart', label: 'Начальное время прибытия ' },
  rentBookingType: { name: 'rentBookingType', label: 'Способ бронирования' },
  cancellationPolicy: { name: 'cancellationPolicy', label: 'Правила отмены бронирования' },
  numberOfRooms: { name: 'numberOfRooms', label: 'Количество комнат' },
};

type Filter = {
  name: string;
  label: string;
};

type ObjectInterface = {
  [key: string]: Filter;
};

const useParseFilters = () => {
  const router = useRouter();
  const { query } = router;
  const [selectedFilters, setSelectedFilters] = useState<Array<Filter>>([]);

  const parseFilters = () => {
    const filteredQuery = Object.fromEntries(
      Object.entries(query)
        .map((filter) => filter.filter((arg) => arg && arg?.length > 0))
        .filter((elem) => elem.length > 1),
    );

    const queryKeys = Object.keys(filteredQuery);
    let temp: Array<Filter> = [] as Array<Filter>;

    queryKeys.forEach((filter) => {
      temp.push(parsedFilters[filter]);
    });

    temp = temp.filter((filt) => filt);
    setSelectedFilters(temp);
  };

  const deleteFilter = (filter: string) => {
    removeQueryParam(filter, router);
  };

  const deleteAllFilters = async () => {
    const paths = router.pathname.split('/');

    const city = router.query.slug![0];

    const apartmentType = router.query.slug![1];

    const { category } = router.query;

    const pathname = apartmentType ? `/${paths[1]}/${city}/${apartmentType}` : `/${paths[1]}/${city}`;

    await router.push({
      pathname,
      query: {
        kids: 0,
        category,
      },
    });
  };

  useEffect(() => {
    parseFilters();
  }, [query]);

  return { selectedFilters, deleteFilter, deleteAllFilters };
};

export default useParseFilters;
