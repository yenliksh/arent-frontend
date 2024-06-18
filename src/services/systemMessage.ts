import {
  ApartmentRentPeriodType,
  MessageModel,
  ShortTermRentBookingType,
  SystemMessageType,
} from '__generated__/types';
import { shortTermRentMessageMapping, systemMessageMapping } from 'constains';

import { LocalTypes } from '../../public/locales/types';
import { calculateMonths } from '../utils';
import dayjs from './dayjs';
import i18n from './i18n';

type SystemMessageConstructor = { message: MessageModel; myId?: string; isLandlord?: boolean };

const MINIMAL_MONTHS_FOR_AVERAGE_TERM = 1;

const MAXIMUM_MONTHS_FOR_AVERAGE_TERM = 3;

class SystemMessage {
  message?: MessageModel;

  isMyMessage = false;

  isLandlord = false;

  isLongTerm = false;

  constructor({ message, myId, isLandlord = false }: SystemMessageConstructor) {
    this.message = message;
    this.isMyMessage = myId === this.message?.sender?.id;
    this.isLandlord = isLandlord;
    this.isLongTerm = message.contractData?.apartmentRentPeriodType === ApartmentRentPeriodType.LongTerm;
  }

  checkAverageTerm(startDate: Date, endDate: Date): boolean {
    const long = calculateMonths(startDate, endDate);
    return long < MAXIMUM_MONTHS_FOR_AVERAGE_TERM && long > MINIMAL_MONTHS_FOR_AVERAGE_TERM;
  }

  getSystemMessage(): string {
    switch (this.message?.systemMessageType) {
      case SystemMessageType.BookingCreated: {
        return this.getBookingCreatedMessage();
      }
      case SystemMessageType.BookingConcluded: {
        return this.getBookingConcludedMessage();
      }
      case SystemMessageType.OfferSending: {
        return this.getOfferSendingMessage();
      }
      case SystemMessageType.OfferRejected: {
        return this.getOfferRejectedMessage();
      }
      case SystemMessageType.OfferRejectedBySystem: {
        return this.getOfferRejectedBySystemMessage();
      }
      case SystemMessageType.InstantBooking: {
        return this.getInstantBookingMessage();
      }
      case SystemMessageType.TemporaryBookingRevoke: {
        return this.getTemporaryBookingRevokeMessage();
      }
      default: {
        return '';
      }
    }
  }

  getBookingCreatedMessage() {
    const departureDateInString = this.message?.contractData?.departureDate;
    const arrivalDateInString = this.message?.contractData?.arrivalDate;
    const systemMessageType = this.message?.systemMessageType;
    const shortTermRentBookingType = this.message?.contractData?.shortTermRentBookingType;

    const isDate = !!departureDateInString && !!arrivalDateInString;
    const isSameYear = dayjs(departureDateInString).year === dayjs(arrivalDateInString).year;

    const arrivalDateFormat = isSameYear ? 'DD MMMM' : 'DD MMMM YYYY';

    const arrivalDate = isDate ? dayjs(arrivalDateInString).format(arrivalDateFormat) : '';
    const departureDate = isDate ? dayjs(departureDateInString).format('DD MMMM YYYY') : '';

    const bookingDate = isDate
      ? i18n.t('systemMessages.bookingRequestDate', {
          count: { arrivalDate, departureDate } as any,
          ns: LocalTypes.COMMON,
        })
      : '';

    const getSystemMessage = () => {
      const hasShortRentInstant = shortTermRentBookingType === ShortTermRentBookingType.Instant;

      if (systemMessageType) {
        return hasShortRentInstant
          ? shortTermRentMessageMapping[shortTermRentBookingType] + bookingDate
          : systemMessageMapping[systemMessageType] + bookingDate;
      }

      return '';
    };

    const systemMessage = getSystemMessage();

    return systemMessage;
  }

  getBookingConcludedMessage() {
    const systemMessageTitle = i18n.t('systemMessages.bookingConcluded.title');

    let descriptionTenant = this.isLongTerm
      ? i18n.t('systemMessages.bookingConcluded.longTermDescription.tenant')
      : i18n.t('systemMessages.bookingConcluded.shortTermDescription.tenant');

    let descriptionLandlord = this.isLongTerm
      ? i18n.t('systemMessages.bookingConcluded.longTermDescription.landlord')
      : i18n.t('systemMessages.bookingConcluded.shortTermDescription.landlord');

    const arrivalDate = dayjs(this.message?.contractData?.arrivalDate).toDate();
    const departureDate = dayjs(this.message?.contractData?.departureDate).toDate();

    const long = calculateMonths(arrivalDate, departureDate);

    const isBetterMonth = long < 1;

    const isAverageTerm = this.checkAverageTerm(arrivalDate, departureDate);

    const transactionMeta = this.message?.transactionsMeta;

    const isRecurring = (this.isLongTerm || isAverageTerm) && transactionMeta && transactionMeta?.length > 0;

    if (isRecurring) {
      descriptionLandlord = i18n.t('systemMessages.bookingConcluded.recurringRent.landlord');
      descriptionTenant = i18n.t('systemMessages.bookingConcluded.recurringRent.tenant');
    }

    const isPartialRent =
      !this.isLongTerm && !isAverageTerm && transactionMeta && transactionMeta?.length > 1 && isBetterMonth;

    if (isPartialRent) {
      const paymentDate = dayjs(transactionMeta[1]?.withdrawFundsDate).format('DD MMMM YYYY');
      descriptionLandlord = i18n.t('systemMessages.bookingConcluded.partialRent.landlord');
      descriptionTenant = i18n.t('systemMessages.bookingConcluded.partialRent.tenant', { count: paymentDate as any });
    }
    const finallyDescription = this.isLandlord ? descriptionLandlord : descriptionTenant;

    return this.createSystemMessageWithDescription(systemMessageTitle, finallyDescription);
  }

  getOfferSendingMessage() {
    const systemMessage = this.isMyMessage
      ? i18n.t('systemMessages.offerSending.landlord')
      : i18n.t('systemMessages.offerSending.tenant');
    return systemMessage;
  }

  getOfferRejectedMessage() {
    const landlordMessage = this.isMyMessage
      ? i18n.t('systemMessages.offerRejected.landlord.sent')
      : i18n.t('systemMessages.offerRejected.landlord.received');
    const tenantMessage = this.isMyMessage
      ? i18n.t('systemMessages.offerRejected.tenant.sent')
      : i18n.t('systemMessages.offerRejected.tenant.received');

    const systemMessage = this.isLandlord ? landlordMessage : tenantMessage;

    return systemMessage;
  }

  getOfferRejectedBySystemMessage() {
    const systemMessageDescription = this.isLandlord
      ? i18n.t('systemMessages.offerRejected.system.description.landlord')
      : i18n.t('systemMessages.offerRejected.system.description.tenant');

    const systemMessage = this.createSystemMessageWithDescription(
      i18n.t('systemMessages.offerRejected.system.title'),
      systemMessageDescription,
    );

    return systemMessage;
  }

  getInstantBookingMessage() {
    const systemMessageTitle = i18n.t('systemMessages.instantBooking.title');
    const systemMessageDescription = this.isLandlord
      ? i18n.t('systemMessages.instantBooking.description.landlord')
      : i18n.t('systemMessages.instantBooking.description.tenant');

    const systemMessage = this.createSystemMessageWithDescription(systemMessageTitle, systemMessageDescription);

    return systemMessage;
  }

  getTemporaryBookingRevokeMessage() {
    const systemMessageTitle = i18n.t('systemMessages.temporaryBookingRevoke.title');
    const systemMessageDescription = this.isLandlord
      ? i18n.t('systemMessages.temporaryBookingRevoke.description.landlord')
      : i18n.t('systemMessages.temporaryBookingRevoke.description.tenant');

    const systemMessage = this.createSystemMessageWithDescription(systemMessageTitle, systemMessageDescription);

    return systemMessage;
  }

  createSystemMessageWithDescription(title: string, description: string) {
    return `${title}/${description}`;
  }
}

export default SystemMessage;
