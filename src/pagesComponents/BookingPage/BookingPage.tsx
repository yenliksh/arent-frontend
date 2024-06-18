import {
  ApartmentRentPeriodType,
  InnopayAppointmentCardType,
  ShortTermRentBookingType,
  ShortTermRentPaymentType,
} from '__generated__/types';
import { GuestField } from 'components/BookingComponent/FormBooking/components/GuestField';
import { FEE_PERCENTS_SHORT_TERM } from 'constains';
import dayjs from 'dayjs';
import { useSendContractRequest } from 'graphql/mutations/Advert/__generated__/sendContractRequest.mutation';
import { useSendInstantBookingContractByNewCard } from 'graphql/mutations/Advert/__generated__/sendContractRequestByNewCard.mutation';
import { useSendContractRequestEmail } from 'graphql/mutations/Advert/__generated__/sendContractRequestEmail.mutation';
import { useGetApartmentIdentificator } from 'graphql/queries/Advert/__generated__/getApartmentAdIdentificator.query';
import { useGetShortTermRentByApId } from 'graphql/queries/Apartments/__generated__/getShortTermApartmentByApId.query';
import { useGetCards, useGetCardsLazyQuery } from 'graphql/queries/User/__generated__/getCards.query';
import { useInnopayPageUrl } from 'graphql/subscription/Contract/__generated__/innopayPageUrl';
import { useUpdateContract } from 'graphql/subscription/Contract/__generated__/updateContract';
import { useClientSize, useToggle } from 'hooks';
import { MainLayout } from 'layouts';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { notify } from 'services';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AddNewBankCardButton, AppText, BaseModal, Button, DatePicker, RadioButton, Textarea } from 'ui';
import { ButtonVariant } from 'ui/Button/Button';
import { DatePickerInputEnum } from 'ui/DatePicker/DatePicker';
import { calculateTripDaysCount, getPercentOnRent, handleDivisionOnCategories, minDateForRequest } from 'utils';
import { getStorageById, resetStorageById, setStorageById } from 'utils/storage-service';

import { Mastercard, Visa } from '../../../public/svg/components';
import { ModalInnopayEcommerceMethod } from '../../components';
import useCheckAverageTerm from '../../hooks/useCheckAverageTerm';
import { possibilityToPayInInstalments } from '../../libs';
import {
  ExpiredPaymentModal,
  HeaderBooking,
  PaymentFormat,
  PriceDetail,
  StickyTopHeaderPaymentTimer,
} from './components';
import Breadcrumbs from './components/BreadCrumbs/BreadCrumbs';
import { SelectedHouse } from './components/SelectedHouse';

const CancellationRules = dynamic(() => import('./components/CancellationRules/CancellationRules'), {
  ssr: false,
});

// TODO нужно декомпозировать слишком большой компонент

const MINIMAL_DAYS_FOR_AVERAGE_TEAM = 30;

const BookingPage: FC = () => {
  const { t } = useTranslation('bookingPage', { keyPrefix: 'page' });

  const [isFullPayment, setIsFullPayment] = useState(false);
  const [isCorrectDate, setIsCorrectDate] = useState(true);
  const [getCards] = useGetCardsLazyQuery();
  const { getIsBreakpoint } = useClientSize();
  const router = useRouter();

  const { dateStartInitial, dateEndInitial, numberOfGuests, numberOfChild, id, nightsInitial, numberOfPets, slug } =
    router.query;

  const [bookingDays, setBookingDays] = useState<number | undefined>(Number(nightsInitial));
  const [dates, setDates] = useState<Date[] | string[]>([dateStartInitial as string, dateEndInitial as string]);
  const apartmentAdSearchId = (slug as string)?.split('-')[0];

  useCheckAverageTerm(dayjs(dates[0]).toDate(), dayjs(dates[1]).toDate());

  const [sendContractRequest, { loading }] = useSendContractRequest();
  const [sendContractRequestByNewCard] = useSendInstantBookingContractByNewCard();
  const [fetchSendEmail] = useSendContractRequestEmail();

  const { data: apartmentAdIdentificator } = useGetApartmentIdentificator({
    variables: {
      input: {
        id: apartmentAdSearchId,
      },
    },
  });

  const apartmentId = apartmentAdIdentificator?.rentAdIdentificator__find.apartmentId as unknown as string;

  const { data } = useGetShortTermRentByApId({
    variables: {
      id: { id: apartmentId },
    },
    fetchPolicy: 'cache-and-network',
  });

  const { data: cardData } = useGetCards();
  const cards = cardData?.innopay__my_cards.filter(
    (card) => card.appointmentType === InnopayAppointmentCardType.ChargeOff,
  );
  const defaultPayment = cards?.[0]?.id;

  const form = useForm<FormData>({
    defaultValues: {
      dateStart: dayjs(dateStartInitial as string).format('DD MMMM YYYY') || '',
      dateEnd: dayjs(dateEndInitial as string).format('DD MMMM YYYY') || '',
      comment: '',
      payment: defaultPayment,
      numberOfGuests: Number(numberOfGuests) || 1,
      numberOfChilds: Number(numberOfChild) || 0,
      numberOfPets: Number(numberOfPets) || 0,
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { isValid },
  } = form;

  watch('payment');

  const { isOpened: isInnopayModalOpen, toggle: toggleInnopayModalOpen, close: closeInnopayModalOpen } = useToggle();
  const { isOpened: isPaymentModalOpen, toggle: togglePaymentModal, close: closePaymentModal } = useToggle();
  const {
    isOpened: isExpiredPaymentModalOpen,
    open: openExpiredPaymentModal,
    toggle: toggleExpiredPaymentModal,
  } = useToggle();
  const { isOpened: isStickyTopHeaderPaymentTimerOpen, close: closeStickyTopHeaderPaymentTimerOpen } = useToggle(true);

  const submitButtonTextMapping = useMemo(
    () => ({
      [ShortTermRentBookingType.Request]: t('textButton'),
      [ShortTermRentBookingType.Instant]: t('instantTextButton'),
    }),
    [t],
  );

  const completedRequestNotifyMapping = {
    [ShortTermRentBookingType.Request]: t('requestSuccessful'),
    [ShortTermRentBookingType.Instant]: t('instantRequestSuccessful'),
  };

  const onSubmit = async (data: FormData) => {
    const rentPaymentType = !isFullPayment ? ShortTermRentPaymentType.Full : ShortTermRentPaymentType.Partial;

    await sendContractRequest({
      variables: {
        input: {
          apartmentAdId: apartmentAdId!,
          apartmentRentPeriodType: ApartmentRentPeriodType.ShortTerm,
          arrivalDate: dayjs(dates[0]).format('YYYY-MM-DD'),
          departureDate: dayjs(dates[1]).format('YYYY-MM-DD'),
          rentPaymentType,
          comment: data.comment,
          rentBookingType,
          cardId: data.payment,
          guests: {
            numberOfAdult: data.numberOfGuests,
            numberOfChildren: data.numberOfChilds,
            numberOfPets: data.numberOfPets,
          },
        },
      },
      onCompleted: (data) => {
        const problemTypename = data.contract_request__send.problem?.__typename;
        if (
          [
            'ChosenDatesIsNotAvailableProblem',
            'ReduceTheNumberOfGuestsProblem',
            'SpecifyPaymentMethodProblem',
            'ContractRequestAlreadyExistsProblem',
          ].includes(problemTypename!)
        ) {
          notify(data.contract_request__send.problem?.message!);
        } else {
          notify(completedRequestNotifyMapping[rentBookingType as ShortTermRentBookingType]);
        }
      },
      onError: () => notify('Не удалось отправить запрос на бронирование'),
    });

    const recipientId = apartment?.landlordId;

    if (!recipientId) return;

    await fetchSendEmail({
      variables: {
        input: {
          recipientId,
        },
      },
    });
  };

  const onSubmitByNewCard = async (data: FormData) => {
    const rentPaymentType = !isFullPayment ? ShortTermRentPaymentType.Full : ShortTermRentPaymentType.Partial;
    await sendContractRequestByNewCard({
      variables: {
        input: {
          apartmentAdId: apartmentAdId!,
          arrivalDate: dayjs(dates[0]).format('YYYY-MM-DD'),
          departureDate: dayjs(dates[1]).format('YYYY-MM-DD'),
          rentPaymentType,
          comment: data.comment,
          guests: {
            numberOfAdult: data.numberOfGuests,
            numberOfChildren: data.numberOfChilds,
            numberOfPets: data.numberOfPets,
          },
        },
      },
      onCompleted: (data) => {
        const problem = data.contractInstantBooking__byNewCard.problem?.message;
        if (problem) {
          notify(problem);
          togglePaymentModal();
          closeInnopayModalOpen();
        } else {
          toggleInnopayModalOpen();
          togglePaymentModal();
        }
      },
      onError: () => {
        notify('Не удалось отправить запрос на бронирование');
        closeInnopayModalOpen();
      },
    });
  };

  const checkPossibilityToInstalmentsPay = (dateStart: Date) => {
    if (calculateTripDaysCount(new Date(), dateStart) < MINIMAL_DAYS_FOR_AVERAGE_TEAM) {
      possibilityToPayInInstalments(false);
    } else {
      possibilityToPayInInstalments(true);
    }
  };

  const validationDate = () => {
    const dateStart = dayjs(dates?.[0]);
    const dateEnd = dayjs(dates?.[1]);

    checkPossibilityToInstalmentsPay(dateStart.toDate());

    const dateDifferenceInDays = dateEnd.diff(dateStart, 'day');
    setBookingDays(dateDifferenceInDays);

    const parsedStartDate = Date.parse(String(dates[0]));

    const hasDateDifferenceInDays = dateDifferenceInDays > 0;
    const isDateMoreThanMinDate = parsedStartDate >= parsedMinDate;
    const isCorrectDate = isDateMoreThanMinDate && hasDateDifferenceInDays;

    setIsCorrectDate(isCorrectDate);
  };

  watch(validationDate);

  const apartment = data?.rentAd__find_shortTermAdByApartmentId?.data?.apartmentAd;
  const cost = Number(data?.rentAd__find_shortTermAdByApartmentId?.data?.cost || '');
  const apartmentAdId = data?.rentAd__find_shortTermAdByApartmentId?.data?.apartmentAdId;
  const rentBookingType = data?.rentAd__find_shortTermAdByApartmentId?.data?.rentBookingType;

  const title = apartment?.description?.name || '';
  const photo = apartment?.photos[0].fileKey || '';
  const region = apartment?.address?.region ? `${apartment?.address?.region}, ` : '';
  const city = apartment?.address?.city ? `${apartment?.address?.city}, ` : '';
  const street = apartment?.address?.street ? `${apartment?.address?.street}, ` : '';
  const houseNumber = apartment?.address?.houseNumber ? `${apartment?.address?.houseNumber}` : '';
  const address = `${region}${city}${street}${houseNumber}`;
  const numberOfGuestsForApartment = apartment?.details?.numberOfGuests;
  const apartmentType = apartment?.apartmentType || '';
  const cancellationPolicy = data?.rentAd__find_shortTermAdByApartmentId?.data?.cancellationPolicy;

  const serviceCommission = Math.round(getPercentOnRent(cost, FEE_PERCENTS_SHORT_TERM));
  const total = cost + serviceCommission;
  const showTotal = handleDivisionOnCategories(String(total));

  const isWidthLgm = getIsBreakpoint('lgm');
  const isWidthSm = getIsBreakpoint('sm');

  const parsedMinDate = Date.parse(minDateForRequest.toISOString());

  const rules = data?.rentAd__find_shortTermAdByApartmentId?.data.apartmentAd.rules;

  const checkPossibilityToInstalmentsPayByQuery = () => {
    const { query } = router;
    const startDateFromQuery = dayjs(query?.dateStartInitial as string).toDate();
    checkPossibilityToInstalmentsPay(startDateFromQuery);
  };

  const onCloseInnopayModal = async () => {
    await getCards({ fetchPolicy: 'cache-and-network' });
    toggleInnopayModalOpen();
  };

  useEffect(() => {
    checkPossibilityToInstalmentsPayByQuery();
  }, [router.query]);

  const hasBankCards = cards?.length !== 0;

  const handleGoBackFromInnopay = () => {
    toggleInnopayModalOpen();
    togglePaymentModal();
  };

  const handleRentBookingClick = async (data: FormData) => {
    if (rentBookingType === ShortTermRentBookingType.Instant) {
      togglePaymentModal();
    } else {
      const rentPaymentType = !isFullPayment ? ShortTermRentPaymentType.Full : ShortTermRentPaymentType.Partial;

      await sendContractRequest({
        variables: {
          input: {
            apartmentAdId: apartmentAdId!,
            apartmentRentPeriodType: ApartmentRentPeriodType.ShortTerm,
            arrivalDate: dayjs(dates[0]).format('YYYY-MM-DD'),
            departureDate: dayjs(dates[1]).format('YYYY-MM-DD'),
            rentPaymentType,
            comment: data.comment,
            rentBookingType,
            guests: {
              numberOfAdult: data.numberOfGuests,
              numberOfChildren: data.numberOfChilds,
              numberOfPets: data.numberOfPets,
            },
          },
        },
        onCompleted: (data) => {
          const problemTypename = data.contract_request__send.problem?.__typename;
          if (
            [
              'ChosenDatesIsNotAvailableProblem',
              'ReduceTheNumberOfGuestsProblem',
              'SpecifyPaymentMethodProblem',
              'ContractRequestAlreadyExistsProblem',
            ].includes(problemTypename!)
          ) {
            notify(data.contract_request__send.problem?.message!);
          } else {
            notify(completedRequestNotifyMapping[rentBookingType as ShortTermRentBookingType]);
          }
        },
        onError: () => notify('Не удалось отправить запрос на бронирование'),
      });
    }
  };

  const { data: innopayPageUrlSubscriptionData } = useInnopayPageUrl();
  const { data: updateContractData } = useUpdateContract();

  const lastContractData = getStorageById(id as string);
  const startUrlDate = lastContractData && dayjs(lastContractData.innopayPageUrl.startUrlDate).unix() * 1000;

  if (
    innopayPageUrlSubscriptionData?.innopayPageUrl.contractId &&
    id &&
    rentBookingType === ShortTermRentBookingType.Instant &&
    updateContractData?.updateContract.contract?.apartmentAd?.id === apartmentAdId &&
    updateContractData?.updateContract.contract?.isTemporary === true
  ) {
    setStorageById(id as string, innopayPageUrlSubscriptionData);
  }

  const hasInterruptedPayment = !!lastContractData;
  const isStickyTopHeaderOpened = !!startUrlDate;

  const handleToggleExpiredModal = () => {
    closeInnopayModalOpen();
    closePaymentModal();
    resetStorageById(id as string);
    openExpiredPaymentModal();
    closeStickyTopHeaderPaymentTimerOpen();
  };

  useEffect(() => {
    if (
      lastContractData &&
      updateContractData?.updateContract.contract?.id === lastContractData.innopayPageUrl.contractId &&
      !updateContractData?.updateContract.contract?.isTemporary
    ) {
      resetStorageById(id as string);
      closeStickyTopHeaderPaymentTimerOpen();
    }
  }, [updateContractData]);

  return (
    <MainLayout headTitle={t('headTitle')} childrenForHeader={<HeaderBooking />}>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Container>
        <MainColumn>
          {!isWidthSm && <Breadcrumbs title={title} slug={slug as string} />}
          {isWidthSm && <SelectedHouse address={address} pictureSrc={photo} title={title} />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Section>
              <AppText variant={TextVariants.SECONDARY} font={isWidthSm ? 'title_22_18_medium' : 'title_22_18_bold'}>
                {t('yourBooking')}
              </AppText>
              <InputsContainer>
                <InputWrapper>
                  <FormProvider {...form}>
                    <DatePicker
                      selectsRange
                      areTwoMonth
                      onChange={(date) => setDates(date as Date[])}
                      inputType={DatePickerInputEnum.multiple}
                      isSecondaryMultipleDateInput
                    />
                  </FormProvider>
                </InputWrapper>
                <InputWrapper>
                  <StyledGuestField rules={rules} control={control} getValues={getValues} isFullWidth />
                </InputWrapper>
              </InputsContainer>
            </Section>
            <PaymentFormat
              total={total * bookingDays!}
              departureDate={dates[0]}
              isFullPayment={isFullPayment}
              setIsFullPayment={setIsFullPayment}
            />
            {isWidthLgm && (
              <PriceDetail
                price={showTotal}
                nights={bookingDays}
                total={total}
                isCorrectDate={isCorrectDate}
                address={address}
                guestsNum={numberOfGuestsForApartment}
                pictureSrc={photo}
                rentType={apartmentType}
                title={title}
              />
            )}
            <CommentContainer>
              <AppText variant={TextVariants.SECONDARY} font={isWidthSm ? 'title_22_18_medium' : 'title_22_18_bold'}>
                {t('titleComment')}
              </AppText>
              <Controller
                control={control}
                name="comment"
                rules={{
                  validate: (value) => {
                    if (value?.length > 255) {
                      return 'isLong';
                    }
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <StyledTextarea placeholder={t('placeholder')} hasCounter maxLength={255} error={error} {...field} />
                )}
              />
            </CommentContainer>
            {cancellationPolicy && <CancellationRules />}

            <StyledButton
              text={submitButtonTextMapping[rentBookingType as ShortTermRentBookingType]}
              disabled={!isCorrectDate || !isValid}
              isLoading={loading}
              onClick={handleSubmit(handleRentBookingClick)}
              type="submit"
              variant={ButtonVariant.VIOLET}
            />

            {id && lastContractData && isStickyTopHeaderPaymentTimerOpen && (
              <StickyTopHeaderPaymentTimer
                isVisible={isStickyTopHeaderOpened}
                id={id as string}
                onExpiredPaymentTimer={handleToggleExpiredModal}
              />
            )}

            <ExpiredPaymentModal isVisible={isExpiredPaymentModalOpen} onClose={toggleExpiredPaymentModal} />

            <StyledPaymentModal
              onClose={togglePaymentModal}
              title={t('selectBankCard')}
              isVisible={isPaymentModalOpen}
              isBottomMobile>
              <PaymentModalInnerContainer>
                <>
                  <CardsContainer>
                    {hasInterruptedPayment && (
                      <StyledAppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
                        {t('interruptedPayment')}
                      </StyledAppText>
                    )}
                    {hasBankCards && (
                      <StyledAppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
                        {t('availableBankCards')}
                      </StyledAppText>
                    )}
                    <form>
                      {cards?.map((card, index) => (
                        <Controller
                          key={index}
                          control={control}
                          defaultValue={defaultPayment}
                          name="payment"
                          render={({ field: { value, onChange } }) => {
                            const handleChangeCardId = () => onChange(card.id);

                            return (
                              <Card key={index} onClick={handleChangeCardId}>
                                <RadioButton
                                  name={String(index)}
                                  defaultChecked={index === 0}
                                  checked={value === card.id}
                                  onChange={handleChangeCardId}
                                />
                                <IconContainer>{card.cardType === 'VISA' ? <Visa /> : <Mastercard />}</IconContainer>
                                <CircleContainer>
                                  <Circle />
                                  <Circle />
                                  <Circle />
                                  <Circle />
                                </CircleContainer>
                                <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
                                  {card.panMasked}
                                </AppText>
                              </Card>
                            );
                          }}
                        />
                      ))}
                    </form>
                  </CardsContainer>

                  <StyledAddNewBankCardButton onClick={handleSubmit(onSubmitByNewCard)} />
                </>
                <Button
                  text={t('select')}
                  type="submit"
                  isFullWight
                  disabled={cards?.length === 0}
                  isLoading={loading}
                  onClick={handleSubmit(onSubmit)}
                />
              </PaymentModalInnerContainer>
            </StyledPaymentModal>
          </form>
        </MainColumn>
        {!isWidthLgm && (
          <PriceDetail
            price={showTotal}
            nights={bookingDays}
            total={total}
            isCorrectDate={isCorrectDate}
            address={address}
            guestsNum={numberOfGuestsForApartment}
            pictureSrc={photo}
            rentType={apartmentType}
            title={title}
          />
        )}
      </Container>

      <StyledVerifyModal
        onClose={onCloseInnopayModal}
        withBackOption
        title=""
        onGoBack={handleGoBackFromInnopay}
        isVisible={isInnopayModalOpen}
        isBottomMobile>
        <ModalInnopayEcommerceMethod
          iframeSrc={innopayPageUrlSubscriptionData && innopayPageUrlSubscriptionData.innopayPageUrl.url}
        />
      </StyledVerifyModal>
    </MainLayout>
  );
};

export default BookingPage;

type FormData = {
  comment: string;
  payment: string;
  dateStart: string;
  dateEnd: string;
  numberOfGuests: number;
  numberOfChilds: number;
  numberOfPets: number;
};

const StyledGuestField = styled(GuestField)`
  button {
    border: none;
    padding: 7px 16px;
    gap: 4px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const InputsContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    flex-wrap: nowrap;
    gap: 32px;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const StyledButton = styled(Button)`
  min-width: 288px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-bottom: 64px;
    width: 100%;
  }
`;

const MainColumn = styled.div`
  width: 100%;
  flex: 1;

  @media (min-width: ${BreakpointsEnum.lgm}px) {
    width: 848px;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: -5px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;

  @media (min-width: ${BreakpointsEnum.s}px) {
    margin-top: -21px;
  }
`;

const StyledTextarea = styled(Textarea)`
  margin-top: 24px;

  textarea {
    width: 100%;
    max-width: none;
  }

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 20px;
  }
`;

const CommentContainer = styled.div`
  margin-top: 32px;
`;

const StyledVerifyModal = styled(BaseModal)`
  width: 100%;
  max-width: 672px;
`;

const StyledPaymentModal = styled(BaseModal)`
  width: 100%;
  max-width: 448px;
`;

const IconContainer = styled.div`
  margin-left: 18px;
  margin-right: 8px;
`;

const CircleContainer = styled.div`
  display: flex;
  margin-right: 8px;
  align-items: center;
  gap: 3px;
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

const Card = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  padding: 15px 15px 15px 18px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
  height: 64px;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    padding: 19px 15px 19px 18px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAddNewBankCardButton = styled(AddNewBankCardButton)`
  margin-bottom: 24px;
`;

const StyledAppText = styled(AppText)`
  margin-bottom: 16px;
`;

const PaymentModalInnerContainer = styled.div`
  padding: 8px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
  }
`;
