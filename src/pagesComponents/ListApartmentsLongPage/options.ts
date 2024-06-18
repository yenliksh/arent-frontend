import { LocalTypes } from '../../../public/locales/types';
import { ApartmentType } from '../../__generated__/types';
import { i18n } from '../../services';

export const houseTypeOptions = [
  { label: i18n.t('bottomFilters.all', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: '' },
  { label: i18n.t('bottomFilters.flats', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Flat },
  { label: i18n.t('bottomFilters.rooms', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Room },
  { label: i18n.t('bottomFilters.cottages', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Cottage },
  { label: i18n.t('bottomFilters.hostels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }), value: ApartmentType.Hostel },
  {
    label: i18n.t('bottomFilters.miniHotels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.MiniHotel,
  },
  {
    label: i18n.t('bottomFilters.guestHouses', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Guesthouse,
  },
  {
    label: i18n.t('bottomFilters.apartHotels', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    value: ApartmentType.Aparthotel,
  },
];

export const optionsMyltiple = [
  {
    title: '',
    placeholder: i18n.t('bottomFilters.arrival', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    name: 'dateStart',
  },
  {
    title: '',
    placeholder: i18n.t('bottomFilters.departure', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
    name: 'dateEnd',
  },
];

export const optionsNumberOfRooms = [
  {
    value: 1,
    label: i18n.t('rooms.one', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    value: 2,
    label: i18n.t('rooms.two', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    value: 3,
    label: i18n.t('rooms.three', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    value: 4,
    label: i18n.t('rooms.four', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    value: 5,
    label: i18n.t('rooms.five', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
  {
    value: 6,
    label: i18n.t('rooms.six', { ns: LocalTypes.LIST_APARTMENTS_PAGE }),
  },
];
