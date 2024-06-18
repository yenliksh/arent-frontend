import { GuestField } from 'components/Categories/components';
import { citiesList } from 'constains';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useRef, useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import GoogleMapService from 'services/google-maps';
import styled, { keyframes } from 'styled-components';
import { BreakpointsEnum } from 'types';
import { TabsValueType, TabType } from 'types/tabs';
import { DatePicker, Tabs } from 'ui';
import Button, { ButtonSize } from 'ui/Button/Button';
import { DatePickerInputEnum } from 'ui/DatePicker/DatePicker';
import { DefaultAsyncSelect } from 'ui/DefaultAsyncSelect';
import RoundTabs from 'ui/RoundTabs/RoundTabs';
import { v4 as uuid } from 'uuid';

import { Search } from '../../../../../public/svg/components';

const Filters: FC = () => {
  const { t } = useTranslation('ui');
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState<Date[]>([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const filterRef = useRef<any>();
  const roundTabsRef = useRef<any>();
  const router = useRouter();

  const roundTabs = [
    { title: t('tabs.city') as string, value: TabsValueType.SHORT, id: uuid() },
    { title: t('tabs.time') as string, value: TabsValueType.LONG, id: uuid() },
    { title: t('tabs.guestQuantity') as string, value: TabsValueType.LONG, id: uuid() },
  ];

  const tabs = [
    { title: t('tabs.shortTerm'), value: TabsValueType.SHORT, id: uuid() },
    { title: t('tabs.longTerm'), value: TabsValueType.LONG, id: uuid() },
  ];

  const [actualTab, setActualTab] = useState(tabs[0]);

  const changeTab = (actualTab: TabType) => () => {
    tabs.map((tab) => {
      if (tab.value === actualTab.value) {
        setActualTab(actualTab);
      }
      return tab;
    });
  };

  const loadOptions = async (value: string) => {
    const res = await GoogleMapService.getPlaces(value);
    return res;
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
      city: '',
      lat: '',
      lng: '',
    };

    if (location?.city) queries = { ...queries, city: location.city, lat: location.lat, lng: location.lng };
    router.push({ query: queries });
    setIsLoading(false);
  };

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

  const isShortRentType = actualTab.value === TabsValueType.SHORT;

  useEffect(() => {
    window.onclick = (event: any) => {
      roundTabsRef.current!.toString();
      if (
        !roundTabsRef.current.toString().includes(event.target.toString()) &&
        !filterRef.current.contains(event.target)
      ) {
        setFiltersActive(false);
      }
    };
  }, []);

  return (
    <Root ref={filterRef}>
      <RoundTabsContainer ref={roundTabsRef} active={!filtersActive} onClick={() => setFiltersActive(true)}>
        <RoundTabs tabs={roundTabs} isSmall />
        <SearchContainer>
          <Search />
        </SearchContainer>
      </RoundTabsContainer>
      <RequestContainer active={filtersActive}>
        <TabsContainer>
          <Tabs tabs={tabs} activeTab={actualTab} handleChangeActiveTab={changeTab} />
        </TabsContainer>
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
            <StyledButton
              isLoading={isLoading}
              type="submit"
              text={t('buttons.btnFindHome')}
              size={ButtonSize.NORMAL}
            />
          </StyledForm>
        </FormContainer>
      </RequestContainer>
    </Root>
  );
};

export default Filters;

interface InputData {
  location: string;
  dateStart: string;
  dateEnd: string;
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;
}

const breatheAnimation = keyframes`
 0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(3rem);
    }
`;

const goUpAnimation = keyframes`
 0% {
      opacity: 0;
        transform: translateY(3rem);
    }

    100% {
      opacity: 1;
        transform: translateY(0);
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
const RoundTabsContainer = styled.button<{ active: boolean }>`
  margin-right: 16px;
  display: ${(props) => (props.active ? 'flex' : 'none')};
  border: ${({ theme: { colors } }) => `1px solid ${colors.greyScale[30]}`};
  border-radius: 50px;
  padding: 10px 0px 10px 0px;
  box-shadow: 0px 10px 15px 0px #afb5c02e;
  animation-name: ${(props) => (props.active ? '' : breatheAnimation)};
  animation-duration: 0.8s;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    box-shadow: 0 0 0 4px ${({ theme: { colors } }) => colors.greyScale[50]};
    z-index: 9999;
  }
`;
const Root = styled.div`
  display: flex;
  margin-top: -8px;
  margin-right: -185px;
  @media (max-width: ${BreakpointsEnum.lgm}px) {
    margin-right: -100px;
  }
  @media (max-width: ${BreakpointsEnum.md}px) {
    margin-right: -60px;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-right: -30px;
  }
`;

const SearchContainer = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme: { colors } }) => colors.purpleScale[100]};
  border-radius: 34px;
  padding: 6px;
  margin-right: 8px;
`;

const TabsContainer = styled.div`
  margin-right: 16px;
`;

const RequestContainer = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  animation-name: ${(props) => (props.active ? '' : goUpAnimation)};
  animation-duration: 0.8s;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 48px 16px 0;
  }
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

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 176px;
  background-color: ${({ theme: { colors } }) => colors.purpleScale[100]};
  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;
