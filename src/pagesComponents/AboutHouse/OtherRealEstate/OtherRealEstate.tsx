import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { BaseInput } from 'ui';
import { Input } from 'ui/Input';
import { handleDivisionOnCategories } from 'utils';

type FieldType = {
  control: Control<any>;
};
const OtherRealEstate: FC<FieldType> = ({ control }) => {
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
      </>
    </>
  );
};

export default OtherRealEstate;

const InfoContainer = styled.div`
  max-width: 800px;
`;

const Section = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  align-items: center;
  width: max-content;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const StyledBaseInput = styled(BaseInput)`
  margin-bottom: 24px;
`;
