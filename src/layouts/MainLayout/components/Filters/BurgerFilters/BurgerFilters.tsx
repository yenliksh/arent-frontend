import { GuestField } from 'components/Categories/components';
import { citiesList } from 'constains';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { FC, useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import GoogleMapService from 'services/google-maps';
import styled, { css } from 'styled-components';
import { colors } from 'styles/themes/default/colors';
import { BreakpointsEnum } from 'types';
import { TabsValueType, TabType } from 'types/tabs';
import { DatePicker, DefaultAsyncSelect, Tabs } from 'ui';
import Button, { ButtonSize } from 'ui/Button/Button';
import { DatePickerInputEnum } from 'ui/DatePicker/DatePicker';
import { v4 as uuid } from 'uuid';

import { CloseBig } from '../../../../../../public/svg/components';

type BurgerFilterProps = {
  isOpen: boolean;
  close: () => void;
};

const BurgerFilters: FC<BurgerFilterProps> = ({ isOpen, close }) => {
  const { t } = useTranslation('ui');
  const router = useRouter();
  const tabs = [
    { title: t('tabs.shortTerm'), value: TabsValueType.SHORT, id: uuid() },
    { title: t('tabs.longTerm'), value: TabsValueType.LONG, id: uuid() },
  ];

  const [actualTab, setActualTab] = useState(tabs[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);

  const form = useForm<InputData>({
    defaultValues: {
      location: '',
      dateStart: '',
      dateEnd: '',
      numberOfGuests: 1,
      numberOfChilds: 0,
      numberOfPets: 0,
    },
    mode: 'onChange',
  });
  const { handleSubmit, control, getValues } = form;

  const changeTab = (actualTab: TabType) => () => {
    tabs.map((tab) => {
      if (tab.value === actualTab.value) {
        setActualTab(actualTab);
      }
      return tab;
    });
  };

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    const placeId = data?.location;
    setIsLoading(true);
    let location = null;

    if (placeId) {
      const coordinates = await GoogleMapService.getPlacesDetails(placeId as unknown as string);
      const city = citiesList.find((city) => city.label === coordinates.city)?.labelEn;
      location = {
        city,
        lat: coordinates?.location?.lat,
        lng: coordinates?.location?.lng,
      };
    }

    let queries = {
      start: dates[0] ? dayjs(dates[0]).format('YYYY-MM-DD') : null,
      end: dates[1] ? dayjs(dates[1]).format('YYYY-MM-DD') : null,
      guests: data?.numberOfGuests,
      kids: data?.numberOfChilds,
      pets: data?.numberOfPets,
      type: actualTab.value,
      city: '',
      lat: '',
      lng: '',
    };

    if (location && location.city) queries = { ...queries, city: location.city, lat: location.lat, lng: location.lng };

    // const nextRoute = actualTab.value === TabsValueType.LONG ? Routes.listApartmentsLong : Routes.listApartmentsShort;
    router.push({ query: queries });
    setIsLoading(false);
    close();
  };

  const loadOptions = async (value: string) => {
    const res = await GoogleMapService.getPlaces(value);
    return res;
  };

  const isShortRentType = actualTab.value === TabsValueType.SHORT;

  const deleteAllFilters = () => {
    router.push({ query: {} });
    close();
  };

  return (
    <Root $isOpen={isOpen}>
      <StyledContainer>
        <button onClick={close}>
          <CloseBig color={colors.greyScale[100]} />
        </button>
        <TabsContainer>
          <Tabs tabs={tabs} activeTab={actualTab} handleChangeActiveTab={changeTab} />
        </TabsContainer>
      </StyledContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <PlaceContainer>
            <Controller
              control={control}
              name="location"
              render={({ field }) => (
                <StyledDropdown
                  loadOptions={loadOptions}
                  label={t('forms.formLocation')}
                  placeholder={t('forms.placeholderChooseCity')}
                  {...field}
                />
              )}
            />
          </PlaceContainer>
          {isShortRentType && (
            <DatepickerContainer>
              <FormProvider {...form}>
                <DatePicker
                  selectsRange
                  areTwoMonth
                  onChange={(date) => setDates(date as Date[])}
                  inputType={DatePickerInputEnum.multiple}
                />
              </FormProvider>
            </DatepickerContainer>
          )}
          <GuestField control={control} getValues={getValues} />
          <ClearFiltersButton onClick={deleteAllFilters}>Очистить всё</ClearFiltersButton>
          <StyledButton isLoading={isLoading} type="submit" text={t('buttons.btnFindHome')} size={ButtonSize.NORMAL} />
        </StyledForm>
      </FormContainer>
    </Root>
  );
};

export default BurgerFilters;

interface InputData {
  location: string;
  dateStart: string;
  dateEnd: string;
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;
}

const Root = styled.div<{ $isOpen: boolean }>`
  ${({ theme: { colors }, $isOpen }) => css`
    position: fixed;
    display: flex;

    width: 100%;
    height: calc(100vh - 10px);

    top: 0;
    right: -100%;
    margin-top: 10px;
    z-index: 10000;

    flex-direction: column;
    padding: 8px 16px;
    gap: 28px;

    transform: translateX(${$isOpen ? '-100%' : 0});
    transition: transform 0.2s linear;

    background-color: ${colors.greyScale[0]};
  `}
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 176px;
  background-color: ${({ theme: { colors } }) => colors.purpleScale[100]};
  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const ClearFiltersButton = styled.button`
  margin-top: 80%;
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[100]};
    ${typography.body_24_16_medium}
  `}
`;

const TabsContainer = styled.div`
  margin-left: 20px;
  width: 100%;
`;

const FormContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BreakpointsEnum.md}px) {
    align-items: center;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 1056px;
  @media (max-width: ${BreakpointsEnum.lgm}px) {
    max-width: 343px;
    flex-direction: column;
    align-items: center;
  }
`;

const PlaceContainer = styled.div`
  width: 100%;
  max-width: 348px;
`;

const StyledDropdown = styled(DefaultAsyncSelect)`
  min-width: 277px;
  width: 100%;
  max-width: 348px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const DatepickerContainer = styled.div`
  width: 100%;
  max-width: 277px;
  @media (max-width: ${BreakpointsEnum.md}px) {
    max-width: 100%;
  }
`;
