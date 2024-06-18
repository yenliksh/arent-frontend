export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AcceptContractOfferRequest = {
  cardId: Scalars['String'];
  chatId: Scalars['String'];
};

export type AcceptRequest = {
  contractRequestId: Scalars['String'];
};

export enum AdComplaintType {
  ObsceneContent = 'OBSCENE_CONTENT',
  Other = 'OTHER',
  ThereIsAnErrorInTheAd = 'THERE_IS_AN_ERROR_IN_THE_AD',
  ThisIsAFraud = 'THIS_IS_A_FRAUD',
  ThisPlaceDoesNotExist = 'THIS_PLACE_DOES_NOT_EXIST',
}

export type AddApartmentAdOwnershipDocumentRequest = {
  /** apartmentId */
  id: Scalars['String'];
  ownershipDocuments: Array<Scalars['String']>;
};

export type AddApartmentAdPaymentMethodRequest = {
  cardId: Scalars['String'];
  /** apartmentId */
  id: Scalars['String'];
};

export type ApartmentAdAddressModel = {
  __typename?: 'ApartmentAdAddressModel';
  city: Scalars['String'];
  country: Scalars['String'];
  houseNumber: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
};

export type ApartmentAdCharacteristicsModel = {
  __typename?: 'ApartmentAdCharacteristicsModel';
  ceilingHeight?: Maybe<Scalars['Float']>;
  electricitySupply?: Maybe<Scalars['String']>;
  floor?: Maybe<Scalars['Float']>;
  gas?: Maybe<Scalars['Boolean']>;
  gasSupply?: Maybe<Scalars['String']>;
  heating?: Maybe<Scalars['Boolean']>;
  landArea?: Maybe<Scalars['Float']>;
  light?: Maybe<Scalars['Boolean']>;
  objectArea?: Maybe<Scalars['Float']>;
  objectPlacement?: Maybe<Scalars['String']>;
  sewerage?: Maybe<Scalars['Boolean']>;
  territoryArea?: Maybe<Scalars['Float']>;
  totalArea?: Maybe<Scalars['Float']>;
  ventilation?: Maybe<Scalars['Boolean']>;
  water?: Maybe<Scalars['Boolean']>;
  waterSupply?: Maybe<Scalars['String']>;
  yearOfConstruction?: Maybe<Scalars['Float']>;
};

export type ApartmentAdClusterInfoModel = {
  __typename?: 'ApartmentAdClusterInfoModel';
  totalItems: Scalars['Int'];
};

export type ApartmentAdClusterModel = {
  __typename?: 'ApartmentAdClusterModel';
  apartmentType: ApartmentType;
  cost: Scalars['String'];
  /** does not need specify in MPV */
  currency: Currency;
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  photo: Scalars['String'];
  title: Scalars['String'];
};

export type ApartmentAdComplaintResponse = {
  __typename?: 'ApartmentAdComplaintResponse';
  ok: Scalars['Boolean'];
};

export type ApartmentAdDescriptionModel = {
  __typename?: 'ApartmentAdDescriptionModel';
  description?: Maybe<Scalars['String']>;
  forFamily?: Maybe<Scalars['Boolean']>;
  freeParking?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  quite?: Maybe<Scalars['Boolean']>;
  remoteView?: Maybe<Scalars['Boolean']>;
  selfCheckIn?: Maybe<Scalars['Boolean']>;
  workSpace?: Maybe<Scalars['Boolean']>;
};

export type ApartmentAdDetailsModel = {
  __typename?: 'ApartmentAdDetailsModel';
  numberOfGuests: Scalars['Int'];
  numberOfRooms: Scalars['Int'];
};

export type ApartmentAdIdentificatorResponse = {
  __typename?: 'ApartmentAdIdentificatorResponse';
  apartmentId: Scalars['String'];
  descriptionSeo: Scalars['String'];
  keywordsSeo: Scalars['String'];
  titleSeo: Scalars['String'];
};

export type ApartmentAdIdsModel = {
  __typename?: 'ApartmentAdIdsModel';
  longTermRentId?: Maybe<Scalars['String']>;
  shortTermRentId?: Maybe<Scalars['String']>;
};

export type ApartmentAdLockedDatesModel = {
  __typename?: 'ApartmentAdLockedDatesModel';
  endDate: Scalars['String'];
  startDate: Scalars['String'];
};

export type ApartmentAdLongTermRentModel = {
  __typename?: 'ApartmentAdLongTermRentModel';
  apartmentAd: ApartmentAdModel;
  apartmentAdId: Scalars['String'];
  cancellationPolicy?: Maybe<LongTermRentCancellationPolicyType>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  /** does not need specify in MPV */
  currency: Currency;
  declineReason?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isApproved: Scalars['Boolean'];
  ownershipDocuments?: Maybe<Array<Scalars['String']>>;
  status: Array<ApartmentAdStatusType>;
  updatedAt: Scalars['String'];
};

export type ApartmentAdLongTermRentViewModel = {
  __typename?: 'ApartmentAdLongTermRentViewModel';
  apartmentAd: ApartmentAdViewModel;
  apartmentAdId: Scalars['String'];
  cancellationPolicy?: Maybe<LongTermRentCancellationPolicyType>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  /** does not need specify in MPV */
  currency: Currency;
  declineReason?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isApproved: Scalars['Boolean'];
  status: Array<ApartmentAdStatusType>;
  updatedAt: Scalars['String'];
};

export type ApartmentAdMediaModel = {
  __typename?: 'ApartmentAdMediaModel';
  fileKey: Scalars['String'];
  order: Scalars['Float'];
};

export type ApartmentAdModel = {
  __typename?: 'ApartmentAdModel';
  adCharacteristics?: Maybe<ApartmentAdCharacteristicsModel>;
  adDescription?: Maybe<ApartmentAdDescriptionModel>;
  address?: Maybe<ApartmentAdAddressModel>;
  apartmentCategory: ApartmentCategory;
  apartmentType: ApartmentType;
  characteristics?: Maybe<ApartmentAdCharacteristicsModel>;
  completeStep: Scalars['Int'];
  createdAt: Scalars['String'];
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  deletedAt?: Maybe<Scalars['String']>;
  description?: Maybe<ApartmentAdDescriptionModel>;
  details?: Maybe<ApartmentAdDetailsModel>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  innopayCardId?: Maybe<Scalars['String']>;
  landlord: UserMeModel;
  landlordId: Scalars['String'];
  longTermRent?: Maybe<ApartmentAdLongTermRentModel>;
  photos: Array<ApartmentAdMediaModel>;
  rentPeriodType: RentPeriodType;
  rules?: Maybe<ApartmentAdRulesModel>;
  shortTermRent?: Maybe<ApartmentAdShortTermRentModel>;
  updatedAt: Scalars['String'];
  videos: Array<ApartmentAdMediaModel>;
};

export type ApartmentAdResponse = {
  __typename?: 'ApartmentAdResponse';
  apartmentAd: ApartmentAdModel;
};

export type ApartmentAdRulesModel = {
  __typename?: 'ApartmentAdRulesModel';
  allowedToHangingOut: Scalars['Boolean'];
  allowedToSmoke: Scalars['Boolean'];
  allowedWithChildren: Scalars['Boolean'];
  allowedWithPets: Scalars['Boolean'];
};

export type ApartmentAdShortTermRentModel = {
  __typename?: 'ApartmentAdShortTermRentModel';
  apartmentAd: ApartmentAdModel;
  apartmentAdId: Scalars['String'];
  arrivalTime?: Maybe<Scalars['String']>;
  bookingAccessInMonths?: Maybe<Scalars['Int']>;
  cancellationPolicy?: Maybe<ShortTermRentCancellationPolicyType>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  /** does not need specify in MPV */
  currency: Currency;
  declineReason?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isApproved: Scalars['Boolean'];
  lockedDates: Array<ApartmentAdLockedDatesModel>;
  rentBookingType: ShortTermRentBookingType;
  status: Array<ApartmentAdStatusType>;
  updatedAt: Scalars['String'];
};

export type ApartmentAdShortTermRentViewModel = {
  __typename?: 'ApartmentAdShortTermRentViewModel';
  apartmentAd: ApartmentAdViewModel;
  apartmentAdId: Scalars['String'];
  arrivalTime?: Maybe<Scalars['String']>;
  bookingAccessInMonths?: Maybe<Scalars['Int']>;
  cancellationPolicy?: Maybe<ShortTermRentCancellationPolicyType>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  /** does not need specify in MPV */
  currency: Currency;
  declineReason?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isApproved: Scalars['Boolean'];
  lockedDates: Array<ApartmentAdLockedDatesModel>;
  rentBookingType: ShortTermRentBookingType;
  status: Array<ApartmentAdStatusType>;
  updatedAt: Scalars['String'];
};

export type ApartmentAdSlugResponse = {
  __typename?: 'ApartmentAdSlugResponse';
  adSearchId: Scalars['Float'];
  titleSeo: Scalars['String'];
};

export enum ApartmentAdStatusType {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Paused = 'PAUSED',
  Processing = 'PROCESSING',
  Published = 'PUBLISHED',
}

export type ApartmentAdTimeIntervalModel = {
  __typename?: 'ApartmentAdTimeIntervalModel';
  days?: Maybe<Scalars['Float']>;
  hours?: Maybe<Scalars['Float']>;
  milliseconds?: Maybe<Scalars['Float']>;
  minutes?: Maybe<Scalars['Float']>;
  seconds?: Maybe<Scalars['Float']>;
};

export type ApartmentAdViewModel = {
  __typename?: 'ApartmentAdViewModel';
  address?: Maybe<ApartmentAdAddressModel>;
  apartmentCategory: ApartmentCategory;
  apartmentType: ApartmentType;
  characteristics?: Maybe<ApartmentAdCharacteristicsModel>;
  contractRequests?: Maybe<Array<ContractRequestModel>>;
  createdAt: Scalars['String'];
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  deletedAt?: Maybe<Scalars['String']>;
  description?: Maybe<ApartmentAdDescriptionModel>;
  details?: Maybe<ApartmentAdDetailsModel>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  landlord: UserModel;
  landlordId: Scalars['String'];
  longTermRent?: Maybe<ApartmentAdLongTermRentViewModel>;
  photos: Array<ApartmentAdMediaModel>;
  rentPeriodType: RentPeriodType;
  rules?: Maybe<ApartmentAdRulesModel>;
  shortTermRent?: Maybe<ApartmentAdShortTermRentViewModel>;
  updatedAt: Scalars['String'];
  videos: Array<ApartmentAdMediaModel>;
};

export type ApartmentAdsSlugResponse = {
  __typename?: 'ApartmentAdsSlugResponse';
  slugs: Array<SlugModel>;
};

export type ApartmentAdsUnionResponse = {
  __typename?: 'ApartmentAdsUnionResponse';
  apartmentAdLongTermRent: Array<ApartmentAdLongTermRentModel>;
  apartmentAdShortTermRent: Array<ApartmentAdShortTermRentModel>;
};

export enum ApartmentCategory {
  Area = 'AREA',
  Commercial = 'COMMERCIAL',
  Countryhouse = 'COUNTRYHOUSE',
  Flat = 'FLAT',
  Foreign = 'FOREIGN',
  House = 'HOUSE',
  Industrial = 'INDUSTRIAL',
  Otherrealestate = 'OTHERREALESTATE',
}

export type ApartmentGuestsModel = {
  __typename?: 'ApartmentGuestsModel';
  numberOfAdult: Scalars['Int'];
  numberOfChildren: Scalars['Int'];
  numberOfPets: Scalars['Int'];
};

export enum ApartmentRentPeriodType {
  LongTerm = 'LONG_TERM',
  ShortTerm = 'SHORT_TERM',
}

export enum ApartmentRuleType {
  AllowedToHangingOut = 'ALLOWED_TO_HANGING_OUT',
  AllowedToSmoke = 'ALLOWED_TO_SMOKE',
  AllowedWithChildren = 'ALLOWED_WITH_CHILDREN',
  AllowedWithPets = 'ALLOWED_WITH_PETS',
}

export enum ApartmentType {
  Aparthotel = 'APARTHOTEL',
  Beautysaloon = 'BEAUTYSALOON',
  Carservice = 'CARSERVICE',
  Commercial = 'COMMERCIAL',
  Cottage = 'COTTAGE',
  Countryconstruction = 'COUNTRYCONSTRUCTION',
  Factory = 'FACTORY',
  Flat = 'FLAT',
  Freeappointment = 'FREEAPPOINTMENT',
  Guesthouse = 'GUESTHOUSE',
  Hostel = 'HOSTEL',
  Ihc = 'IHC',
  Industrialbase = 'INDUSTRIALBASE',
  Landforgarden = 'LANDFORGARDEN',
  Lgx = 'LGX',
  MiniHotel = 'MINI_HOTEL',
  Office = 'OFFICE',
  Other = 'OTHER',
  Pc = 'PC',
  Publiccatering = 'PUBLICCATERING',
  Room = 'ROOM',
  Shop = 'SHOP',
  Storage = 'STORAGE',
}

export type BaseContractAddressDataModel = {
  __typename?: 'BaseContractAddressDataModel';
  city: Scalars['String'];
  country: Scalars['String'];
  geoPoint: GeoPointModel;
  houseNumber: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  street: Scalars['String'];
};

export type BaseContractApartmentAdDataModel = {
  __typename?: 'BaseContractApartmentAdDataModel';
  address: BaseContractAddressDataModel;
  title: Scalars['String'];
};

export type BaseContractModel = {
  __typename?: 'BaseContractModel';
  apartmentAdId?: Maybe<Scalars['String']>;
  apartmentRentPeriodType: ApartmentRentPeriodType;
  arrivalDate?: Maybe<Scalars['String']>;
  baseApartmentAdData: BaseContractApartmentAdDataModel;
  contractRequestId?: Maybe<Scalars['String']>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  currency: Currency;
  deletedAt?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  guests: ApartmentGuestsModel;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isPending: Scalars['Boolean'];
  isTemporary: Scalars['Boolean'];
  landlordId?: Maybe<Scalars['String']>;
  longTermRentCancellationPolicyType?: Maybe<LongTermRentCancellationPolicyType>;
  rules?: Maybe<ContractRulesModel>;
  shortTermRentCancellationPolicyType?: Maybe<ShortTermRentCancellationPolicyType>;
  status: ContractStatus;
  tenantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type BaseOffsetPaginationInfoModel = {
  __typename?: 'BaseOffsetPaginationInfoModel';
  currentPage: Scalars['Int'];
  limit: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type BaseOffsetPaginationRequest = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type BasePriceInfoModel = {
  __typename?: 'BasePriceInfoModel';
  max: Scalars['String'];
  min: Scalars['String'];
};

export type CancelContractByTenantRequest = {
  contractId: Scalars['String'];
  /** new departure date */
  departureDate?: InputMaybe<Scalars['String']>;
};

export type CardMetaModel = {
  __typename?: 'CardMetaModel';
  cardHolder: Scalars['String'];
  cardType: Scalars['String'];
  id: Scalars['String'];
  panMasked: Scalars['String'];
  paymentMethod: PaymentMethod;
};

export type ChangeTenantPaymentMethodRequest = {
  cardId: Scalars['String'];
  contractId: Scalars['String'];
};

export type ChatIsNotActiveProblem = {
  __typename?: 'ChatIsNotActiveProblem';
  message: Scalars['String'];
};

export type ChatMessagesRequest = {
  beforeCursor?: InputMaybe<Scalars['String']>;
  chatId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};

export type ChatModel = {
  __typename?: 'ChatModel';
  apartmentAdIds: ApartmentAdIdsModel;
  apartmentAdPhotos?: Maybe<Array<ApartmentAdMediaModel>>;
  contract: ContractChatModel;
  contractId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastMessage?: Maybe<MessageModel>;
  lastOfferMessageId?: Maybe<Scalars['String']>;
  members: Array<UserModel>;
  unreadMessageCount: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type ChatPaginationResponse = {
  __typename?: 'ChatPaginationResponse';
  data?: Maybe<Array<ChatModel>>;
  isChatsExist: Scalars['Boolean'];
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type ChosenDatesIsNotAvailableProblem = {
  __typename?: 'ChosenDatesIsNotAvailableProblem';
  message: Scalars['String'];
};

export type ContractCancelationModel = {
  __typename?: 'ContractCancelationModel';
  cancelationDate: Scalars['String'];
  checkOutDate: Scalars['String'];
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  contractId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  refundsAmountToSenderCost: Scalars['String'];
  refundsAmountToSenderCurrency: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ContractChatModel = {
  __typename?: 'ContractChatModel';
  apartmentAd?: Maybe<ApartmentAdViewModel>;
  apartmentAdId?: Maybe<Scalars['String']>;
  apartmentRentPeriodType: ApartmentRentPeriodType;
  arrivalDate?: Maybe<Scalars['String']>;
  baseApartmentAdData: BaseContractApartmentAdDataModel;
  contractRequestId?: Maybe<Scalars['String']>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  currency: Currency;
  deletedAt?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  guests: ApartmentGuestsModel;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  /** for tenant only */
  innopayPaymentPageModel?: Maybe<InnopayPaymentPageModel>;
  isPending: Scalars['Boolean'];
  isTemporary: Scalars['Boolean'];
  landlord?: Maybe<UserModel>;
  landlordId?: Maybe<Scalars['String']>;
  longTermRentCancellationPolicyType?: Maybe<LongTermRentCancellationPolicyType>;
  rules?: Maybe<ContractRulesModel>;
  shortTermRentCancellationPolicyType?: Maybe<ShortTermRentCancellationPolicyType>;
  status: ContractStatus;
  tenant?: Maybe<UserModel>;
  tenantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ContractLandlordModel = {
  __typename?: 'ContractLandlordModel';
  apartmentAd?: Maybe<ApartmentAdModel>;
  apartmentAdId?: Maybe<Scalars['String']>;
  apartmentRentPeriodType: ApartmentRentPeriodType;
  arrivalDate?: Maybe<Scalars['String']>;
  baseApartmentAdData: BaseContractApartmentAdDataModel;
  contractRequestId?: Maybe<Scalars['String']>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  currency: Currency;
  deletedAt?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  guests: ApartmentGuestsModel;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isPending: Scalars['Boolean'];
  isTemporary: Scalars['Boolean'];
  landlord?: Maybe<UserMeModel>;
  landlordId?: Maybe<Scalars['String']>;
  longTermRentCancellationPolicyType?: Maybe<LongTermRentCancellationPolicyType>;
  nextPayment?: Maybe<NextPaymentInfoModel>;
  nextPaymentTransactionId?: Maybe<Scalars['String']>;
  rules?: Maybe<ContractRulesModel>;
  shortTermRentCancellationPolicyType?: Maybe<ShortTermRentCancellationPolicyType>;
  status: ContractStatus;
  tenant?: Maybe<UserModel>;
  tenantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ContractOfferAlreadyExistsProblem = {
  __typename?: 'ContractOfferAlreadyExistsProblem';
  message: Scalars['String'];
};

export enum ContractPaymentStatusType {
  Canceled = 'CANCELED',
  Recurring = 'RECURRING',
  RecurringCompleted = 'RECURRING_COMPLETED',
  Refund = 'REFUND',
  ShortFull = 'SHORT_FULL',
  ShortPartial = 'SHORT_PARTIAL',
}

export enum ContractPubSubEvent {
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export enum ContractRentStatus {
  Completed = 'COMPLETED',
  Concluded = 'CONCLUDED',
}

export type ContractRequestAcceptResponse = {
  __typename?: 'ContractRequestAcceptResponse';
  chatId?: Maybe<Scalars['String']>;
  contractRequest?: Maybe<ContractRequestModel>;
  problem?: Maybe<ContractRequestAlreadyExistsProblem>;
};

export type ContractRequestAlreadyExistsProblem = {
  __typename?: 'ContractRequestAlreadyExistsProblem';
  message: Scalars['String'];
};

export type ContractRequestModel = {
  __typename?: 'ContractRequestModel';
  apartmentAd: ApartmentAdViewModel;
  apartmentAdId?: Maybe<Scalars['String']>;
  apartmentRentPeriodType: ApartmentRentPeriodType;
  arrivalDate?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  contract?: Maybe<BaseContractModel>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  guests: ApartmentGuestsModel;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  rejectReason?: Maybe<Scalars['String']>;
  status: ContractRequestStatus;
  tenant: UserModel;
  tenantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ContractRequestPaginationResponse = {
  __typename?: 'ContractRequestPaginationResponse';
  data?: Maybe<Array<ContractRequestModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type ContractRequestProblems =
  | ChosenDatesIsNotAvailableProblem
  | ContractRequestAlreadyExistsProblem
  | ReduceTheNumberOfGuestsProblem
  | SpecifyPaymentMethodProblem;

export type ContractRequestResponse = {
  __typename?: 'ContractRequestResponse';
  contractRequest?: Maybe<ContractRequestModel>;
  problem?: Maybe<ContractRequestProblems>;
};

export enum ContractRequestStatus {
  Accepted = 'ACCEPTED',
  Created = 'CREATED',
  Rejected = 'REJECTED',
}

export type ContractResponse = {
  __typename?: 'ContractResponse';
  contract?: Maybe<ContractChatModel>;
  problem?: Maybe<ContractOfferAlreadyExistsProblem>;
};

export type ContractRulesModel = {
  __typename?: 'ContractRulesModel';
  allowedToHangingOut: Scalars['Boolean'];
  allowedToSmoke: Scalars['Boolean'];
  allowedWithChildren: Scalars['Boolean'];
  allowedWithPets: Scalars['Boolean'];
};

export enum ContractStatus {
  Completed = 'COMPLETED',
  Concluded = 'CONCLUDED',
  Created = 'CREATED',
  Offering = 'OFFERING',
  Rejected = 'REJECTED',
}

export type ContractSubscriptionResponse = {
  __typename?: 'ContractSubscriptionResponse';
  contract?: Maybe<ContractChatModel>;
  error?: Maybe<Scalars['String']>;
  event: ContractPubSubEvent;
};

export type ContractTemporaryConcludeRequest = {
  chatId: Scalars['String'];
};

export type ContractTemporaryInstantConcludeRequest = {
  apartmentAdId: Scalars['String'];
  arrivalDate: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  departureDate: Scalars['String'];
  guests: GuestsInput;
  rentPaymentType: ShortTermRentPaymentType;
};

export type ContractTenantModel = {
  __typename?: 'ContractTenantModel';
  apartmentAd?: Maybe<ApartmentAdViewModel>;
  apartmentAdId?: Maybe<Scalars['String']>;
  apartmentRentPeriodType: ApartmentRentPeriodType;
  arrivalDate?: Maybe<Scalars['String']>;
  baseApartmentAdData: BaseContractApartmentAdDataModel;
  contractCancelation?: Maybe<ContractCancelationModel>;
  contractRequestId?: Maybe<Scalars['String']>;
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  currency: Currency;
  deletedAt?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  guests: ApartmentGuestsModel;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  innopayCard?: Maybe<InnopayCardModel>;
  innopayCardId?: Maybe<Scalars['String']>;
  isPending: Scalars['Boolean'];
  isTemporary: Scalars['Boolean'];
  landlord?: Maybe<UserModel>;
  landlordId?: Maybe<Scalars['String']>;
  longTermRentCancellationPolicyType?: Maybe<LongTermRentCancellationPolicyType>;
  nextPayment?: Maybe<NextPaymentInfoModel>;
  nextPaymentTransactionId?: Maybe<Scalars['String']>;
  rules?: Maybe<ContractRulesModel>;
  shortTermRentCancellationPolicyType?: Maybe<ShortTermRentCancellationPolicyType>;
  status: ContractStatus;
  tenant?: Maybe<UserMeModel>;
  tenantId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type CreateApartmentAdComplaintRequest = {
  /** apartmentAdId */
  apartmentAdId: Scalars['String'];
  /** complaintType */
  cause: Array<AdComplaintType>;
  /** reason */
  reason?: InputMaybe<Scalars['String']>;
};

export type CreateApartmentAdIdentificatorRequest = {
  /** uid */
  apartmentId: Scalars['String'];
  /** titleSeo */
  titleSeo: Scalars['String'];
};

export type CreateApartmentAdRequest = {
  longTermRentCost?: InputMaybe<Scalars['String']>;
  rentPeriodType: RentPeriodType;
  shortTermRentCost?: InputMaybe<Scalars['String']>;
};

export type CreateUserComplaintRequest = {
  /** complaintType */
  cause: Array<UserComplaintType>;
  /** reason */
  reason?: InputMaybe<Scalars['String']>;
  /** recipientUserId */
  recipientUserId: Scalars['String'];
};

export enum Currency {
  Kzt = 'KZT',
  Rub = 'RUB',
  Usd = 'USD',
}

export type DateRangeInput = {
  /** must be date ex. YYYY-MM-DD */
  endDate?: InputMaybe<Scalars['String']>;
  /** must be date ex. YYYY-MM-DD */
  startDate?: InputMaybe<Scalars['String']>;
};

export type DeleteApartmentAdRequest = {
  /** apartmentId */
  id: Scalars['String'];
};

export type DeleteCardRequest = {
  cardId: Scalars['String'];
};

export type DeletingCardIsActiveProblem = {
  __typename?: 'DeletingCardIsActiveProblem';
  message: Scalars['String'];
};

export type EditApartmentAdAddressRequest = {
  city: Scalars['String'];
  country: Scalars['String'];
  houseNumber: Scalars['String'];
  /** apartmentId */
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  region?: InputMaybe<Scalars['String']>;
  street: Scalars['String'];
};

export type EditApartmentAdDescriptionRequest = {
  description: Scalars['String'];
  forFamily: Scalars['Boolean'];
  freeParking: Scalars['Boolean'];
  /** apartmentId */
  id: Scalars['String'];
  name: Scalars['String'];
  quite: Scalars['Boolean'];
  remoteView: Scalars['Boolean'];
  selfCheckIn: Scalars['Boolean'];
  workSpace: Scalars['Boolean'];
};

export type EditApartmentAdDetailsRequest = {
  ceilingHeight?: InputMaybe<Scalars['Int']>;
  communications?: InputMaybe<Array<Scalars['String']>>;
  electricitySupply?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['Int']>;
  gasSupply?: InputMaybe<Scalars['String']>;
  /** apartmentId */
  id: Scalars['String'];
  landArea?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfGuests: Scalars['Int'];
  /** 0 equal studio apartment, 8 mean 8+ number of rooms */
  numberOfRooms: Scalars['Int'];
  objectArea?: InputMaybe<Scalars['Int']>;
  objectPlacement?: InputMaybe<Scalars['String']>;
  territoryArea?: InputMaybe<Scalars['Int']>;
  totalArea?: InputMaybe<Scalars['Int']>;
  waterSupply?: InputMaybe<Scalars['String']>;
  yearOfConstruction?: InputMaybe<Scalars['Int']>;
};

export type EditApartmentAdImportantInfoRequest = {
  allowedToHangingOut: Scalars['Boolean'];
  allowedToSmoke: Scalars['Boolean'];
  allowedWithChildren: Scalars['Boolean'];
  allowedWithPets: Scalars['Boolean'];
  /** only for short term rent period or all types */
  arrivalTime?: InputMaybe<Scalars['String']>;
  /** only for short term rent period or all types */
  cancellationPolicy?: InputMaybe<ShortTermRentCancellationPolicyType>;
  /** only for short term rent period or all types */
  departureTime?: InputMaybe<Scalars['String']>;
  /** apartmentId */
  id: Scalars['String'];
  /** only for short term rent period or all types */
  rentBookingType?: InputMaybe<ShortTermRentBookingType>;
};

export type EditApartmentAdMediaRequest = {
  /** apartmentId */
  id: Scalars['String'];
  photos: Array<Scalars['String']>;
};

export type EditApartmentAdRequest = {
  /** apartmentId */
  id: Scalars['String'];
  longTermRentCost?: InputMaybe<Scalars['String']>;
  rentPeriodType: RentPeriodType;
  shortTermRentCost?: InputMaybe<Scalars['String']>;
};

export type EditApartmentAdTypeRequest = {
  apartmentCategory: ApartmentCategory;
  apartmentType?: InputMaybe<ApartmentType>;
  /** apartmentId */
  id: Scalars['String'];
};

export type EditShortTermRentAvailabilitySettingsRequest = {
  bookingAccessInMonths: Scalars['Int'];
  /** apartmentId */
  id: Scalars['String'];
  lockedDates: Array<LockedDateInput>;
};

export type EmailAlreadyUsedProblem = {
  __typename?: 'EmailAlreadyUsedProblem';
  message: Scalars['String'];
};

export type FindApartmentAdIdentificatorRequest = {
  /** id */
  id: Scalars['String'];
};

export type FindApartmentAdsIdentificatorsRequest = {
  /** id */
  ids: Array<Scalars['String']>;
};

export type FindChatRequest = {
  /** chatId */
  id: Scalars['String'];
};

export type FindContractRequest = {
  /** contractId */
  id: Scalars['String'];
};

export type FindContractRequestForLandlordRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  type: ApartmentRentPeriodType;
};

export type FindLongTermRentAdRequest = {
  /** long term rent id */
  id: Scalars['String'];
};

export type FindLongTermRentAdResponse = {
  __typename?: 'FindLongTermRentAdResponse';
  averageResponseOnRequest?: Maybe<ApartmentAdTimeIntervalModel>;
  data: ApartmentAdLongTermRentViewModel;
};

export type FindLongTermRentAdsClusterResponse = {
  __typename?: 'FindLongTermRentAdsClusterResponse';
  clusterInfo: ApartmentAdClusterInfoModel;
  data: Array<ApartmentAdClusterModel>;
  slugs: Array<SlugModel>;
};

export type FindLongTermRentAdsFilterRequest = {
  apartmentCategory?: InputMaybe<ApartmentCategory>;
  apartmentTypes?: InputMaybe<Array<ApartmentType>>;
  ceilingHeight?: InputMaybe<Scalars['Int']>;
  communications?: InputMaybe<Array<Scalars['String']>>;
  electricitySupply?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['Int']>;
  gasSupply?: InputMaybe<Scalars['String']>;
  landArea?: InputMaybe<Scalars['Int']>;
  location: LocationInput;
  numberOfAdults?: InputMaybe<Scalars['Int']>;
  numberOfChild?: InputMaybe<Scalars['Int']>;
  numberOfPets?: InputMaybe<Scalars['Int']>;
  /** 0 equal studio apartment, 8 mean 8+ number of rooms */
  numberOfRooms?: InputMaybe<Array<Scalars['Int']>>;
  objectArea?: InputMaybe<Scalars['Int']>;
  objectPlacement?: InputMaybe<Scalars['String']>;
  priceRange?: InputMaybe<PriceRangeInput>;
  rules?: InputMaybe<Array<ApartmentRuleType>>;
  territoryArea?: InputMaybe<Scalars['Int']>;
  totalArea?: InputMaybe<Scalars['Int']>;
  waterSupply?: InputMaybe<Scalars['String']>;
  yearOfConstruction?: InputMaybe<Scalars['Int']>;
};

export type FindLongTermRentAdsResponse = {
  __typename?: 'FindLongTermRentAdsResponse';
  data?: Maybe<Array<ApartmentAdLongTermRentViewModel>>;
  pageInfo?: Maybe<BaseOffsetPaginationInfoModel>;
  priceInfo: BasePriceInfoModel;
  slugs: Array<SlugModel>;
};

export type FindMyCardsRequest = {
  /** choose card type */
  type: InnopayAppointmentCardType;
};

export type FindShortTermRentAdRequest = {
  /** short term rent id */
  id: Scalars['String'];
};

export type FindShortTermRentAdResponse = {
  __typename?: 'FindShortTermRentAdResponse';
  averageResponseOnRequest?: Maybe<ApartmentAdTimeIntervalModel>;
  data: ApartmentAdShortTermRentViewModel;
};

export type FindShortTermRentAdsClusterResponse = {
  __typename?: 'FindShortTermRentAdsClusterResponse';
  clusterInfo: ApartmentAdClusterInfoModel;
  data: Array<ApartmentAdClusterModel>;
  slugs: Array<SlugModel>;
};

export type FindShortTermRentAdsFilterRequest = {
  apartmentCategory?: InputMaybe<ApartmentCategory>;
  apartmentTypes?: InputMaybe<Array<ApartmentType>>;
  arrivalTimeEnd?: InputMaybe<Scalars['String']>;
  arrivalTimeStart?: InputMaybe<Scalars['String']>;
  cancellationPolicyType?: InputMaybe<ShortTermRentCancellationPolicyType>;
  ceilingHeight?: InputMaybe<Scalars['Int']>;
  communications?: InputMaybe<Array<Scalars['String']>>;
  dateRange?: InputMaybe<DateRangeInput>;
  departureTimeEnd?: InputMaybe<Scalars['String']>;
  departureTimeStart?: InputMaybe<Scalars['String']>;
  electricitySupply?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['Int']>;
  gasSupply?: InputMaybe<Scalars['String']>;
  landArea?: InputMaybe<Scalars['Int']>;
  location: LocationInput;
  numberOfAdults?: InputMaybe<Scalars['Int']>;
  numberOfChild?: InputMaybe<Scalars['Int']>;
  numberOfPets?: InputMaybe<Scalars['Int']>;
  /** 0 equal studio apartment, 8 mean 8+ number of rooms */
  numberOfRooms?: InputMaybe<Array<Scalars['Int']>>;
  objectArea?: InputMaybe<Scalars['Int']>;
  objectPlacement?: InputMaybe<Scalars['String']>;
  priceRange?: InputMaybe<PriceRangeInput>;
  rentBookingType?: InputMaybe<ShortTermRentBookingType>;
  rules?: InputMaybe<Array<ApartmentRuleType>>;
  territoryArea?: InputMaybe<Scalars['Int']>;
  totalArea?: InputMaybe<Scalars['Int']>;
  waterSupply?: InputMaybe<Scalars['String']>;
  yearOfConstruction?: InputMaybe<Scalars['Int']>;
};

export type FindShortTermRentAdsResponse = {
  __typename?: 'FindShortTermRentAdsResponse';
  data?: Maybe<Array<ApartmentAdShortTermRentViewModel>>;
  pageInfo?: Maybe<BaseOffsetPaginationInfoModel>;
  priceInfo: BasePriceInfoModel;
  slugs: Array<SlugModel>;
};

export enum GenderType {
  Female = 'FEMALE',
  Male = 'MALE',
}

export type GeoPointModel = {
  __typename?: 'GeoPointModel';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type GuarantorModel = {
  __typename?: 'GuarantorModel';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
};

export type GuestsInput = {
  numberOfAdult: Scalars['Int'];
  numberOfChildren: Scalars['Int'];
  numberOfPets: Scalars['Int'];
};

export enum IdentityStatusType {
  Approved = 'APPROVED',
  NotConfirmed = 'NOT_CONFIRMED',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED',
}

export enum InnopayAppointmentCardType {
  ChargeOff = 'CHARGE_OFF',
  Crediting = 'CREDITING',
}

export type InnopayBadRequestAndDeletingCardIsActiveProblem =
  | DeletingCardIsActiveProblem
  | InnopayServiceBadRequestProblem;

export type InnopayCardModel = {
  __typename?: 'InnopayCardModel';
  appointmentType: InnopayAppointmentCardType;
  cardType: InnopayCardType;
  cnpCardId: Scalars['Float'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  panMasked: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type InnopayCardResponse = {
  __typename?: 'InnopayCardResponse';
  ok: Scalars['Boolean'];
  problem?: Maybe<InnopayBadRequestAndDeletingCardIsActiveProblem>;
};

export enum InnopayCardType {
  Mastercard = 'MASTERCARD',
  Visa = 'VISA',
}

export type InnopayPageUrlSubscriptionResponse = {
  __typename?: 'InnopayPageUrlSubscriptionResponse';
  contractId?: Maybe<Scalars['String']>;
  startUrlDate: Scalars['String'];
  url: Scalars['String'];
};

export type InnopayPaymentPageModel = {
  __typename?: 'InnopayPaymentPageModel';
  startAt: Scalars['String'];
  url: Scalars['String'];
};

export type InnopayServiceBadRequestProblem = {
  __typename?: 'InnopayServiceBadRequestProblem';
  message: Scalars['String'];
};

export type InvalidVerificationPhoneCodeProblem = {
  __typename?: 'InvalidVerificationPhoneCodeProblem';
  message: Scalars['String'];
};

export type LocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  radiusInKm: Scalars['Float'];
};

export type LockedDateInput = {
  /** iso date ex. YYYY-MM-DD */
  endDate: Scalars['String'];
  /** iso date ex. YYYY-MM-DD */
  startDate: Scalars['String'];
};

export enum LongPeriodTenantCheckOutCancelationType {
  AllowedRefund = 'ALLOWED_REFUND',
  CancelationByAdmin = 'CANCELATION_BY_ADMIN',
  CheckOutGreaterThanThirtyDaysNotice = 'CHECK_OUT_GREATER_THAN_THIRTY_DAYS_NOTICE',
  CheckOutLessThanThirtyDaysNotice = 'CHECK_OUT_LESS_THAN_THIRTY_DAYS_NOTICE',
  NotAllowedRefund = 'NOT_ALLOWED_REFUND',
  PartialRefund = 'PARTIAL_REFUND',
  RefundBeforeThirtyDaysArrival = 'REFUND_BEFORE_THIRTY_DAYS_ARRIVAL',
}

export enum LongTermRentCancellationPolicyType {
  Forfeit = 'FORFEIT',
}

export type LongTermRentIsRentedProblem = {
  __typename?: 'LongTermRentIsRentedProblem';
  message: Scalars['String'];
};

export type MarkMessageAsReadRequest = {
  id: Scalars['String'];
};

export type MessageModel = {
  __typename?: 'MessageModel';
  chatId: Scalars['String'];
  contractData?: Maybe<SystemMessageDataModel>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  mediaName?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWeight?: Maybe<Scalars['Float']>;
  sender?: Maybe<UserModel>;
  senderId?: Maybe<Scalars['String']>;
  status: MessageStatus;
  systemMessageType?: Maybe<SystemMessageType>;
  text?: Maybe<Scalars['String']>;
  transactionsMeta: Array<TransactionMetaModel>;
  type: MessageType;
  updatedAt: Scalars['String'];
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  data?: Maybe<Array<MessageModel>>;
  pageInfo?: Maybe<PageBeforeCursorInfo>;
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message?: Maybe<MessageModel>;
  problem?: Maybe<ChatIsNotActiveProblem>;
};

export enum MessageStatus {
  Failed = 'FAILED',
  Sent = 'SENT',
  Waiting = 'WAITING',
}

export enum MessageType {
  Media = 'MEDIA',
  System = 'SYSTEM',
  Text = 'TEXT',
}

export type Mutation = {
  __typename?: 'Mutation';
  contractInstantBooking__byNewCard: ContractResponse;
  contractOfferStatus__sendEmail: SendContractOfferStatusEmailResponse;
  contractOffer__accept: ContractResponse;
  contractOffer__acceptByNewCard: ContractResponse;
  contractOffer__reject: ContractResponse;
  contractOffer__send: ContractResponse;
  contractOffer__sendEmail: SendContractOfferEmailResponse;
  contractTenantPaymentMethod__change: InnopayCardModel;
  contractTenant__cancel: ContractResponse;
  contract_requestStatus__sendEmail: SendBookingRequestStatusEmailResponse;
  contract_request__accept: ContractRequestAcceptResponse;
  contract_request__reject: ContractRequestResponse;
  contract_request__send: ContractRequestResponse;
  contract_request__sendEmail: SendRequestEmailResponse;
  innopay_card__delete: InnopayCardResponse;
  innopay_card__save: SaveCardStartResponse;
  message__mark_as_read: Scalars['Boolean'];
  message__send: MessageResponse;
  paymentTransaction__tenant_manuallyPay: PaymentTransactionResponse;
  rentAdIdentificator__create: ApartmentAdIdentificatorResponse;
  rentAd__add_ownershipDocs: ApartmentAdResponse;
  rentAd__add_paymentMethod: ApartmentAdResponse;
  rentAd__create: ApartmentAdResponse;
  rentAd__delete: Scalars['Boolean'];
  rentAd__edit: ApartmentAdResponse;
  rentAd__edit_address: ApartmentAdResponse;
  /** These settings only affect short-term rental ads */
  rentAd__edit_availabilitySettings: ApartmentAdResponse;
  rentAd__edit_description: ApartmentAdResponse;
  rentAd__edit_details: ApartmentAdResponse;
  rentAd__edit_importantInfo: ApartmentAdResponse;
  rentAd__edit_media: ApartmentAdResponse;
  rentAd__edit_type: ApartmentAdResponse;
  rentAd__pause: ApartmentAdResponse;
  rentAd__publish: PublishApartmentAdResponse;
  rentAd__send_to_approve: ApartmentAdResponse;
  rentAd__shortTerm_switchRentBookingType: ApartmentAdResponse;
  rent_ad_complaint__send: ApartmentAdComplaintResponse;
  user__profile_addIdentityDocuments: ProfileResponse;
  user__profile_deleteAvatar: ProfileResponse;
  user__profile_deleteGuarantor: ProfileResponse;
  user__profile_editAvatar: ProfileResponse;
  user__profile_editEmail: ProfileEditEmailResponse;
  user__profile_editGuarantor: ProfileResponse;
  user__profile_editPersonalInfo: ProfileResponse;
  user__profile_verificationEmailConfirm: ProfileResponse;
  user__profile_verificationEmailSend: ProfileConfirmVerificationEmailResponse;
  /** Auth user by google, if user not registered yet, it does it */
  user__signInByGoogle_verifyToken: SignInByGoogleResponse;
  /** if token returns without user that mean that user is not exist, therefore user must be created through createUser */
  user__signInByPhone_confirmCode: SignInByPhoneConfirmCodeResponse;
  /** send code to mobile phone, in development mode code will returns in response */
  user__signInByPhone_sendCode: SignInByPhoneSendCodeResponse;
  user__signUpByPhone_createUser: SignUpByPhoneCreateUserResponse;
  user_complaint__send: UserComplaintResponse;
};

export type MutationContractInstantBooking__ByNewCardArgs = {
  input: ContractTemporaryInstantConcludeRequest;
};

export type MutationContractOfferStatus__SendEmailArgs = {
  input: SendOfferStatusEmail;
};

export type MutationContractOffer__AcceptArgs = {
  input: AcceptContractOfferRequest;
};

export type MutationContractOffer__AcceptByNewCardArgs = {
  input: ContractTemporaryConcludeRequest;
};

export type MutationContractOffer__RejectArgs = {
  input: RejectContractOfferRequest;
};

export type MutationContractOffer__SendArgs = {
  input: SendContractOfferRequest;
};

export type MutationContractOffer__SendEmailArgs = {
  input: SendOfferEmail;
};

export type MutationContractTenantPaymentMethod__ChangeArgs = {
  input: ChangeTenantPaymentMethodRequest;
};

export type MutationContractTenant__CancelArgs = {
  input: CancelContractByTenantRequest;
};

export type MutationContract_RequestStatus__SendEmailArgs = {
  input: SendRequestStatusEmail;
};

export type MutationContract_Request__AcceptArgs = {
  input: AcceptRequest;
};

export type MutationContract_Request__RejectArgs = {
  input: RejectRequest;
};

export type MutationContract_Request__SendArgs = {
  input: SendRequest;
};

export type MutationContract_Request__SendEmailArgs = {
  input: SendRequestEmail;
};

export type MutationInnopay_Card__DeleteArgs = {
  input: DeleteCardRequest;
};

export type MutationMessage__Mark_As_ReadArgs = {
  input: MarkMessageAsReadRequest;
};

export type MutationMessage__SendArgs = {
  input: SendMessageRequest;
};

export type MutationPaymentTransaction__Tenant_ManuallyPayArgs = {
  input: TenantManuallyPayRequest;
};

export type MutationRentAdIdentificator__CreateArgs = {
  input: CreateApartmentAdIdentificatorRequest;
};

export type MutationRentAd__Add_OwnershipDocsArgs = {
  input: AddApartmentAdOwnershipDocumentRequest;
};

export type MutationRentAd__Add_PaymentMethodArgs = {
  input: AddApartmentAdPaymentMethodRequest;
};

export type MutationRentAd__CreateArgs = {
  input: CreateApartmentAdRequest;
};

export type MutationRentAd__DeleteArgs = {
  input: DeleteApartmentAdRequest;
};

export type MutationRentAd__EditArgs = {
  input: EditApartmentAdRequest;
};

export type MutationRentAd__Edit_AddressArgs = {
  input: EditApartmentAdAddressRequest;
};

export type MutationRentAd__Edit_AvailabilitySettingsArgs = {
  input: EditShortTermRentAvailabilitySettingsRequest;
};

export type MutationRentAd__Edit_DescriptionArgs = {
  input: EditApartmentAdDescriptionRequest;
};

export type MutationRentAd__Edit_DetailsArgs = {
  input: EditApartmentAdDetailsRequest;
};

export type MutationRentAd__Edit_ImportantInfoArgs = {
  input: EditApartmentAdImportantInfoRequest;
};

export type MutationRentAd__Edit_MediaArgs = {
  input: EditApartmentAdMediaRequest;
};

export type MutationRentAd__Edit_TypeArgs = {
  input: EditApartmentAdTypeRequest;
};

export type MutationRentAd__PauseArgs = {
  input: PauseApartmentAdRequest;
};

export type MutationRentAd__PublishArgs = {
  input: PublishApartmentAdRequest;
};

export type MutationRentAd__Send_To_ApproveArgs = {
  input: SendToApproveApartmentAdRequest;
};

export type MutationRentAd__ShortTerm_SwitchRentBookingTypeArgs = {
  input: ShortTermSwitchRentBookingTypeRequest;
};

export type MutationRent_Ad_Complaint__SendArgs = {
  input: CreateApartmentAdComplaintRequest;
};

export type MutationUser__Profile_AddIdentityDocumentsArgs = {
  input: ProfileAddIdentityDocumentRequest;
};

export type MutationUser__Profile_EditAvatarArgs = {
  input: ProfileEditAvatarRequest;
};

export type MutationUser__Profile_EditEmailArgs = {
  input: ProfileEditEmailRequest;
};

export type MutationUser__Profile_EditGuarantorArgs = {
  input: ProfileEditGuarantorRequest;
};

export type MutationUser__Profile_EditPersonalInfoArgs = {
  input: ProfileEditPersonalInfoRequest;
};

export type MutationUser__Profile_VerificationEmailConfirmArgs = {
  input: ProfileConfirmVerificationEmailRequest;
};

export type MutationUser__SignInByGoogle_VerifyTokenArgs = {
  input: SignInByGoogleRequest;
};

export type MutationUser__SignInByPhone_ConfirmCodeArgs = {
  input: SignInByPhoneConfirmCodeRequest;
};

export type MutationUser__SignInByPhone_SendCodeArgs = {
  input: SignInByPhoneSendCodeRequest;
};

export type MutationUser__SignUpByPhone_CreateUserArgs = {
  input: SignUpByPhoneCreateUserRequest;
};

export type MutationUser_Complaint__SendArgs = {
  input: CreateUserComplaintRequest;
};

export type MyApartmentAdRequest = {
  /** apartmentId */
  id: Scalars['String'];
};

export type MyApartmentAdStatusCountResponse = {
  __typename?: 'MyApartmentAdStatusCountResponse';
  ACTIVE: Scalars['Int'];
  DRAFT: Scalars['Int'];
  PAUSED: Scalars['Int'];
  PROCESSING: Scalars['Int'];
  PUBLISHED: Scalars['Int'];
};

export type MyApartmentAdsRequest = {
  status: ApartmentAdStatusType;
};

export type MyChatsRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  role: UserChatRole;
};

export type NextPaymentInfoModel = {
  __typename?: 'NextPaymentInfoModel';
  contractId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  updatedAt: Scalars['String'];
  withdrawFundsDate: Scalars['String'];
};

export type NextPaymentTransactionRequest = {
  paymentSearchType: PaymentHistorySearchType;
};

export type PageAfterCursorInfo = {
  __typename?: 'PageAfterCursorInfo';
  afterCursor?: Maybe<Scalars['String']>;
  count: Scalars['Float'];
  perPage: Scalars['Float'];
};

export type PageBeforeCursorInfo = {
  __typename?: 'PageBeforeCursorInfo';
  beforeCursor?: Maybe<Scalars['String']>;
  count: Scalars['Float'];
  perPage: Scalars['Float'];
};

export type PauseApartmentAdRequest = {
  /** apartmentId */
  id: Scalars['String'];
  /** rentPeriodType */
  periodType: ApartmentRentPeriodType;
};

export enum PaymentHistorySearchType {
  Recurring = 'RECURRING',
  Single = 'SINGLE',
}

export type PaymentInvoiceModel = {
  __typename?: 'PaymentInvoiceModel';
  cardMeta?: Maybe<CardMetaModel>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  invoiceDate: Scalars['String'];
  isSuccess: Scalars['Boolean'];
  paymentTransaction: PaymentTransactionModel;
  paymentTransactionId: Scalars['String'];
  refersToUserId: Scalars['String'];
  type: PaymentInvoiceType;
  updatedAt: Scalars['String'];
};

export type PaymentInvoicePayload = {
  __typename?: 'PaymentInvoicePayload';
  data?: Maybe<Array<PaymentInvoiceModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export enum PaymentInvoiceType {
  Receiving = 'RECEIVING',
  Withdraw = 'WITHDRAW',
}

export type PaymentInvoicesHistoryRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  paymentSearchType: PaymentHistorySearchType;
};

export enum PaymentMethod {
  Innopay = 'INNOPAY',
}

export type PaymentTransactionModel = {
  __typename?: 'PaymentTransactionModel';
  contract: BaseContractModel;
  contractId: Scalars['String'];
  cost: Scalars['String'];
  createdAt: Scalars['String'];
  currency: Currency;
  deletedAt?: Maybe<Scalars['String']>;
  endDate: Scalars['String'];
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isReadyToPay: Scalars['Boolean'];
  recipientTaxRate: Scalars['Float'];
  rentDays: Scalars['Int'];
  senderTaxRate: Scalars['Float'];
  startDate: Scalars['String'];
  status: PaymentTransactionStatus;
  taxAmount: Scalars['String'];
  totalAmountPayable: Scalars['String'];
  totalAmountToBeTransferred: Scalars['String'];
  updatedAt: Scalars['String'];
  withdrawFundsDate: Scalars['String'];
};

export enum PaymentTransactionPubSubEvent {
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export type PaymentTransactionResponse = {
  __typename?: 'PaymentTransactionResponse';
  paymentTransaction?: Maybe<PaymentTransactionModel>;
  problem?: Maybe<InnopayServiceBadRequestProblem>;
};

export enum PaymentTransactionStatus {
  Canceled = 'CANCELED',
  CashInWaiting = 'CASH_IN_WAITING',
  CashOutWaiting = 'CASH_OUT_WAITING',
  Completed = 'COMPLETED',
}

export type PaymentTransactionSubscriptionResponse = {
  __typename?: 'PaymentTransactionSubscriptionResponse';
  event: PaymentTransactionPubSubEvent;
  paymentTransaction: PaymentTransactionModel;
};

export type PriceRangeInput = {
  max?: InputMaybe<Scalars['String']>;
  min?: InputMaybe<Scalars['String']>;
};

export type ProfileAddIdentityDocumentRequest = {
  identityDocuments: Array<Scalars['String']>;
};

export type ProfileConfirmVerificationEmailRequest = {
  token: Scalars['String'];
};

export type ProfileConfirmVerificationEmailResponse = {
  __typename?: 'ProfileConfirmVerificationEmailResponse';
  ok: Scalars['Boolean'];
};

export type ProfileEditAvatarRequest = {
  avatar?: InputMaybe<Scalars['String']>;
};

export type ProfileEditEmailRequest = {
  email: Scalars['String'];
};

export type ProfileEditEmailResponse = {
  __typename?: 'ProfileEditEmailResponse';
  problem?: Maybe<EmailAlreadyUsedProblem>;
  user?: Maybe<UserMeModel>;
};

export type ProfileEditGuarantorRequest = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
};

export type ProfileEditPersonalInfoRequest = {
  birthdate?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GenderType>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
};

export type ProfileResponse = {
  __typename?: 'ProfileResponse';
  user: UserMeModel;
};

export type PublishApartmentAdRequest = {
  /** apartmentId */
  id: Scalars['String'];
  /** rentPeriodType */
  periodType: ApartmentRentPeriodType;
};

export type PublishApartmentAdResponse = {
  __typename?: 'PublishApartmentAdResponse';
  apartmentAd?: Maybe<ApartmentAdModel>;
  problem?: Maybe<LongTermRentIsRentedProblem>;
};

export type Query = {
  __typename?: 'Query';
  chat__byId: ChatModel;
  chat__messages: MessagePayload;
  chat__myChats: ChatPaginationResponse;
  contractRequest__forLandlord: ContractRequestPaginationResponse;
  contract__landlord_activeRents: Array<ContractLandlordModel>;
  contract__landlord_find: ContractLandlordModel;
  contract__tenant_cancelationInfo: TenantContractCancelationInfoResponse;
  contract__tenant_find: ContractTenantModel;
  contract__tenant_longTermRents: TenantContractsPaginationResponse;
  contract__tenant_paymentInfo: TenantContractPaymentInfoResponse;
  contract__tenant_shortTermRents: TenantContractsPaginationResponse;
  innopay__my_cards: Array<InnopayCardModel>;
  innopay__tenant_contractCard: InnopayCardModel;
  paymentTransaction_historyInvoice: PaymentInvoicePayload;
  paymentTransaction_paymentNext: Array<PaymentTransactionModel>;
  rentAdIdentificator__find: ApartmentAdIdentificatorResponse;
  rentAdIdentificator__findByRentId: ApartmentAdSlugResponse;
  rentAdIdentificators__findByRentIds: ApartmentAdsSlugResponse;
  rentAd__find_longTermAd?: Maybe<FindLongTermRentAdResponse>;
  rentAd__find_longTermAdByApId?: Maybe<FindLongTermRentAdResponse>;
  rentAd__find_longTermAds: FindLongTermRentAdsResponse;
  rentAd__find_longTermAdsCluster: FindLongTermRentAdsClusterResponse;
  rentAd__find_shortTermAdByApartmentId?: Maybe<FindShortTermRentAdResponse>;
  rentAd__find_shortTermAds: FindShortTermRentAdsResponse;
  rentAd__find_shortTermAdsCluster: FindShortTermRentAdsClusterResponse;
  rentAd__find_shortTermRentAd?: Maybe<FindShortTermRentAdResponse>;
  rentAd__myRentAd: ApartmentAdModel;
  rentAd__myRentAd_statusCount: MyApartmentAdStatusCountResponse;
  rentAd__myRentAd_unionRentPeriods: ApartmentAdsUnionResponse;
  user__me: UserMeModel;
};

export type QueryChat__ByIdArgs = {
  input: FindChatRequest;
};

export type QueryChat__MessagesArgs = {
  input: ChatMessagesRequest;
};

export type QueryChat__MyChatsArgs = {
  input: MyChatsRequest;
};

export type QueryContractRequest__ForLandlordArgs = {
  input: FindContractRequestForLandlordRequest;
};

export type QueryContract__Landlord_FindArgs = {
  input: FindContractRequest;
};

export type QueryContract__Tenant_CancelationInfoArgs = {
  input: TenantContractCancelationInfoRequest;
};

export type QueryContract__Tenant_FindArgs = {
  input: FindContractRequest;
};

export type QueryContract__Tenant_LongTermRentsArgs = {
  input: TenantLongTermRentContractsRequest;
};

export type QueryContract__Tenant_PaymentInfoArgs = {
  input: TenantContractPaymentInfoRequest;
};

export type QueryContract__Tenant_ShortTermRentsArgs = {
  input: TenantShortTermRentContractsRequest;
};

export type QueryInnopay__My_CardsArgs = {
  input?: InputMaybe<FindMyCardsRequest>;
};

export type QueryInnopay__Tenant_ContractCardArgs = {
  input: TenantContractCardRequest;
};

export type QueryPaymentTransaction_HistoryInvoiceArgs = {
  input: PaymentInvoicesHistoryRequest;
};

export type QueryPaymentTransaction_PaymentNextArgs = {
  input: NextPaymentTransactionRequest;
};

export type QueryRentAdIdentificator__FindArgs = {
  input: FindApartmentAdIdentificatorRequest;
};

export type QueryRentAdIdentificator__FindByRentIdArgs = {
  input: FindApartmentAdIdentificatorRequest;
};

export type QueryRentAdIdentificators__FindByRentIdsArgs = {
  input: FindApartmentAdsIdentificatorsRequest;
};

export type QueryRentAd__Find_LongTermAdArgs = {
  input: FindLongTermRentAdRequest;
};

export type QueryRentAd__Find_LongTermAdByApIdArgs = {
  input: FindLongTermRentAdRequest;
};

export type QueryRentAd__Find_LongTermAdsArgs = {
  filter: FindLongTermRentAdsFilterRequest;
  pagination: BaseOffsetPaginationRequest;
};

export type QueryRentAd__Find_LongTermAdsClusterArgs = {
  filter: FindLongTermRentAdsFilterRequest;
};

export type QueryRentAd__Find_ShortTermAdByApartmentIdArgs = {
  input: FindShortTermRentAdRequest;
};

export type QueryRentAd__Find_ShortTermAdsArgs = {
  filter: FindShortTermRentAdsFilterRequest;
  pagination: BaseOffsetPaginationRequest;
};

export type QueryRentAd__Find_ShortTermAdsClusterArgs = {
  filter: FindShortTermRentAdsFilterRequest;
};

export type QueryRentAd__Find_ShortTermRentAdArgs = {
  input: FindShortTermRentAdRequest;
};

export type QueryRentAd__MyRentAdArgs = {
  input: MyApartmentAdRequest;
};

export type QueryRentAd__MyRentAd_UnionRentPeriodsArgs = {
  input: MyApartmentAdsRequest;
};

export type ReduceTheNumberOfGuestsProblem = {
  __typename?: 'ReduceTheNumberOfGuestsProblem';
  message: Scalars['String'];
};

export type RejectContractOfferRequest = {
  chatId: Scalars['String'];
};

export type RejectRequest = {
  contractRequestId: Scalars['String'];
  reason: Scalars['String'];
};

export enum RentPeriodStrategyType {
  LongTermRent = 'LONG_TERM_RENT',
  MiddleTermRent = 'MIDDLE_TERM_RENT',
  ShortTermRent = 'SHORT_TERM_RENT',
}

export enum RentPeriodType {
  All = 'ALL',
  LongTerm = 'LONG_TERM',
  ShortTerm = 'SHORT_TERM',
}

export type SaveCardStartResponse = {
  __typename?: 'SaveCardStartResponse';
  ok: Scalars['Boolean'];
  problem?: Maybe<InnopayServiceBadRequestProblem>;
  url?: Maybe<Scalars['String']>;
};

export type SendBookingRequestStatusEmailResponse = {
  __typename?: 'SendBookingRequestStatusEmailResponse';
  ok: Scalars['Boolean'];
};

export type SendContractOfferEmailResponse = {
  __typename?: 'SendContractOfferEmailResponse';
  ok: Scalars['Boolean'];
};

export type SendContractOfferRequest = {
  allowedToHangingOut: Scalars['Boolean'];
  allowedToSmoke: Scalars['Boolean'];
  allowedWithChildren: Scalars['Boolean'];
  allowedWithPets: Scalars['Boolean'];
  /** only for short term rent period */
  arrivalDate?: InputMaybe<Scalars['String']>;
  chatId: Scalars['String'];
};

export type SendContractOfferStatusEmailResponse = {
  __typename?: 'SendContractOfferStatusEmailResponse';
  ok: Scalars['Boolean'];
};

export type SendMessageRequest = {
  chatId: Scalars['String'];
  id: Scalars['String'];
  mediaName?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  mediaWeight?: InputMaybe<Scalars['Float']>;
  text?: InputMaybe<Scalars['String']>;
  /** Without SYSTEM (only TEXT or MEDIA) becourse Only the system can send system messages, so they're not here */
  type: MessageType;
};

export type SendOfferEmail = {
  recipientId: Scalars['String'];
};

export type SendOfferStatusEmail = {
  isLandLord: Scalars['Boolean'];
  recipientId: Scalars['String'];
};

export type SendRequest = {
  apartmentAdId: Scalars['String'];
  apartmentRentPeriodType: ApartmentRentPeriodType;
  /** only for short term rent period */
  arrivalDate?: InputMaybe<Scalars['String']>;
  /** only for instant booking */
  cardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** only for short term rent period */
  departureDate?: InputMaybe<Scalars['String']>;
  guests: GuestsInput;
  /** only for short term rent period */
  rentBookingType?: InputMaybe<ShortTermRentBookingType>;
  /** only for short term rent period */
  rentPaymentType?: InputMaybe<ShortTermRentPaymentType>;
};

export type SendRequestEmail = {
  recipientId: Scalars['String'];
};

export type SendRequestEmailResponse = {
  __typename?: 'SendRequestEmailResponse';
  ok: Scalars['Boolean'];
};

export type SendRequestStatusEmail = {
  recipientId: Scalars['String'];
};

export type SendSmsCodeRestrictionProblem = {
  __typename?: 'SendSmsCodeRestrictionProblem';
  message: Scalars['String'];
};

export type SendToApproveApartmentAdRequest = {
  /** apartmentId */
  id: Scalars['String'];
};

export enum ShortTermRentBookingType {
  Instant = 'INSTANT',
  Request = 'REQUEST',
}

export enum ShortTermRentCancellationPolicyType {
  Flexible = 'FLEXIBLE',
  Inflexible = 'INFLEXIBLE',
  Moderate = 'MODERATE',
  Strict = 'STRICT',
}

export enum ShortTermRentPaymentType {
  Full = 'FULL',
  Partial = 'PARTIAL',
}

export type ShortTermSwitchRentBookingTypeRequest = {
  /** apartmentId */
  id: Scalars['String'];
};

export type SignInByGoogleRequest = {
  accessToken: Scalars['String'];
};

export type SignInByGoogleResponse = {
  __typename?: 'SignInByGoogleResponse';
  problem?: Maybe<UndefinedReturnGoogleOauthProblem>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserMeModel>;
};

export type SignInByPhoneConfirmCodeRequest = {
  phone: Scalars['String'];
  smscode: Scalars['String'];
};

export type SignInByPhoneConfirmCodeResponse = {
  __typename?: 'SignInByPhoneConfirmCodeResponse';
  problem?: Maybe<InvalidVerificationPhoneCodeProblem>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserMeModel>;
};

export type SignInByPhoneSendCodeRequest = {
  phone: Scalars['String'];
};

export type SignInByPhoneSendCodeResponse = {
  __typename?: 'SignInByPhoneSendCodeResponse';
  ok: Scalars['Boolean'];
  problem?: Maybe<SendSmsCodeRestrictionProblem>;
  smscode?: Maybe<Scalars['String']>;
};

export type SignUpByPhoneCreateUserRequest = {
  birthDate: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type SignUpByPhoneCreateUserResponse = {
  __typename?: 'SignUpByPhoneCreateUserResponse';
  problem?: Maybe<EmailAlreadyUsedProblem>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserMeModel>;
};

export type SlugModel = {
  __typename?: 'SlugModel';
  apartmentId: Scalars['String'];
  id: Scalars['String'];
  slug: Scalars['String'];
};

export type SpecifyPaymentMethodProblem = {
  __typename?: 'SpecifyPaymentMethodProblem';
  message: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  innopayPageUrl: InnopayPageUrlSubscriptionResponse;
  newMessage: MessageModel;
  updateContract: ContractSubscriptionResponse;
  updatePaymentTransaction: PaymentTransactionSubscriptionResponse;
};

export type SubscriptionNewMessageArgs = {
  userChatRole: UserChatRole;
};

export type SystemMessageDataModel = {
  __typename?: 'SystemMessageDataModel';
  apartmentRentPeriodType?: Maybe<ApartmentRentPeriodType>;
  arrivalDate?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  longTermRentCancellationPolicyType?: Maybe<LongTermRentCancellationPolicyType>;
  rules?: Maybe<ApartmentAdRulesModel>;
  shortTermRentBookingType?: Maybe<ShortTermRentBookingType>;
  shortTermRentCancellationPolicyType?: Maybe<ShortTermRentCancellationPolicyType>;
  shortTermRentPaymentType?: Maybe<ShortTermRentPaymentType>;
  status: ContractStatus;
};

export enum SystemMessageType {
  BookingConcluded = 'BOOKING_CONCLUDED',
  BookingCreated = 'BOOKING_CREATED',
  InstantBooking = 'INSTANT_BOOKING',
  OfferRejected = 'OFFER_REJECTED',
  OfferRejectedBySystem = 'OFFER_REJECTED_BY_SYSTEM',
  OfferSending = 'OFFER_SENDING',
  TemporaryBookingRevoke = 'TEMPORARY_BOOKING_REVOKE',
}

export type TenantContractCancelationInfoRequest = {
  /** local checkout date in ISO ex. YYYY-MM-DD */
  checkoutDate?: InputMaybe<Scalars['String']>;
  /** contractId */
  id: Scalars['String'];
};

export type TenantContractCancelationInfoResponse = {
  __typename?: 'TenantContractCancelationInfoResponse';
  cancelationDate: Scalars['String'];
  checkOutDate: Scalars['String'];
  checkoutType?: Maybe<LongPeriodTenantCheckOutCancelationType>;
  /** recomputed withdrawal for last stay month */
  recomputedLastStayWithdrawalAmount?: Maybe<Scalars['String']>;
  /** money which will bee refund */
  refundsAmount: Scalars['String'];
  strategyType: RentPeriodStrategyType;
  /** money which will bee withdrawal */
  withdrawalAmount?: Maybe<Scalars['String']>;
};

export type TenantContractCardRequest = {
  /** contractId */
  id: Scalars['String'];
};

export type TenantContractPaymentInfoRequest = {
  /** contractId */
  id: Scalars['String'];
};

export type TenantContractPaymentInfoResponse = {
  __typename?: 'TenantContractPaymentInfoResponse';
  accommodationAvailableDate?: Maybe<Scalars['String']>;
  cancellationDate?: Maybe<Scalars['String']>;
  dateOfNextCharge?: Maybe<Scalars['String']>;
  paidAmount: Scalars['String'];
  payableAmount: Scalars['String'];
  payableAmountOfNextCharge?: Maybe<Scalars['String']>;
  refundsAmount: Scalars['String'];
  totalAmount: Scalars['String'];
  type: ContractPaymentStatusType;
};

export type TenantContractsPaginationResponse = {
  __typename?: 'TenantContractsPaginationResponse';
  data?: Maybe<Array<ContractTenantModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type TenantLongTermRentContractsRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  type: ContractRentStatus;
};

export type TenantManuallyPayRequest = {
  id: Scalars['String'];
};

export type TenantShortTermRentContractsRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  type: ContractRentStatus;
};

export type TransactionMetaModel = {
  __typename?: 'TransactionMetaModel';
  endDate: Scalars['String'];
  id: Scalars['String'];
  startDate: Scalars['String'];
  status: PaymentTransactionStatus;
  withdrawFundsDate: Scalars['String'];
};

export type UndefinedReturnGoogleOauthProblem = {
  __typename?: 'UndefinedReturnGoogleOauthProblem';
  message: Scalars['String'];
};

export enum UserChatRole {
  Landlord = 'LANDLORD',
  Tenant = 'TENANT',
}

export type UserComplaintResponse = {
  __typename?: 'UserComplaintResponse';
  ok: Scalars['Boolean'];
};

export enum UserComplaintType {
  IThinkTheyAreDeceiving = 'I_THINK_THEY_ARE_DECEIVING',
  Other = 'OTHER',
  ThisIsSpam = 'THIS_IS_SPAM',
  ThisUserIsBehavingIndecently = 'THIS_USER_IS_BEHAVING_INDECENTLY',
}

export type UserEmailNotificationModel = {
  __typename?: 'UserEmailNotificationModel';
  adApproved: Scalars['Boolean'];
  adRejected: Scalars['Boolean'];
  bookingRequest: Scalars['Boolean'];
  businessTrains: Scalars['Boolean'];
  contractConcluded: Scalars['Boolean'];
  newMessages: Scalars['Boolean'];
  recurringPaymentFailure: Scalars['Boolean'];
  recurringPaymentSuccess: Scalars['Boolean'];
  reminderNeedToPayRent: Scalars['Boolean'];
};

export type UserMeModel = {
  __typename?: 'UserMeModel';
  avatarKey?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailNotification: UserEmailNotificationModel;
  firstName: Scalars['String'];
  gender?: Maybe<GenderType>;
  guarantors?: Maybe<Array<GuarantorModel>>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  identityDocuments?: Maybe<Array<Scalars['String']>>;
  identityRejectReason?: Maybe<Scalars['String']>;
  identityStatus: IdentityStatusType;
  isEmailVerified: Scalars['Boolean'];
  isIdentityApproved: Scalars['Boolean'];
  isPhoneApproved: Scalars['Boolean'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pushNotification: UserPushNotificationModel;
  smsNotification: UserSmsNotificationModel;
  updatedAt: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  avatarKey?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<GenderType>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isEmailVerified: Scalars['Boolean'];
  isIdentityApproved: Scalars['Boolean'];
  isPhoneApproved: Scalars['Boolean'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type UserPushNotificationModel = {
  __typename?: 'UserPushNotificationModel';
  adApproved: Scalars['Boolean'];
  adRejected: Scalars['Boolean'];
  adRemovedByAdmin: Scalars['Boolean'];
  adStatusUpdatedByAdmin: Scalars['Boolean'];
  adUpdatedByAdmin: Scalars['Boolean'];
  bookingRequestAccepted: Scalars['Boolean'];
  bookingRequestSent: Scalars['Boolean'];
  bookingRequestUpdated: Scalars['Boolean'];
  changesInPassportDetails: Scalars['Boolean'];
  contractCompleted: Scalars['Boolean'];
  contractConcluded: Scalars['Boolean'];
  contractOfferSent: Scalars['Boolean'];
  contractOfferUpdated: Scalars['Boolean'];
  contractRejectedByAdmin: Scalars['Boolean'];
  newMessages: Scalars['Boolean'];
  recurringPaymentFailure: Scalars['Boolean'];
  recurringPaymentSuccess: Scalars['Boolean'];
  reminderLandlordUpcomingEntryDate: Scalars['Boolean'];
  reminderTenantUpcomingEntryDate: Scalars['Boolean'];
  reminderUnreadMessages: Scalars['Boolean'];
};

export type UserSmsNotificationModel = {
  __typename?: 'UserSmsNotificationModel';
  accountRemovedByAdmin: Scalars['Boolean'];
  bookingRequestUpdated: Scalars['Boolean'];
  contractCancellationOfTheLease: Scalars['Boolean'];
  reminderNeedToPayRent: Scalars['Boolean'];
  reminderUnreadMessages: Scalars['Boolean'];
  reminderUpcomingDepartureDate: Scalars['Boolean'];
};
