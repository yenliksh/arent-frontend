import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

enum DefaultShortTermFiltersEnum {
  lat = 'lat',
  lng = 'lng',
  location = 'location',
  label = 'label',
  min = 'min',
  max = 'max',
  numberOfGuests = 'numberOfAdults',
  numberOfChild = 'numberOfChild',
  numberOfPets = 'numberOfPets',
  type = 'type',
  id = 'id',
}

const useFilters = () => {
  const { query } = useRouter();

  const [count, setCount] = useState(0);

  const ignoredFilters = `${DefaultShortTermFiltersEnum.lat} ${DefaultShortTermFiltersEnum.lng} ${DefaultShortTermFiltersEnum.label} ${DefaultShortTermFiltersEnum.location} ${DefaultShortTermFiltersEnum.min} ${DefaultShortTermFiltersEnum.max} ${DefaultShortTermFiltersEnum.numberOfChild} ${DefaultShortTermFiltersEnum.numberOfGuests} ${DefaultShortTermFiltersEnum.numberOfPets} ${DefaultShortTermFiltersEnum.type} ${DefaultShortTermFiltersEnum.id}`;

  const calculateCountActiveFilters = () => {
    const filteredQuery = Object.fromEntries(
      Object.entries(query)
        .map((filter) => filter.filter((arg) => arg && arg?.length > 0))
        .filter((elem) => elem.length > 1),
    );

    const keys = Object.keys(filteredQuery);

    let count = 0;

    keys.forEach((filterName) => {
      if (!ignoredFilters.includes(filterName)) {
        count++;
      }
    });
    setCount(count);
  };

  useEffect(() => {
    calculateCountActiveFilters();
  }, [query]);

  return { count };
};

export default useFilters;
