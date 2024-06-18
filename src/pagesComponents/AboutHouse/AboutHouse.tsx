import { ApartmentCategory } from '__generated__/types';
import { AdvertLayout } from 'layouts';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  CommunicationsEnum,
  ElectricitySupplyEnum,
  GasSupplyEnum,
  ObjectPlacementEnum,
  WaterSupplyEnum,
} from 'pagesComponents/ListApartmentsShortPage/options';
import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Button, NumberInput, Selector } from 'ui';
import { getCookie } from 'utils';

import { Routes } from '../../constains';
import { useSetRentDetails } from '../../graphql/mutations/Advert/__generated__/setDetailsHouse.mutation';
import { useGetThirdStep } from '../../graphql/queries/Advert/__generated__/getThirdStep.query';
import { StepProps } from '../../types/advert';
import { ButtonVariant } from '../../ui/Button/Button';
import { IconButtonSize } from '../../ui/IconButton/IconButton';
import { Area } from './Area';
import { Commercial } from './Commercial';
import { Industrial } from './Industrial';
import { OtherRealEstate } from './OtherRealEstate';

interface FormValues {
  numberOfRooms: string;
  numberOfGuests: string;
  name: string;
  totalArea: number;
  landArea: number;
  territoryArea: number;
  waterSupply: WaterSupplyEnum;
  gasSupply: GasSupplyEnum;
  electricitySupply: ElectricitySupplyEnum;
  objectPlacement: ObjectPlacementEnum;
  yearOfConstruction: { label: string; value: string };
  objectArea: number;
  communications: Array<CommunicationsEnum>;
  floor: number;
  ceilingHeight: number;
}

const AboutHouse: FC<StepProps> = ({ step }) => {
  const { t } = useTranslation('aboutHousePage');
  const advertId = getCookie('advertId');
  const [fetchSetDetails] = useSetRentDetails();
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading: loadingForDefaultValues } = useGetThirdStep({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        id: advertId!,
      },
    },
  });

  const guests = data?.rentAd__myRentAd?.details?.numberOfGuests;
  const category = data?.rentAd__myRentAd?.apartmentCategory;

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      numberOfRooms: '',
      numberOfGuests: '',
      name: '',
      communications: [],
    },
    mode: 'onChange',
  });

  const setDetails = async () => {
    setIsLoading(true);
    const data = getValues();

    await fetchSetDetails({
      variables: {
        input: {
          id: getCookie('advertId')!,
          numberOfGuests: Number(data.numberOfGuests),
          numberOfRooms: Number(data.numberOfRooms),
          name: data.name,
          totalArea: Number(data.totalArea),
          landArea: Number(data.landArea),
          territoryArea: Number(data.territoryArea),
          waterSupply: data.waterSupply,
          gasSupply: data.gasSupply,
          electricitySupply: data.electricitySupply,
          yearOfConstruction: Number(data.yearOfConstruction?.value),
          objectPlacement: data.objectPlacement,
          objectArea: Number(data.objectArea),
          floor: Number(data.floor),
          ceilingHeight: Number(data.ceilingHeight),
          communications: (data.communications as CommunicationsEnum[]) || null,
        },
      },
    });
    setIsLoading(false);
  };

  const setDetailsInDraft = async () => {
    if (isDirty && isValid) {
      const data = getValues();
      await fetchSetDetails({
        variables: {
          input: {
            id: getCookie('advertId')!,
            numberOfGuests: Number(data.numberOfGuests),
            numberOfRooms: Number(data.numberOfRooms),
          },
        },
      });
    }
  };

  const onSubmit = async () => {
    if (isDirty) {
      await setDetails();
    }
    await router.push(Routes.adCreateAddress);
  };

  const selectorsArray = useMemo(() => {
    return [
      { title: t('rooms.studio'), value: '0' },
      { title: '1', value: '1' },
      { title: '2', value: '2' },
      { title: '3', value: '3' },
      { title: '4', value: '4' },
      { title: '5', value: '5' },
      { title: '6', value: '6' },
      { title: '7', value: '7' },
      { title: '8+', value: '8' },
    ];
  }, [t]);

  const router = useRouter();

  const LinkingToNextStep = () => (event: ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(Routes.adCreateHouseType);
  };

  useEffect(() => {
    const details = data?.rentAd__myRentAd.details;
    if (details) {
      reset({
        numberOfGuests: String(details?.numberOfGuests) || '0',
        numberOfRooms: String(details?.numberOfRooms) || '0',
      });
    }
  }, [data]);

  const isDisabled = (!isDirty && !data) || !isValid;

  return (
    <AdvertLayout step={step} onSaveDraft={setDetailsInDraft}>
      <Root onSubmit={handleSubmit(onSubmit)}>
        <Title variant={TextVariants.SECONDARY} font="title_36_26_bold">
          Подробнее о жилье
        </Title>
        {category === ApartmentCategory.Area && <Area control={control} category={category} />}
        {category === ApartmentCategory.Commercial && <Commercial control={control} category={category} />}
        {category === ApartmentCategory.Industrial && <Industrial control={control} category={category} />}
        {category === ApartmentCategory.Otherrealestate && <OtherRealEstate control={control} />}

        {(category === ApartmentCategory.Flat ||
          category === ApartmentCategory.Foreign ||
          category === ApartmentCategory.House) && (
          <InfoContainer>
            <CountRooms>
              <ContentSubTitle variant={TextVariants.SECONDARY} font="title_22_18_bold">
                {t('rooms.title')}
              </ContentSubTitle>
              <Controller
                name="numberOfRooms"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <RoomsSelectorsContainer>
                    {selectorsArray.map((selector, index) =>
                      index ? (
                        <StyledSelector
                          name={selector.title}
                          text={selector.title}
                          onChange={() => onChange(selector.value)}
                          checked={value === selector.value}
                          key={index}
                        />
                      ) : (
                        <StyledBigSelector
                          name={selector.title}
                          text={selector.title}
                          onChange={() => onChange(selector.value)}
                          checked={value === selector.value}
                          key={index}
                        />
                      ),
                    )}
                  </RoomsSelectorsContainer>
                )}
              />
            </CountRooms>
            <GuestsCountContainer>
              <ContentSubTitle variant={TextVariants.SECONDARY} font="title_22_18_bold">
                {t('guests.title')}
              </ContentSubTitle>
              {!loadingForDefaultValues && (
                <StyledNumberInput
                  buttonSize={IconButtonSize.NORMAL}
                  isRequired
                  name="numberOfGuests"
                  initialValue={guests || 0}
                  control={control}
                />
              )}
            </GuestsCountContainer>
          </InfoContainer>
        )}
        <Footer>
          <StyledBackButton
            onClick={() => router.push(Routes.adCreateHouseType)}
            isFullWight
            type="button"
            text={t('buttons.secondary')}
            variant={ButtonVariant.SECONDARY}
          />
          <StyledButton
            type="submit"
            isFullWight
            text={t('buttons.primary')}
            isLoading={isLoading}
            disabled={isDisabled}
            onClick={LinkingToNextStep}
            variant={ButtonVariant.VIOLET}
          />
        </Footer>
      </Root>
    </AdvertLayout>
  );
};

export default AboutHouse;

const Root = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 0 16px 16px;
    height: 70vh;
    justify-content: space-between;
  }
`;

const Title = styled(AppText)`
  margin-bottom: 40px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: none;
  }
`;

const ContentSubTitle = styled(AppText)`
  margin-bottom: 24px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-bottom: 16px;
  }
`;
const InfoContainer = styled.div`
  max-width: 800px;
`;
const CountRooms = styled.div``;

const RoomsSelectorsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    overflow: scroll;
    margin-bottom: 22px;
    padding-bottom: 10px;
    padding-right: 16px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledBigSelector = styled(Selector)`
  width: 74px !important;
  min-width: 74px;
  padding: 0;
  p {
    ${({ theme: { typography } }) => typography.caption_16_12_regular}
  }
`;

const StyledSelector = styled(Selector)`
  width: 40px !important;
  height: 40px !important;
  padding: 0;
  min-width: 40px;

  justify-content: center;
  align-items: center;
  h6 {
    ${({ theme: { typography } }) => typography.caption_16_12_regular}
  }
`;

const GuestsCountContainer = styled.div``;

const StyledNumberInput = styled(NumberInput)`
  padding: 0;
  div {
    padding: 0;
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

const StyledBackButton = styled(Button)`
  width: max-content;
  background-color: #fff;
  ${({ theme: { typography } }) => typography.body_20_14_medium};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 100%;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 283px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    width: 167.5px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    width: 140.5px;
  }
`;
