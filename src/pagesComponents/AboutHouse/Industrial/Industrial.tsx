import { ApartmentCategory } from '__generated__/types';
import { yearOptions } from 'constains';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { BaseInput, DropdownDefault } from 'ui';
import { Input } from 'ui/Input';
import { handleDivisionOnCategories } from 'utils';

import { Communications } from './Communications';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
};
const Industrial: FC<FieldType> = ({ control, category }) => {
  const { t } = useTranslation('aboutHousePage');

  return (
    <>
      <>
        <InfoContainer>
          <Controller
            name="name"
            rules={{ required: true }}
            control={control}
            render={({ field }) => <StyledBaseInput placeholder={t('about.industrialTitle')} isLong {...field} />}
          />

          <Section>
            <Controller
              name="territoryArea"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputContainer>
                  <Input
                    title={t('about.territoryArea')}
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
          <Communications control={control} category={category} isWidthSm={false} />
        </InfoContainer>
      </>
    </>
  );
};

export default Industrial;

const InfoContainer = styled.div`
  max-width: 800px;
`;

const StyledBaseInput = styled(BaseInput)`
  margin-bottom: 24px;
`;

const Section = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  align-items: center;
  width: max-content;
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
const InputContainer = styled.div`
  width: 100%;
`;
