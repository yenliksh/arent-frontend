import { ApartmentCategory } from '__generated__/types';
import { AdditionalOptions } from 'components/Filters/AdditionalOptions';
import { yearOptions } from 'constains';
import { useTranslation } from 'next-i18next';
import { AdditionalOptionsEnum, objectPlacementOptions } from 'pagesComponents/ListApartmentsShortPage/options';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { BaseInput, DropdownDefault } from 'ui';
import { Input } from 'ui/Input';
import { handleDivisionOnCategories } from 'utils';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
};
const Commercial: FC<FieldType> = ({ control, category }) => {
  const { t } = useTranslation('aboutHousePage');

  return (
    <>
      <InfoContainer>
        <Controller
          name="name"
          rules={{ required: true }}
          control={control}
          render={({ field }) => <StyledBaseInput placeholder={t('about.objectName')} isLong {...field} />}
        />

        <Section>
          <Controller
            name="objectArea"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <Input
                  title={t('about.objectArea')}
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
                  title={t('about.ceilingHeight')}
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
          <Controller
            name="floor"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <Input
                  title={t('about.floor')}
                  placeholder={t('about.writeFloor')}
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
            name="yearOfConstruction"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <StyledDropdownDefault
                  menuPlacement="bottom"
                  maxMenuHeight={200}
                  isSearchable={false}
                  defaultValue={value}
                  selected={value || null}
                  label={t('about.yearOfConstruction')}
                  options={yearOptions}
                  onChange={onChange}
                  placeholder={t('about.chooseYear')}
                  disabledLabel
                />
              </InputContainer>
            )}
          />
        </Section>
      </InfoContainer>

      <AdditionalOptions
        control={control}
        title={t('about.objectPlacement')}
        controlName={AdditionalOptionsEnum.OBJECTPLACEMENT}
        options={objectPlacementOptions}
        category={category}
      />
    </>
  );
};

export default Commercial;

const InfoContainer = styled.div`
  max-width: 800px;
`;

const StyledBaseInput = styled(BaseInput)`
  margin-bottom: 24px;
`;

const Section = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  align-items: center;
  width: max-content;
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
