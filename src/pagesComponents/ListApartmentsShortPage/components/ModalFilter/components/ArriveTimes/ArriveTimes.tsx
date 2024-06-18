import { ApartmentCategory } from '__generated__/types';
import { timeOptions } from 'constains';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, DropdownDefault } from 'ui';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
  isWidthSm: boolean;
};

const ArriveTimes: FC<FieldType> = ({ control, category, isWidthSm }) => {
  const { t } = useTranslation('listApartmentsPage');

  if (
    category !== ApartmentCategory.Flat &&
    category !== ApartmentCategory.House &&
    category !== ApartmentCategory.Foreign
  )
    return null;
  return (
    <>
      <Title variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_20_14_medium' : 'body_24_16_medium'}>
        {t('modalFilters.arrivalTime')}
      </Title>
      <Section>
        <Controller
          name="entryStart"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <StyledDropdownDefault
                menuPlacement="bottom"
                maxMenuHeight={200}
                selected={value || null}
                isSearchable={false}
                defaultValue={value}
                options={timeOptions}
                onChange={onChange}
                placeholder={t('modalFilters.startTime')}
              />
            </InputContainer>
          )}
        />
        <HelperBlock />
        <Controller
          name="entryEnd"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <StyledDropdownDefault
                menuPlacement="bottom"
                maxMenuHeight={200}
                isSearchable={false}
                defaultValue={value}
                selected={value || null}
                options={timeOptions}
                onChange={onChange}
                placeholder={t('modalFilters.endTime')}
              />
            </InputContainer>
          )}
        />
      </Section>
    </>
  );
};

export default ArriveTimes;

const InputContainer = styled.div`
  width: 288px;
`;

const HelperBlock = styled.div`
  margin: 0 16px;
  width: 16px;
  height: 1px;
  background: ${({ theme: { colors } }) => colors.greyScale[40]};
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

const Section = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;
