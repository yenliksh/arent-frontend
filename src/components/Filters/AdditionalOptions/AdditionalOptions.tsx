import { ApartmentCategory } from '__generated__/types';
import { AdditionalOptionsEnum } from 'pagesComponents/ListApartmentsShortPage/options';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, RadioButton } from 'ui';

type FieldType = {
  control: Control<any>;
  title: string;
  controlName: AdditionalOptionsEnum;
  options: any[];
  category: ApartmentCategory;
};

const AdditionalOptions: FC<FieldType> = ({ control, title, controlName, options, category }) => {
  if (category !== ApartmentCategory.Area && category !== ApartmentCategory.Commercial) return null;
  if (category !== ApartmentCategory.Commercial && controlName === AdditionalOptionsEnum.OBJECTPLACEMENT) return null;
  if (category === ApartmentCategory.Commercial && controlName !== AdditionalOptionsEnum.OBJECTPLACEMENT) return null;
  return (
    <Root>
      <Title variant={TextVariants.SECONDARY} font="body_24_16_medium">
        {title}
      </Title>
      <Section>
        <Controller
          control={control}
          name={controlName}
          render={({ field }) => (
            <>
              {options.map((accommodation, index) => {
                const handleChangeAccommodationValue = () => field.onChange(accommodation.value);

                return (
                  <BookingTypeContainer key={index} onClick={handleChangeAccommodationValue}>
                    <RadioButton
                      {...field}
                      checked={field.value === accommodation.value}
                      onChange={handleChangeAccommodationValue}
                    />
                    <BookingTypeInfoContainer>
                      <BookingTypeTitle font="body_20_14_regular" variant={TextVariants.SECONDARY}>
                        {accommodation.label}
                      </BookingTypeTitle>
                      <Description font="caption_16_12_regular">{accommodation.description}</Description>
                    </BookingTypeInfoContainer>
                  </BookingTypeContainer>
                );
              })}
            </>
          )}
        />
      </Section>
    </Root>
  );
};

export default AdditionalOptions;

const BookingTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
const BookingTypeTitle = styled(AppText)`
  margin-bottom: 8px;
`;
const Description = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
  max-width: 300px;
`;
const BookingTypeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 100%;
  width: 100%;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;
