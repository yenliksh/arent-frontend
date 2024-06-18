import { ApartmentCategory } from '__generated__/types';
import { useTranslation } from 'next-i18next';
import { FC, useMemo } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, Selector } from 'ui';
import { SelectorSize } from 'ui/Selector/Selector';

import {
  typeAreaArray,
  typeCommercialArray,
  typeFlatArray,
  typeHouseArray,
  typeIndustrialArray,
} from '../../../../options';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
  isWidthSm: boolean;
};

const EMPTY_VALUE = null;

const HouseType: FC<FieldType> = ({ control, category, isWidthSm }) => {
  const { t } = useTranslation('listApartmentsPage');

  const handleChange = (value: Array<string>, onChange: (...event: any[]) => void, selectorValue: string) => {
    const isEmptyValue = selectorValue === EMPTY_VALUE;

    const newValues = isEmptyValue ? [EMPTY_VALUE] : [selectorValue].filter((elem) => elem !== EMPTY_VALUE);

    onChange(newValues);
  };

  const checkActiveState = (value: Array<string>, seletorValue: string) => {
    return seletorValue === EMPTY_VALUE
      ? value.length === 0 || value.includes(seletorValue)
      : value.includes(seletorValue);
  };

  const typeArray = useMemo(() => {
    switch (category) {
      case ApartmentCategory.Flat:
        return typeFlatArray;
      case ApartmentCategory.House:
        return typeHouseArray;
      case ApartmentCategory.Countryhouse:
        return [];
      case ApartmentCategory.Foreign:
        return typeFlatArray;
      case ApartmentCategory.Area:
        return typeAreaArray;
      case ApartmentCategory.Commercial:
        return typeCommercialArray;
      case ApartmentCategory.Industrial:
        return typeIndustrialArray;
      case ApartmentCategory.Otherrealestate:
        return typeCommercialArray;

      default:
        return typeFlatArray;
    }
  }, [category]);

  if (category === ApartmentCategory.Countryhouse) return null;

  return (
    <>
      <Title variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_20_14_medium' : 'body_24_16_medium'}>
        {t('bottomFilters.typeHousing')}
      </Title>
      <Section>
        <InnerContainer>
          {typeArray.map((selector, index) => (
            <Controller
              name="housingType"
              control={control}
              key={index}
              render={({ field: { value, onChange } }) => (
                <StyledSelector
                  text={selector.title}
                  name={selector.title}
                  onChange={() => handleChange(value, onChange, selector.value as string)}
                  checked={checkActiveState(value, selector.value as string)}
                  size={SelectorSize.NORMAL}
                />
              )}
            />
          ))}
        </InnerContainer>
      </Section>
    </>
  );
};

export default HouseType;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledSelector = styled(Selector)`
  padding: 12px 16px !important;
  min-width: unset;
  p {
    ${({ theme: { typography } }) => typography.caption_16_12_regular}
  }
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;

const Section = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;
`;
