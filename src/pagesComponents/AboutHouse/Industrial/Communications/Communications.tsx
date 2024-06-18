import { ApartmentCategory } from '__generated__/types';
import { useTranslation } from 'next-i18next';
import { communicationsOptions } from 'pagesComponents/ListApartmentsShortPage/options';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, CheckBox } from 'ui';

type ComplainsProps = {
  category: ApartmentCategory;
  control: Control<any>;
  isWidthSm: boolean;
};

const Communications: FC<ComplainsProps> = ({ category, control, isWidthSm }) => {
  if (category !== ApartmentCategory.Industrial) return null;
  const handleChange = (value: Array<string>, onChange: (...event: any[]) => void, selectorValue: string) => {
    const hasSelectorValue = value.includes(selectorValue);
    let newValues: string[];

    if (hasSelectorValue) {
      newValues = value.filter((elem) => elem !== selectorValue);
    } else {
      newValues = [...value, selectorValue];
    }

    onChange(newValues);
  };

  const checkActiveState = (value: Array<string>, selectorValue: string) => value?.includes(selectorValue);

  const { t } = useTranslation('aboutHousePage');

  return (
    <Root>
      <Title variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_20_14_medium' : 'body_24_16_medium'}>
        {t('about.communications')}
      </Title>
      <Section>
        <Controller
          name="communications"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              {communicationsOptions?.map((communication, index) => (
                <CommuncationContainer key={index}>
                  <CheckBox
                    name={`cause-${index}`}
                    checked={checkActiveState(value, communication.value)}
                    onChange={() => handleChange(value, onChange, communication.value)}
                  />
                  <Reason>{communication.label}</Reason>
                </CommuncationContainer>
              ))}
            </>
          )}
        />
      </Section>
    </Root>
  );
};

export default Communications;

const Root = styled.div``;

const Reason = styled.div`
  ${({ theme: { typography } }) => typography.body_20_14_regular}
`;

const CommuncationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 12px 0px 12px 0px;
  :first-child {
    padding-top: 10px;
  }

  ${({ theme: { colors } }) => css`
    @media (max-width: ${BreakpointsEnum.sm}px) {
      border-bottom: 1px solid ${colors.greyScale[30]};
    }
  `}
`;

const Section = styled.div`
  margin-top: 16px;
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;
