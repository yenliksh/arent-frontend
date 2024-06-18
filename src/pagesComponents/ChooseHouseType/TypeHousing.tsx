import { Routes } from 'constains';
import { SetRentHouseType, useSetRentHouseType } from 'graphql/mutations/Advert/__generated__/setHouseType.mutation';
import { AdvertLayout } from 'layouts/AdvertLayout';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { StepProps } from 'types/advert';
import { AppText, Button, Selector } from 'ui';
import { ButtonVariant } from 'ui/Button/Button';
import { SelectorSize } from 'ui/Selector/Selector';
import { getCookie, setCookie } from 'utils';

import {
  Areas,
  Commercial,
  CountryHouses,
  Flat,
  Foreign,
  House,
  Industrial,
  OtherRealEstate,
} from '../../../public/svg/components';
import { ApartmentCategory, ApartmentType } from '../../__generated__/types';
import { useGetSecondStep } from '../../graphql/queries/Advert/__generated__/getSecondStep.query';
import { TypeSelector } from './TypeSelector';

interface FormValues {
  category: ApartmentCategory;
  type: ApartmentType;
}

const TypeHousing: FC<StepProps> = ({ step }) => {
  const { t } = useTranslation('typeHousingPage');
  const advertId = getCookie('advertId');
  const [isLoading, setIsLoading] = useState(false);

  const onCompleted = (data: SetRentHouseType) => {
    setCookie('advertId', data.rentAd__edit_type.apartmentAd.id);
  };

  const [fetchSetHouseType] = useSetRentHouseType({ onCompleted });

  const { data } = useGetSecondStep({ fetchPolicy: 'cache-and-network', variables: { input: { id: advertId! } } });

  const getArraySelectors = useMemo(() => {
    return [
      { icon: Flat, title: t('selectors.flat'), value: ApartmentCategory.Flat },
      { icon: Commercial, title: t('selectors.commercial'), value: ApartmentCategory.Commercial },
      { icon: House, title: t('selectors.house'), value: ApartmentCategory.House },
      { icon: Industrial, title: t('selectors.industrial'), value: ApartmentCategory.Industrial },
      { icon: CountryHouses, title: t('selectors.countryHouse'), value: ApartmentCategory.Countryhouse },
      { icon: OtherRealEstate, title: t('selectors.otherRealEstate'), value: ApartmentCategory.Otherrealestate },
      { icon: Areas, title: t('selectors.area'), value: ApartmentCategory.Area },
      { icon: Foreign, title: t('selectors.foreign'), value: ApartmentCategory.Foreign },
    ];
  }, [t]);

  const { control, handleSubmit, getValues, watch, reset } = useForm<FormValues>({
    defaultValues: {
      category: ApartmentCategory.Flat,
    },
  });

  const category = watch('category');

  const router = useRouter();

  const setHouseType = async () => {
    setIsLoading(true);
    const data = getValues();
    await fetchSetHouseType({
      variables: {
        input: {
          id: getCookie('advertId')!,
          apartmentCategory: data.category,
          apartmentType: data.type,
        },
      },
    });
    setIsLoading(false);
  };

  const setHouseTypeInDraft = async () => {
    const data = getValues();
    await fetchSetHouseType({
      variables: {
        input: {
          id: getCookie('advertId')!,
          apartmentCategory: data.category,
          apartmentType: data.type,
        },
      },
    });
  };

  const onSubmit = async () => {
    await setHouseType();
    if (category === ApartmentCategory.House || category === ApartmentCategory.Countryhouse) {
      await router.push(Routes.adCreateAddress);
    } else if (category === ApartmentCategory.Foreign) {
      await router.push(Routes.adCreateHouseMedia);
    } else {
      await router.push(Routes.adCreateAboutHouse);
    }
  };

  useEffect(() => {
    const type = data?.rentAd__myRentAd.apartmentType;
    const category = data?.rentAd__myRentAd.apartmentCategory;
    reset({
      category,
      type,
    });
  }, [data]);

  return (
    <AdvertLayout step={step} onSaveDraft={setHouseTypeInDraft}>
      <Root onSubmit={handleSubmit(onSubmit)}>
        <Title variant={TextVariants.SECONDARY} font="title_36_26_bold">
          Выберите категорию и тип жилья
        </Title>
        <Title variant={TextVariants.SECONDARY} font="title_22_18_bold">
          Категория
        </Title>
        <SelectorsContainer>
          {getArraySelectors.map((selector, index) => (
            <Controller
              name="category"
              control={control}
              key={index}
              render={({ field: { value, onChange } }) => (
                <StyledSelector
                  text={selector.title}
                  name={String(index)}
                  onChange={() => onChange(selector.value)}
                  checked={value === selector.value}
                  size={SelectorSize.LONG}
                />
              )}
            />
          ))}
        </SelectorsContainer>
        {category !== ApartmentCategory.Countryhouse && (
          <TypeTitle variant={TextVariants.SECONDARY} font="title_22_18_bold">
            Тип
          </TypeTitle>
        )}
        <SelectorsContainer>
          <TypeSelector control={control} category={category} />
        </SelectorsContainer>
        <Footer>
          <StyledBackButton
            onClick={() => router.push(Routes.adCreate)}
            isFullWight
            type="button"
            text={t('buttons.secondary')}
            variant={ButtonVariant.SECONDARY}
          />
          <StyledButton
            isLoading={isLoading}
            type="submit"
            isFullWight
            text={t('buttons.primary')}
            variant={ButtonVariant.VIOLET}
          />
        </Footer>
      </Root>
    </AdvertLayout>
  );
};

export default TypeHousing;

const StyledSelector = styled(Selector)`
  max-width: 366px;
  max-height: 56px;

  h6 {
    font-size: 14px !important;
    font-weight: 500 !important;
    line-height: 20px !important;
  }
`;

const SelectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  max-width: 768px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const Root = styled.form`
  padding: 40px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 16px 16px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 283px;
  margin-right: 0;
  margin-left: auto;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const StyledBackButton = styled(Button)`
  width: max-content;
  background-color: #fff;
  ${({ theme: { typography } }) => typography.body_20_14_medium};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const Footer = styled.div`
  padding: 31px 73px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;
  }
`;

const TypeTitle = styled(AppText)`
  margin-bottom: 32px;
  margin-top: 40px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: none;
  }
`;

const Title = styled(AppText)`
  margin-bottom: 32px;
`;
