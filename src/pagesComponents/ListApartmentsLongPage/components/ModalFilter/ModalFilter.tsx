import { ApartmentAdRulesModel, ApartmentCategory, ApartmentRuleType } from '__generated__/types';
import { RentType } from 'components/Filters/RentType';
import { APARTMENT_MAX_PRICE_FOR_BOOKING, APARTMENT_MIN_PRICE_FOR_BOOKING_LONG } from 'constains';
import useClientSize from 'hooks/useClientSize';
import useParseFilters from 'hooks/useParseFilters';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  AdditionalOptionsEnum,
  CommunicationsEnum,
  electricityOptions,
  ElectricitySupplyEnum,
  gasOptions,
  GasSupplyEnum,
  ObjectPlacementEnum,
  objectPlacementOptions,
  WaterSupplyEnum,
  waterSupplyOptions,
} from 'pagesComponents/ListApartmentsShortPage/options';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, OptionType, TextVariants } from 'types';
import { AppText } from 'ui/AppText';
import { Button } from 'ui/Button';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { handleDivisionOnCategories } from 'utils';

import SvgClose from '../../../../../public/svg/components/Close';
import { HouseType } from '../../../ListApartmentsShortPage/components/ModalFilter/components/HouseType';
import { Price } from '../../../ListApartmentsShortPage/components/ModalFilter/components/Price';
import { Rooms } from '../../../ListApartmentsShortPage/components/ModalFilter/components/Rooms';
import { Rules } from '../../../ListApartmentsShortPage/components/ModalFilter/components/Rules';
import { Additionally, AdditionalOptions, CancellationPolicy, Communications } from './Components';

type FilterModalProps = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  handleSetPage: (page: number) => void;
};

const Portal = dynamic(() => import('hocs/portal/portal'), { ssr: false });

const FilterModal: FC<FilterModalProps> = ({ onClose, isOpen, title, handleSetPage }) => {
  const { t } = useTranslation('listApartmentsPage');
  const { getIsBreakpoint } = useClientSize();
  const router = useRouter();

  const { deleteAllFilters } = useParseFilters();

  const apartmentsCommunicationsFromQuery = router.query.communications ? [...[router.query.communications]] : [];

  const { control, reset, getValues } = useForm<FormType>({
    defaultValues: {
      minPrice:
        handleDivisionOnCategories(String(router.query.min) || '') ||
        handleDivisionOnCategories(APARTMENT_MIN_PRICE_FOR_BOOKING_LONG),
      maxPrice:
        handleDivisionOnCategories(String(router.query.max) || '') ||
        handleDivisionOnCategories(APARTMENT_MAX_PRICE_FOR_BOOKING),
      housingType: [],
      numberOfRooms: ['no'],
      noRules: true,
      rules: [RulesEnum.NoRules],
      allowedWithPets: false,
      allowedWithChildren: false,
      allowedToHangingOut: false,
      allowedToSmoke: false,
      totalArea: String(router.query.totalArea) || '',
      landArea: String(router.query.landArea) || '',
      territoryArea: String(router.query.territoryArea) || '',
      objectArea: String(router.query.objectArea) || '',
      ceilingHeight: String(router.query.ceilingHeight) || '',
      yearOfConstruction: null,
      floor: String(router.query.floor) || '',
      waterSupply: undefined,
      communications: [],
    },
    mode: 'onChange',
  });

  const isWidthSm = getIsBreakpoint('sm');

  const showFilters = async () => {
    const {
      numberOfRooms,
      housingType,
      rules,
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
      rules: rules.filter((elem) => elem !== RulesEnum.NoRules),
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

    const slug = router.query.slug as string[];

    await router.push({
      pathname: `${slug[0]}`,
      query: {
        ...filters,
      },
    });

    handleSetPage(0);
    onClose();
  };

  const setValuesInFormFromQuery = () => {
    const roomsFromQuery = router?.query?.rooms ? [...router!.query.rooms] : [];
    const apartmentsTypesFromQuery = router.query.rules ? [...[router.query.rules]] : [];
    const typesFromQuery = router.query.housingTypes ? [String(router.query.housingTypes)] : [];

    reset({
      numberOfRooms: roomsFromQuery,
      housingType: typesFromQuery.flat(),
      maxPrice:
        handleDivisionOnCategories(String(router.query.max) || '') ||
        handleDivisionOnCategories(APARTMENT_MAX_PRICE_FOR_BOOKING),
      minPrice:
        handleDivisionOnCategories(String(router.query.min) || '') ||
        handleDivisionOnCategories(APARTMENT_MIN_PRICE_FOR_BOOKING_LONG),
      rules: apartmentsTypesFromQuery.flat() as Array<RulesEnum | ApartmentRuleType>,
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

  const apartmentCategoryFromQuery = router.query.category
    ? (router.query.category as ApartmentCategory)
    : ApartmentCategory.Flat;

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

          <CancellationPolicy control={control} category={apartmentCategoryFromQuery} isWidthSm={isWidthSm} />
        </StyledForm>
        <Footer $isWidthSm={isWidthSm}>
          <StyledButton
            text={t('modalFilters.resetFilters')}
            variant={ButtonVariant.SECONDARY}
            onClick={() => {
              reset();
              deleteAllFilters();
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
  rules: Array<RulesEnum | ApartmentRuleType>;
  numberOfRooms: Array<string>;
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
  cancellationPolicy: OptionType;
  rentBookingType: string;
} & ApartmentAdRulesModel;

enum RulesEnum {
  SMOKE = 'allowedToSmoke',
  CHILDREN = 'allowedWithChildren',
  PARTY = 'allowedToHangingOut',
  PETS = 'allowedWithPets',
  NoRules = 'noRules',
}

const IconContainer = styled.button`
  background: transparent;
  display: flex;
  justify-content: flex-end;
  border: none;
  padding: 0;
  width: 75px;
  height: 20px;
  cursor: pointer;
`;
const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 25px 16px 6px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  z-index: 999;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;

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
const StyledForm = styled.form`
  padding: 0 16px 40px 16px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
    margin-bottom: 46px;
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled(AppText)<{ $displayNone: boolean | undefined }>`
  ${({ $displayNone }) => $displayNone && `display: none`}
`;

const AdditionalOptionsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr;
  }
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
