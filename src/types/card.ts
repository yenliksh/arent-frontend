import { ApartmentAdStatusType, RentPeriodType, ShortTermRentBookingType } from '__generated__/types';

export interface BaseCardProps {
  pictureSrc: string;
  title: string;
  address?: string;
  price: string;
}

export enum RequestStatusEnum {
  INIT = 'INIT',
  SENDED = 'SENDED',
  APPROVED = 'APPROVED',
  PAUSED = 'PAUSED',
}

// TODO: remove in future
export enum CardStatusEnum {
  ACTIVE = 'ACTIVE',
  PUBLISHED = 'PUBLISHED',
  PROCESSING = 'PROCESSING',
  PAUSED = 'PAUSED',
  DRAFT = 'DRAFT',
}

export interface BaseModalProps {
  close: () => void;
}

export type StatusChangeRentType = RentPeriodType.ShortTerm | RentPeriodType.LongTerm;

export interface BaseMyAdsCardComponentProps {
  status: ApartmentAdStatusType;
  rentType?: StatusChangeRentType;
  confirmData: boolean;
  rentBookingType?: ShortTermRentBookingType | undefined;
  confirmPhone: boolean;
  confirmDocuments: boolean;
  confirmed?: boolean;
  payMethod: string;
  id?: string;
  currentStep?: number;
  declineReason?: string;
}

// TODO:L remove in future
export enum RentTypeEnum {
  SHORT = 'SHORT',
  LONG = 'LONG',
}
