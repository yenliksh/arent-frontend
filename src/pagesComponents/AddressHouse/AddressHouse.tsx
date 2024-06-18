import { ApartmentCategory } from '__generated__/types';
import { Routes } from 'constains';
import useCurrentLocation from 'hooks/useCurrentLocation';
import { AdvertLayout } from 'layouts/AdvertLayout';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import GoogleMapService from 'services/google-maps';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Button } from 'ui';
import { getCookie } from 'utils';

import { useSetRentAddress } from '../../graphql/mutations/Advert/__generated__/SetAddressHouse.mutation';
import { useGetFourth } from '../../graphql/queries/Advert/__generated__/getAdverеFourth.query';
import { AddressType, Coords, StepProps } from '../../types/advert';
import { ButtonVariant } from '../../ui/Button/Button';
import { Map } from './components/Map';
import { MapInput } from './components/MapInput';

interface FormValues {
  location: string;
}
const BASE_COORDINATE = { lat: 51.1801, lng: 71.446 };

const AddressHouse: FC<StepProps> = ({ step }) => {
  const advertId = getCookie('advertId');

  const [center, setCenter] = useState(BASE_COORDINATE);
  const [isLoading, setIsLoading] = useState(false);
  const [isMarkerLoading, setIsMarkerLoading] = useState(true);
  const [currentMarker, setCurrentMarker] = useState<Coords | null>(center);
  useCurrentLocation(setCurrentMarker, setCenter, setIsMarkerLoading);
  const [address, setAddress] = useState<AddressType>();
  const [error, setError] = useState('');

  const router = useRouter();
  const { t } = useTranslation('addressPage');

  const [fetchSetAddress] = useSetRentAddress();
  const { data, loading: getDefaultValueLoading } = useGetFourth({ variables: { input: { id: advertId! } } });
  const [defaultAddress] = useState(data?.rentAd__myRentAd.address);
  const category = data?.rentAd__myRentAd.apartmentCategory;

  const { control, handleSubmit } = useForm<FormValues>();
  const collectedAddress = `${defaultAddress?.street}  ${defaultAddress?.houseNumber},  ${defaultAddress?.city},  Казахстан`;
  const isDirty = !error && address;

  const setAddressToDraft = async () => {
    if (address) {
      await fetchSetAddress({
        variables: {
          input: {
            lat: address.location.lat,
            lng: address.location.lng,
            street: address.street,
            houseNumber: address.houseNumber,
            city: address.city,
            country: address.country,
            id: advertId!,
          },
        },
      });
    }
  };

  const onSubmit = async () => {
    if (isDirty) {
      setIsLoading(true);

      await fetchSetAddress({
        variables: {
          input: {
            lat: address.location.lat,
            lng: address.location.lng,
            street: address.street,
            houseNumber: address.houseNumber,
            city: address.city,
            country: address.country,
            id: advertId!,
          },
        },
      });
      setIsLoading(false);
    }
    await router.push(Routes.adCreateHouseMedia);
  };

  const loadPlaces = async (value: string) => {
    const res = await GoogleMapService.getPlaces(value);
    return res;
  };

  const setPositionBeforeDragableMarker = async () => {
    // input: coord: { lat: number; lng: number }
    // const res = await GoogleMapService.getPlacesDetailsByCoordinates(coord.lat.toString(), coord.lng.toString());
    // setDefaultAdressValue({
    //   lat: +coord.lat,
    //   lng: +coord.lng,
    //   street: (res.street ? res.street : res.district) as string,
    //   houseNumber: res.houseNumber ? res.houseNumber : `${coord.lat}, ${coord.lng}`,
    //   city: res.city as string,
    //   country: res.country as string,
    //   __typename: 'ApartmentAdAddressModel',
    // });
    // setAddress((prevState) => {
    //   return {
    //     ...prevState!,
    //     location: {
    //       lat: coord.lat,
    //       lng: coord.lng,
    //     },
    //     street: (res.street ? res.street : res.district) as string,
    //     houseNumber: res.houseNumber ? res.houseNumber : `${coord.lat}, ${coord.lng}`,
    //     city: res.city,
    //     country: res.country,
    //   };
    // });
    // setCurrentMarker((prevState) => {
    //   return {
    //     ...prevState,
    //     lat: coord.lat,
    //     lng: coord.lng,
    //   };
    // });
  };

  const setDefaultAddress = () => {
    const defaultAddress = data?.rentAd__myRentAd.address;
    if (defaultAddress) {
      setCurrentMarker({
        lat: data.rentAd__myRentAd.address?.lat!,
        lng: data.rentAd__myRentAd.address?.lng!,
      });
      setCenter({
        lat: data.rentAd__myRentAd.address?.lat!,
        lng: data.rentAd__myRentAd.address?.lng!,
      });
      setAddress({
        location: { lat: defaultAddress.lat, lng: defaultAddress.lng },
        street: defaultAddress.street,
        houseNumber: defaultAddress.houseNumber,
        city: defaultAddress.city,
        country: defaultAddress.country,
      });
    }
  };

  useEffect(() => {
    setDefaultAddress();
  }, [data]);

  const goBack = () => {
    if (category === ApartmentCategory.House || category === ApartmentCategory.Countryhouse) {
      router.push(Routes.adCreateHouseType);
    } else {
      router.push(Routes.adCreateAboutHouse);
    }
  };

  return (
    <AdvertLayout step={step} onSaveDraft={setAddressToDraft}>
      <Root onSubmit={handleSubmit(onSubmit)}>
        <div>
          <HeadTitle variant={TextVariants.SECONDARY} font="title_36_26_bold">
            {t('title')}
          </HeadTitle>
          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <>
                {!getDefaultValueLoading && (
                  <MapInput
                    {...field}
                    defaultValue={defaultAddress ? collectedAddress : ''}
                    setAddress={setAddress}
                    error={error}
                    setError={setError}
                    onLoadOptions={loadPlaces}
                    setCurrentMarker={setCurrentMarker}
                    setCenter={setCenter}
                  />
                )}
              </>
            )}
          />

          <Map
            onChangeCoordsToDrag={setPositionBeforeDragableMarker}
            currentMarker={currentMarker!}
            center={center}
            setCenter={setCenter}
            setCurrentMarker={setCurrentMarker}
            isMarkerLoading={isMarkerLoading}
          />
        </div>
        <Footer>
          <StyledBackButton
            onClick={goBack}
            isFullWight
            type="button"
            text={t('buttons.secondary')}
            variant={ButtonVariant.SECONDARY}
          />
          <StyledButton
            type="submit"
            isLoading={isLoading}
            disabled={(!address && !defaultAddress) || !!error}
            isFullWight
            text={t('buttons.primary')}
            variant={ButtonVariant.VIOLET}
          />
        </Footer>
      </Root>
    </AdvertLayout>
  );
};
export default AddressHouse;

const Root = styled.form`
  padding: 40px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: flex;
    flex-direction: column;
    padding: 24px 16px 16px;
    height: 616px;
    justify-content: space-between;
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

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 283px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    min-width: 167px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    min-width: 140.5px;
  }
`;

const HeadTitle = styled(AppText)`
  margin-bottom: 32px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: none;
  }
`;
