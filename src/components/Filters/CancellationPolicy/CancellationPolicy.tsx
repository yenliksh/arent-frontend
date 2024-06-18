import { ApartmentCategory } from '__generated__/types';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum, OptionType, TextVariants } from 'types';
import { AppText, DropdownDefault } from 'ui';

import { rulesOptions } from '../../../pagesComponents/ListApartmentsShortPage/options';
import { CancellationDescription } from './components';

type FieldType = {
  control: Control<any>;
  category: ApartmentCategory;
  isWidthSm: boolean;
};

interface OptionFilter extends OptionType {
  text?: string;
}

const CancellationPolicy: FC<FieldType> = ({ control, category, isWidthSm }) => {
  const { t } = useTranslation('listApartmentsPage');

  const { query } = useRouter();

  const findCurrentOption = (value: string, options: Array<OptionFilter>) => {
    return options.find((elem) => elem.value === value);
  };

  const [cancellationText, setCancellationText] = useState(
    findCurrentOption(String(query.cancellationPolicy), rulesOptions)?.text,
  );

  if (
    category !== ApartmentCategory.Flat &&
    category !== ApartmentCategory.House &&
    category !== ApartmentCategory.Foreign
  )
    return null;

  return (
    <>
      <Title variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_20_14_medium' : 'body_24_16_medium'}>
        {t('modalFilters.cancellationPolicyTitle')}
      </Title>
      <Subtitle font="body_20_14_regular">{t('modalFilters.cancellationPolicySubtitle')}</Subtitle>
      <Section>
        <Controller
          name="cancellationPolicy"
          control={control}
          render={({ field }) => {
            if (!field.value?.value) {
              setCancellationText('');
            }
            return (
              <InputContainer>
                <StyledDropdownDefault
                  menuPlacement="top"
                  options={rulesOptions}
                  defaultValue={field.value}
                  selected={field.value}
                  isSearchable={false}
                  onChange={(value) => {
                    field.onChange(value);
                    setCancellationText(value.text);
                  }}
                  placeholder={t('modalFilters.chooseRule')}
                />
              </InputContainer>
            );
          }}
        />
      </Section>
      {cancellationText && <CancellationDescription cancellationText={cancellationText} />}
    </>
  );
};

export default CancellationPolicy;

const InputContainer = styled.div`
  width: 288px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    width: 100%;
  }
`;

const Section = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 8px;
  }
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

const Subtitle = styled(AppText)`
  margin-top: 16px;
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;
