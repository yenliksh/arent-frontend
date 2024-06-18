import { ApartmentAdRulesModel, ApartmentCategory, ApartmentRuleType } from '__generated__/types';
import { APARTMENT_MAX_PRICE_FOR_BOOKING, APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT, Routes, timeOptions } from 'constains';
import { useClientSize } from 'hooks';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { dayjs } from 'services';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, OptionType, TextVariants } from 'types';
import { AppText, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { handleDivisionOnCategories } from 'utils';

import SvgClose from '../../../../../public/svg/components/Close';
import useParseFilters from '../../../../hooks/useParseFilters';
import {
  AdditionalOptionsEnum,
  CommunicationsEnum,
  electricityOptions,
  ElectricitySupplyEnum,
  gasOptions,
  GasSupplyEnum,
  ObjectPlacementEnum,
  objectPlacementOptions,
  RulesEnum,
  rulesOptions,
  WaterSupplyEnum,
  waterSupplyOptions,
} from '../../options';
import {
  Additionally,
  AdditionalOptions,
  ArriveTimes,
  CancellationPolicy,
  Communications,
  DepartureTimes,
  HouseType,
  Price,
  RentType,
  Rooms,
  Rules,
} from './components';

type FilterModalProps = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  handleSetPage: (page: number) => void;
};

interface OptionFilter extends OptionType {
  text?: string;
}

const Portal = dynamic(() => import('hocs/portal/portal'), { ssr: false });

const FilterModal: FC<FilterModalProps> = ({ onClose, isOpen, title, handleSetPage }) => {
  const { t } = useTranslation('listApartmentsPage');

  const { getIsBreakpoint } = useClientSize();
  const isWidthSm = getIsBreakpoint('sm');

  const router = useRouter();
  const { deleteAllFilters } = useParseFilters();

  const findCurrentOption = useCallback(
    (value: string, options: Array<OptionFilter>) => {
      return options.find((elem) => elem.value === value);
    },
    [router.query],
  );

  const typesFromQuery = router.query.housingTypes ? [String(router.query.housingTypes)] : [];

  const apartmentsTypesFromQuery = router.query.rules ? [...[router.query.rules]] : [];

  const apartmentsCommunicationsFromQuery = router.query.communications ? [...[router.query.communications]] : [];

  const apartmentCategoryFromQuery = router.query.category
    ? (router.query.category as ApartmentCategory)
    : ApartmentCategory.Flat;

  const { control, reset, getValues } = useForm<FormType>({
    defaultValues: {
      minPrice:
        handleDivisionOnCategories(String(router.query.min) || '') ||
        handleDivisionOnCategories(APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT),
      maxPrice:
        handleDivisionOnCategories(String(router.query.max) || '') ||
        handleDivisionOnCategories(APARTMENT_MAX_PRICE_FOR_BOOKING),
      numberOfRooms: ['no'],
      housingType: [],
      cancellationPolicy: rulesOptions[0],
      rentBookingType: '',
      rules: [],
      noRules: true,
      totalArea: String(router.query.totalArea) || '',
      landArea: String(router.query.landArea) || '',
      territoryArea: String(router.query.territoryArea) || '',
      objectArea: handleDivisionOnCategories(String(router.query.objectArea) || '') || '',
      ceilingHeight: String(router.query.ceilingHeight) || '',
      yearOfConstruction: null,
      floor: String(router.query.floor) || '',
      waterSupply: undefined,
      communications: [],
      objectPlacement: undefined,
    },
    mode: 'onChange',
  });

  const showFilters = async () => {
    const {
      dateStart,
      dateEnd,
      numberOfRooms,
      housingType,
      rules,
      departyreEnd,
      departyreStart,
      entryStart,
      entryEnd,
      maxPrice,
      minPrice,
      rentBookingType,
      cancellationPolicy,
      landArea,
      totalArea,
      territoryArea,
      objectArea,
      ceilingHeight,
      yearOfConstruction,
      floor,
      waterSupply,
      electricitySupply,
      gasSupply,
      objectPlacement,
      communications,
    } = getValues();

    const filters = {
      ...router.query,
      min: minPrice.replaceAll(' ', ''),
      max: maxPrice.replaceAll(' ', ''),
      rooms: numberOfRooms.map((elem) => +elem),
      start: dateStart ? dayjs(dateStart).format('YYYY-MM-DD').toString() : null,
      end: dateEnd ? dayjs(dateEnd).format('YYYY-MM-DD').toString() : null,
      rules: rules.filter((elem) => elem !== RulesEnum.NoRules),
      departureEnd: departyreEnd?.value || null,
      departureStart: departyreStart?.value || null,
      arrivalEnd: entryEnd?.value || null,
      arrivalStart: entryStart?.value || null,
      rentBookingType: rentBookingType || null,
      cancellationPolicy: cancellationPolicy?.value as unknown as string,
      landArea,
      totalArea,
      territoryArea,
      objectArea,
      ceilingHeight,
      yearOfConstruction: yearOfConstruction?.value || null,
      floor,
      housingTypes: housingType,
      waterSupply,
      electricitySupply,
      gasSupply,
      objectPlacement,
      communications: communications.filter((elem) => elem !== null),
    };

    await router.push({
      query: {
        ...filters,
      },
    });

    handleSetPage(0);

    onClose();
  };

  const setValuesInFormFromQuery = () => {
    const { query } = router;
    const roomsFromQuery = router?.query?.rooms ? [...router!.query.rooms] : [];
    reset({
      numberOfRooms: roomsFromQuery,
      rentBookingType: query.rentBookingType ? String(query.rentBookingType) : '',
      dateEnd: query?.end ? String(query.end) : null,
      housingType: typesFromQuery.flat(),
      rules: apartmentsTypesFromQuery.flat() as Array<RulesEnum | ApartmentRuleType>,
      dateStart: query?.start ? String(query.start) : null,
      entryStart: findCurrentOption(String(router.query.arrivalStart), timeOptions),
      entryEnd: findCurrentOption(String(router.query.arrivalEnd), timeOptions),
      cancellationPolicy: findCurrentOption(String(router.query.cancellationPolicy), rulesOptions),
      departyreStart: findCurrentOption(String(router.query.departureStart), timeOptions),
      departyreEnd: router.query.departureEnd
        ? findCurrentOption(String(router.query.departureEnd), timeOptions)
        : undefined,
      maxPrice:
        handleDivisionOnCategories(String(router.query.max) || '') ||
        handleDivisionOnCategories(APARTMENT_MAX_PRICE_FOR_BOOKING),
      minPrice:
        handleDivisionOnCategories(String(router.query.min) || '') ||
        handleDivisionOnCategories(APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT),
      totalArea: handleDivisionOnCategories(String(router.query.totalArea) || '') || '',
      objectArea: handleDivisionOnCategories(String(router.query.objectArea) || '') || '',
      landArea: handleDivisionOnCategories(String(router.query.landArea) || '') || '',
      ceilingHeight: handleDivisionOnCategories(String(router.query.ceilingHeight) || '') || '',
      floor: handleDivisionOnCategories(String(router.query.floor) || '') || '',
      yearOfConstruction: router.query.yearOfConstruction
        ? {
            label: String(router.query.yearOfConstruction),
            value: String(router.query.yearOfConstruction),
          }
        : null,
      waterSupply: router.query.waterSupply ? (router.query.waterSupply as WaterSupplyEnum) : undefined,
      electricitySupply: router.query.electricitySupply
        ? (router.query.electricitySupply as ElectricitySupplyEnum)
        : undefined,
      gasSupply: router.query.gasSupply ? (router.query.gasSupply as GasSupplyEnum) : undefined,
      objectPlacement: router.query.objectPlacement ? (router.query.objectPlacement as ObjectPlacementEnum) : undefined,
      communications: apartmentsCommunicationsFromQuery.flat() as Array<CommunicationsEnum>,
    });
  };

  useEffect(() => {
    setValuesInFormFromQuery();
  }, [router.query]);

  useEffect(() => {
    router.prefetch(Routes.listApartmentsLong);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Root $isOpen={isOpen} $isWidthSm={isWidthSm}>
        <Header className="modal-header">
          <TitleContainer>
            <HeaderTitle
              font="body_24_16_medium"
              forwardedAs="h2"
              variant={TextVariants.SECONDARY}
              $displayNone={false}>
              {title}
            </HeaderTitle>
          </TitleContainer>
          <IconContainer className="close-button" onClick={onClose}>
            <SvgClose color="#1C212D" />
          </IconContainer>
        </Header>
        <StyledForm>
          <StyledAppText variant={TextVariants.SECONDARY} font={isWidthSm ? 'body_20_14_medium' : 'body_24_16_medium'}>
            {t('bottomFilters.price')}
          </StyledAppText>
          <Section>
            <Price control={control} />
          </Section>
          <HouseType control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <Rooms control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <Rules control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <Additionally control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <AdditionalOptionsSection>
            <AdditionalOptions
              control={control}
              title={t('modalFilters.waterSupply')}
              controlName={AdditionalOptionsEnum.WATERSUPPLY}
              options={waterSupplyOptions}
              category={apartmentCategoryFromQuery}
            />

            <AdditionalOptions
              control={control}
              title={t('modalFilters.electricitySupply')}
              controlName={AdditionalOptionsEnum.ELECTRICITYSUPPLY}
              options={electricityOptions}
              category={apartmentCategoryFromQuery}
            />

            <AdditionalOptions
              control={control}
              title={t('modalFilters.gasSupply')}
              controlName={AdditionalOptionsEnum.GASSUPPLY}
              options={gasOptions}
              category={apartmentCategoryFromQuery}
            />

            <AdditionalOptions
              control={control}
              title={t('modalFilters.objectPlacement')}
              controlName={AdditionalOptionsEnum.OBJECTPLACEMENT}
              options={objectPlacementOptions}
              category={apartmentCategoryFromQuery}
            />
          </AdditionalOptionsSection>

          <Communications control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <Title variant={TextVariants.SECONDARY} font="body_24_16_medium">
            {t('modalFilters.bookingType')}
          </Title>
          <SectionBookingType>
            <RentType control={control} />
          </SectionBookingType>

          <ArriveTimes control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <DepartureTimes control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />

          <CancellationPolicy control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />
        </StyledForm>
        <Footer $isWidthSm={isWidthSm}>
          <StyledButton
            text={t('modalFilters.resetFilters')}
            variant={ButtonVariant.SECONDARY}
            onClick={() => {
              reset();
              deleteAllFilters();
              onClose();
            }}
          />
          <FooterButton
            onClick={showFilters}
            text={t('modalFilters.showVariants')}
            size={ButtonSize.LONG_TEXT}
            variant={ButtonVariant.VIOLET}
            $isWidthSm={isWidthSm}
          />
        </Footer>
      </Root>
    </Wrapper>
  );
};

export default FilterModal;

type FormType = {
  minPrice: string;
  maxPrice: string;
  housingType: Array<string>;
  numberOfRooms: Array<string>;
  rentBookingType: string;
  dateStart: string | null | Date;
  dateEnd: string | null | Date;
  entryStart: OptionType;
  rules: Array<RulesEnum | ApartmentRuleType>;
  entryEnd: OptionType;
  departyreStart: OptionType;
  departyreEnd: OptionType;
  cancellationPolicy: OptionType;
  noRules: boolean;
  totalArea: string;
  landArea: string;
  territoryArea: string;
  objectArea: string;
  ceilingHeight: string;
  yearOfConstruction: { label: string; value: string } | null;
  floor: string;
  waterSupply: WaterSupplyEnum;
  electricitySupply: ElectricitySupplyEnum;
  gasSupply: GasSupplyEnum;
  objectPlacement: ObjectPlacementEnum;
  communications: Array<CommunicationsEnum>;
} & ApartmentAdRulesModel;

const FooterButton = styled(Button)<{ $isWidthSm: boolean }>`
  height: 40px;
  padding: 16px 63px;
  width: ${({ $isWidthSm }) => ($isWidthSm ? `100%` : 'max-content')};
`;
const StyledButton = styled(Button)`
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  padding: 2px;
  ${({ theme: { typography } }) => typography.body_24_16_medium}
`;
const Footer = styled.div<{ $isWidthSm: boolean }>`
  position: sticky;
  display: flex;
  flex-direction: ${({ $isWidthSm }) => ($isWidthSm ? `column` : 'row')};
  padding: 16px 24px;
  margin: -24px;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  z-index: 1;
  margin-top: 100%;
`;

const SectionBookingType = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 18px;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    flex-direction: row;
    gap: 0;
  }
`;

const Title = styled(AppText)`
  margin-top: 24px;
`;

const StyledAppText = styled(AppText)`
  margin-top: 8px;
`;
const Section = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;
`;

const AdditionalOptionsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const StyledForm = styled.form`
  padding: 0 16px 40px 16px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
    margin-bottom: 40px;
  }
`;
const Root = styled.div<{ $isOpen: boolean; $isWidthSm: boolean }>`
  ${({ theme: { colors }, $isOpen, $isWidthSm }) => css`
    position: fixed;
    width: ${$isWidthSm ? '100vw' : '50vw'};
    height: 100%;

    top: 0;
    right: ${$isWidthSm ? '-100vw' : '-50vw'};
    z-index: 100000;
    padding: 0px 16px;

    transform: translateX(${$isOpen ? '-100%' : 0});
    transition: transform 0.2s linear;

    background-color: ${colors.greyScale[0]};

    overflow: inherit;
    overflow-y: scroll;
  `}
`;

const Wrapper = styled(Portal)<{ $isDemo?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9991;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: inherit;
  background: rgba(28, 33, 45, 0.3);

  backdrop-filter: ${({ $isDemo }) => ($isDemo ? `blur(50px)` : 'none')};
`;

const Header = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 16px 0px 16px 0px;
    position: sticky;
    top: 0;
    background: ${colors.greyScale[0]};
    z-index: 999;
    border-bottom: 1px solid ${colors.greyScale[30]};

    @media (max-width: ${BreakpointsEnum.s}px) {
      border-bottom: 1px solid ${colors.greyScale[30]};
    }
  `}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled(AppText)<{ $displayNone: boolean | undefined }>`
  ${({ $displayNone }) => $displayNone && `display: none`}
`;

const IconContainer = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  height: 20px;
  cursor: pointer;
`;
