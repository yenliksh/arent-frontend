import { i18n } from 'services';

import { LocalTypes } from '../../../public/locales/types';
import {
  ApartmentRuleType,
  ApartmentType,
  ShortTermRentBookingType,
  ShortTermRentCancellationPolicyType,
} from '../../__generated__/types';
import { TabsValueType } from '../../types/tabs';

export enum RulesEnum {
  SMOKE = 'allowedToSmoke',
  CHILDREN = 'allowedWithChildren',
  PARTY = 'allowedToHangingOut',
  PETS = 'allowedWithPets',
  NoRules = 'noRules',
}

export enum AdditionalOptionsEnum {
  WATERSUPPLY = 'waterSupply',
  ELECTRICITYSUPPLY = 'electricitySupply',
  GASSUPPLY = 'gasSupply',
  OBJECTPLACEMENT = 'objectPlacement',
}

export enum WaterSupplyEnum {
  CENTRALWATERSUPPLY = 'centralWaterSupply',
  POSSIBLETOCONNECT = 'possibleToConnect',
  WELL = 'well',
  NOT = 'not',
}

export enum ElectricitySupplyEnum {
  YES = 'yes',
  POSSIBLETOCONNECT = 'possibleToConnect',
  NOT = 'not',
}

export enum GasSupplyEnum {
  TRUNKAUTONOMOUS = 'trunkAutonomous',
  POSSIBLETOCONNECT = 'possibleToConnect',
  NOT = 'not',
}

export enum ObjectPlacementEnum {
  BUSINESSCENTER = 'businessCenter',
  RESIDENTIONALCOMPLEX = 'residentionalComplex',
  MALL = 'mall',
  UNIVERSALMARKET = 'universalMarket',
  DETACHEDBUILDING = 'detachedBuilding',
}

export enum CommunicationsEnum {
  LIGHT = 'light',
  WATER = 'water',
  GAS = 'gas',
  SEWERAGE = 'sewerage',
  HEATING = 'heating',
  VENTILATION = 'ventilation',
}

export const accommodationOptions = [
  {
    label: i18n.t('modalFilters.requestBookingTypeLabel', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    description: i18n.t('modalFilters.requestBookingTypeValue', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ShortTermRentBookingType.Request,
  },
  {
    label: i18n.t('modalFilters.instantBookingTypeLabel', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    description: i18n.t('modalFilters.instantBookingTypeValue', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ShortTermRentBookingType.Instant,
  },
];

export const waterSupplyOptions = [
  {
    label: i18n.t('modalFilters.centralWaterSupply', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: WaterSupplyEnum.CENTRALWATERSUPPLY,
  },
  {
    label: i18n.t('modalFilters.possibleToConnect', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: WaterSupplyEnum.POSSIBLETOCONNECT,
  },
  {
    label: i18n.t('modalFilters.well', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: WaterSupplyEnum.WELL,
  },
  {
    label: i18n.t('modalFilters.not', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: WaterSupplyEnum.NOT,
  },
];

export const electricityOptions = [
  {
    label: i18n.t('modalFilters.yes', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ElectricitySupplyEnum.YES,
  },
  {
    label: i18n.t('modalFilters.possibleToConnect', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ElectricitySupplyEnum.POSSIBLETOCONNECT,
  },
  {
    label: i18n.t('modalFilters.not', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ElectricitySupplyEnum.NOT,
  },
];

export const gasOptions = [
  {
    label: i18n.t('modalFilters.trunkAutonomous', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: GasSupplyEnum.TRUNKAUTONOMOUS,
  },
  {
    label: i18n.t('modalFilters.possibleToConnect', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: GasSupplyEnum.POSSIBLETOCONNECT,
  },
  {
    label: i18n.t('modalFilters.not', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: GasSupplyEnum.NOT,
  },
];

export const objectPlacementOptions = [
  {
    label: i18n.t('modalFilters.businessCenter', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ObjectPlacementEnum.BUSINESSCENTER,
  },
  {
    label: i18n.t('modalFilters.residentionalComplex', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ObjectPlacementEnum.RESIDENTIONALCOMPLEX,
  },
  {
    label: i18n.t('modalFilters.mall', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ObjectPlacementEnum.MALL,
  },
  {
    label: i18n.t('modalFilters.universalMarket', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ObjectPlacementEnum.UNIVERSALMARKET,
  },
  {
    label: i18n.t('modalFilters.detachedBuilding', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ObjectPlacementEnum.DETACHEDBUILDING,
  },
];

export const communicationsOptions = [
  {
    label: i18n.t('modalFilters.light', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: CommunicationsEnum.LIGHT,
  },
  {
    label: i18n.t('modalFilters.water', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: CommunicationsEnum.WATER,
  },
  {
    label: i18n.t('modalFilters.gas', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: CommunicationsEnum.GAS,
  },
  {
    label: i18n.t('modalFilters.sewerage', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: CommunicationsEnum.SEWERAGE,
  },
  {
    label: i18n.t('modalFilters.heating', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: CommunicationsEnum.HEATING,
  },
  {
    label: i18n.t('modalFilters.ventilation', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: CommunicationsEnum.VENTILATION,
  },
];

export const rulesArray = [
  { text: i18n.t('bottomFilters.noMatter', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), name: RulesEnum.NoRules },
  {
    text: i18n.t('modalFilters.allowedWithPets', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    name: ApartmentRuleType.AllowedWithPets,
  },
  {
    text: i18n.t('modalFilters.allowedWithChildren', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    name: ApartmentRuleType.AllowedWithChildren,
  },
  {
    text: i18n.t('modalFilters.allowedToSmoke', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    name: ApartmentRuleType.AllowedToSmoke,
  },
  {
    text: i18n.t('modalFilters.allowedToHangingOut', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    name: ApartmentRuleType.AllowedToHangingOut,
  },
];

export const roomsArray = [
  { title: i18n.t('bottomFilters.noMatter', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: 'no' },
  { title: i18n.t('bottomFilters.stydio', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: '0' },
  { title: '1', value: '1' },
  { title: '2', value: '2' },
  { title: '3', value: '3' },
  { title: '4', value: '4' },
  { title: '5', value: '5' },
  { title: '6', value: '6' },
  { title: '7', value: '7' },
  { title: '8+', value: '8' },
];

export const typeAccomodationArray = [
  { title: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: null },
  { title: i18n.t('bottomFilters.flats', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Flat },
  { title: i18n.t('bottomFilters.rooms', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Room },
  { title: i18n.t('bottomFilters.cottages', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Cottage },
  { title: i18n.t('bottomFilters.hostels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Hostel },
  {
    title: i18n.t('bottomFilters.miniHotels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.MiniHotel,
  },
  {
    title: i18n.t('bottomFilters.guestHouses', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Guesthouse,
  },
  {
    title: i18n.t('bottomFilters.apartHotels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Aparthotel,
  },
];

export const typeFlatArray = [
  { title: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: null },
  { title: i18n.t('bottomFilters.entireFlats', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Flat },
  { title: i18n.t('bottomFilters.rooms', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Room },
];

export const typeHouseArray = [
  { title: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: null },
  { title: i18n.t('bottomFilters.cottages', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Cottage },
  { title: i18n.t('bottomFilters.hostels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Hostel },
  {
    title: i18n.t('bottomFilters.miniHotels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.MiniHotel,
  },
  {
    title: i18n.t('bottomFilters.guestHouses', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Guesthouse,
  },
  {
    title: i18n.t('bottomFilters.apartHotels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Aparthotel,
  },
];

export const typeAreaArray = [
  { title: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: null },
  { title: i18n.t('bottomFilters.ihc', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Ihc },
  { title: i18n.t('bottomFilters.pc', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Pc },
  { title: i18n.t('bottomFilters.lgx', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Lgx },
  {
    title: i18n.t('bottomFilters.landForGarden', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Landforgarden,
  },
  {
    title: i18n.t('bottomFilters.commercial', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Commercial,
  },
  {
    title: i18n.t('bottomFilters.countryConstruction', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Countryconstruction,
  },
  {
    title: i18n.t('bottomFilters.other', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Other,
  },
];

export const typeCommercialArray = [
  { title: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: null },
  {
    title: i18n.t('bottomFilters.freeAppointment', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Freeappointment,
  },
  {
    title: i18n.t('bottomFilters.office', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Office,
  },
  {
    title: i18n.t('bottomFilters.storage', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Storage,
  },
  {
    title: i18n.t('bottomFilters.publicCatering', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Publiccatering,
  },
  {
    title: i18n.t('bottomFilters.shop', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Shop,
  },
  {
    title: i18n.t('bottomFilters.beautySaloon', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Beautysaloon,
  },
  {
    title: i18n.t('bottomFilters.carService', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Carservice,
  },
];

export const typeIndustrialArray = [
  { title: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: null },
  {
    title: i18n.t('bottomFilters.industrialBase', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Industrialbase,
  },
  {
    title: i18n.t('bottomFilters.factory', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Factory,
  },
];

export const rulesOptions = [
  {
    label: i18n.t('bottomFilters.noMatter', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: '',
    text: '',
  },
  {
    label: i18n.t('modalFilters.flexibleLabel', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ShortTermRentCancellationPolicyType.Flexible,
    text: i18n.t('modalFilters.flexibleText', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    label: i18n.t('modalFilters.moderateLabel', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ShortTermRentCancellationPolicyType.Moderate,
    text: i18n.t('modalFilters.moderateText', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    label: i18n.t('modalFilters.inflexibleLabel', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ShortTermRentCancellationPolicyType.Inflexible,
    text: i18n.t('modalFilters.inflexibleText', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    label: i18n.t('modalFilters.strictLabel', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ShortTermRentCancellationPolicyType.Strict,
    text: i18n.t('modalFilters.strictText', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
];

export const tabs = [
  { title: i18n.t('filters.shortTerm', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: TabsValueType.SHORT, id: '0' },
  { title: i18n.t('filters.longTerm', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: TabsValueType.LONG, id: '1' },
];
