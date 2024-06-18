import { Routes } from 'constains';
import useClientSize from 'hooks/useClientSize';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import GoogleMapService from 'services/google-maps';
import styled from 'styled-components';
import { OptionType } from 'types';
import { TabsValueType, TabType } from 'types/tabs';
import { DefaultAsyncSelect } from 'ui/DefaultAsyncSelect';
import { Tabs } from 'ui/Tabs';
import { v4 as uuid } from 'uuid';

// import { GuestField } from '../../../../components/Header/components';

const Filters: FC = () => {
  const { t } = useTranslation('listApartmentsPage', { keyPrefix: 'filters' });
  const { getIsBreakpoint } = useClientSize();
  const router = useRouter();

  const tabs = [
    { title: t('shortTerm'), value: TabsValueType.SHORT, id: uuid() },
    { title: t('longTerm'), value: TabsValueType.LONG, id: uuid() },
  ];
  const [actualTab] = useState(tabs[1]);

  const { control, reset } = useForm<InputData>({
    defaultValues: {
      numberOfGuests: Number(router.query.guests) || 1,
      numberOfChilds: Number(router.query.kids) || 0,
      numberOfPets: Number(router.query.pets) || 0,
    },
    mode: 'onBlur',
  });

  const changeTab = (actualTab: TabType) => () => {
    const city = (router.query.slug as string[])[0];
    tabs.map((tab) => {
      if (actualTab.value === TabsValueType.SHORT) {
        router.push({
          pathname: `${Routes.listApartmentsShort}/${city}`,
          query: {
            guests: 1,
          },
        });
      }
      return tab;
    });
  };

  const isWidthLgm = getIsBreakpoint('lgm');

  const loadPlaces = async (value: string) => {
    const res = await GoogleMapService.getPlaces(value);
    return res;
  };

  useEffect(() => {
    reset({
      numberOfGuests: Number(router.query.guests) || 1,
      numberOfChilds: Number(router.query.kids) || 0,
      numberOfPets: Number(router.query.pets) || 0,
    });
  }, [router.query]);

  return (
    <Root>
      {!isWidthLgm && (
        <>
          <TabsContainer>
            <Tabs tabs={tabs} activeTab={actualTab} handleChangeActiveTab={changeTab} isSmall />
          </TabsContainer>

          <StyledForm>
            <Controller
              control={control}
              name="location"
              render={({ field }) => (
                <StyledDefaultAsyncSelect
                  loadOptions={loadPlaces}
                  label={t('location')}
                  defaultValue={field.value}
                  placeholder={t('placeholder')}
                  {...field}
                />
              )}
            />
            {/* // <GuestField control={control} getValues={getValues} /> */}
          </StyledForm>
        </>
      )}
    </Root>
  );
};

export default Filters;

type InputData = {
  location: OptionType;
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;
};

const StyledDefaultAsyncSelect = styled(DefaultAsyncSelect)`
  margin-right: 16px;
  width: 176px;
`;
const StyledForm = styled.form`
  display: flex;
`;
const TabsContainer = styled.div`
  margin-right: 16px;
  width: 240px;
`;
const Root = styled.div`
  display: flex;
  margin-top: -8px;
  margin-left: 55px;
`;
