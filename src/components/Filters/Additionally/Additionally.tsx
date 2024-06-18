import { ApartmentCategory } from '__generated__/types';
import { yearOptions } from 'constains';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, DropdownDefault } from 'ui';
import { Input } from 'ui/Input';
import { handleDivisionOnCategories } from 'utils';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
  isWidthSm: boolean;
};

const Additionally: FC<FieldType> = ({ control, category, isWidthSm }) => {
  const { t } = useTranslation('listApartmentsPage');

  if (category === ApartmentCategory.Flat || category === ApartmentCategory.Countryhouse) return null;

  return (
    <>
      <Title variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_20_14_medium' : 'body_24_16_medium'}>
        {t('modalFilters.additionally')}
      </Title>
      <Section>
        {(category === ApartmentCategory.Area || category === ApartmentCategory.Otherrealestate) && (
          <>
            <Controller
              name="totalArea"
              control={control}
              render={({ field: { value, onChange } }) => (
                <InputContainer>
                  <Input
                    title={t('modalFilters.totalArea')}
                    placeholder="м²"
                    value={value}
                    onChange={(event) => {
                      event.target.value = handleDivisionOnCategories(event.target.value);
                      onChange?.(event);
                    }}
                  />
                </InputContainer>
              )}
            />
            <Controller
              name="landArea"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputContainer>
                  <Input
                    title={t('modalFilters.landArea')}
                    placeholder="м²"
                    value={value}
                    onChange={(event) => {
                      event.target.value = handleDivisionOnCategories(event.target.value);
                      onChange?.(event);
                    }}
                  />
                </InputContainer>
              )}
            />
          </>
        )}
        {category === ApartmentCategory.Industrial && (
          <Controller
            name="territoryArea"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <Input
                  title={t('modalFilters.territoryArea')}
                  placeholder="м²"
                  value={value}
                  onChange={(event) => {
                    event.target.value = handleDivisionOnCategories(event.target.value);
                    onChange?.(event);
                  }}
                />
              </InputContainer>
            )}
          />
        )}
        {category === ApartmentCategory.Commercial && (
          <>
            <Controller
              name="objectArea"
              control={control}
              render={({ field: { value, onChange } }) => (
                <InputContainer>
                  <Input
                    title={t('modalFilters.objectArea')}
                    placeholder="м²"
                    value={value}
                    onChange={(event) => {
                      event.target.value = handleDivisionOnCategories(event.target.value);
                      onChange?.(event);
                    }}
                  />
                </InputContainer>
              )}
            />
            <Controller
              name="ceilingHeight"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputContainer>
                  <Input
                    title={t('modalFilters.ceilingHeight')}
                    placeholder="м"
                    value={value}
                    onChange={(event) => {
                      event.target.value = handleDivisionOnCategories(event.target.value);
                      onChange?.(event);
                    }}
                  />
                </InputContainer>
              )}
            />
          </>
        )}
        {(category === ApartmentCategory.Commercial || category === ApartmentCategory.Industrial) && (
          <Controller
            name="yearOfConstruction"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <StyledDropdownDefault
                  menuPlacement="bottom"
                  maxMenuHeight={200}
                  isSearchable={false}
                  defaultValue={value || null}
                  selected={value || null}
                  label={t('modalFilters.yearOfConstruction')}
                  options={yearOptions}
                  onChange={onChange}
                  placeholder={t('modalFilters.chooseYear')}
                  disabledLabel
                />
              </InputContainer>
            )}
          />
        )}
        {category === ApartmentCategory.Commercial && (
          <Controller
            name="floor"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <Input
                  title={t('modalFilters.floor')}
                  placeholder={t('modalFilters.writeFloor')}
                  value={value}
                  onChange={(event) => {
                    event.target.value = handleDivisionOnCategories(event.target.value);
                    onChange?.(event);
                  }}
                />
              </InputContainer>
            )}
          />
        )}
      </Section>
    </>
  );
};

export default Additionally;

const Section = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 28px;
  align-items: center;
  max-width: 100%;
  width: 100%;
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const StyledDropdownDefault = styled(DropdownDefault)`
  div {
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 14px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme: { colors } }) => colors.greyScale[30]};
      background-clip: content-box;
      border: 5px solid transparent;
      border-radius: 18px;
    }
    .dropdown__placeholder {
      color: ${({ theme: { colors } }) => colors.greyScale[60]};
    }
  }
`;
