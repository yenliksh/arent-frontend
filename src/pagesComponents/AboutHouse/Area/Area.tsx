import { ApartmentCategory } from '__generated__/types';
import { AdditionalOptions } from 'components/Filters/AdditionalOptions';
import { useTranslation } from 'next-i18next';
import {
  AdditionalOptionsEnum,
  electricityOptions,
  gasOptions,
  waterSupplyOptions,
} from 'pagesComponents/ListApartmentsShortPage/options';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { BaseInput } from 'ui';
import { Input } from 'ui/Input';
import { handleDivisionOnCategories } from 'utils';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
};
const Area: FC<FieldType> = ({ control, category }) => {
  const { t } = useTranslation('aboutHousePage');

  return (
    <>
      <InfoContainer>
        <Controller
          name="name"
          rules={{ required: true }}
          control={control}
          render={({ field }) => <StyledBaseInput placeholder={t('about.title')} isLong {...field} />}
        />

        <Section>
          <Controller
            name="totalArea"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <Input
                  title={t('about.totalArea')}
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
                  title={t('about.landArea')}
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
        </Section>
      </InfoContainer>

      <AdditionalOptionsSection>
        <AdditionalOptions
          control={control}
          title={t('about.waterSupply')}
          controlName={AdditionalOptionsEnum.WATERSUPPLY}
          options={waterSupplyOptions}
          category={category}
        />

        <AdditionalOptions
          control={control}
          title={t('about.electricity')}
          controlName={AdditionalOptionsEnum.ELECTRICITYSUPPLY}
          options={electricityOptions}
          category={category}
        />

        <AdditionalOptions
          control={control}
          title={t('about.gasSupply')}
          controlName={AdditionalOptionsEnum.GASSUPPLY}
          options={gasOptions}
          category={category}
        />
      </AdditionalOptionsSection>
    </>
  );
};

export default Area;

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

const AdditionalOptionsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 63px;
  margin-top: 20px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const InputContainer = styled.div`
  width: 100%;
`;
