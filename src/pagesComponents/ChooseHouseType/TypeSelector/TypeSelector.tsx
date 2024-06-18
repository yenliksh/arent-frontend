import { ApartmentCategory } from '__generated__/types';
import {
  typeAreaArray,
  typeCommercialArray,
  typeFlatArray,
  typeHouseArray,
  typeIndustrialArray,
} from 'pagesComponents/ListApartmentsShortPage/options';
import { FC, useMemo } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { Selector } from 'ui';
import { SelectorSize } from 'ui/Selector/Selector';

export type TypeSelectorProps = {
  category: ApartmentCategory;
  control: Control<any>;
};

const TypeSelector: FC<TypeSelectorProps> = ({ category, control }) => {
  const typeArray = useMemo(() => {
    switch (category) {
      case ApartmentCategory.Flat:
        return typeFlatArray.slice(1);
      case ApartmentCategory.House:
        return typeHouseArray.slice(1);
      case ApartmentCategory.Countryhouse:
        return [];
      case ApartmentCategory.Foreign:
        return typeFlatArray.slice(1);
      case ApartmentCategory.Area:
        return typeAreaArray.slice(1);
      case ApartmentCategory.Commercial:
        return typeCommercialArray.slice(1);
      case ApartmentCategory.Industrial:
        return typeIndustrialArray.slice(1);
      case ApartmentCategory.Otherrealestate:
        return typeCommercialArray.slice(1);

      default:
        return typeFlatArray;
    }
  }, [category]);

  return (
    <>
      {typeArray?.map((selector, index) => (
        <Controller
          name="type"
          control={control}
          key={`type-${index}`}
          render={({ field: { value, onChange } }) => (
            <StyledSelector
              text={selector.title}
              name={String(selector.value)}
              onChange={() => onChange(selector.value)}
              checked={value === selector.value}
              size={SelectorSize.LONG}
            />
          )}
        />
      ))}
    </>
  );
};

export default TypeSelector;

const StyledSelector = styled(Selector)`
  max-width: 366px;
  max-height: 56px;

  h6 {
    font-size: 14px !important;
    font-weight: 500 !important;
    line-height: 20px !important;
  }
`;
