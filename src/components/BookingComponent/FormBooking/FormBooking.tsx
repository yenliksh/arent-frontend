import { FEE_PERCENTS_SHORT_TERM, nightsPlural, Routes } from 'constains';
import useAuthAction from 'hooks/useAuthAction';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { dayjs, notify } from 'services';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText, Button, DatePicker } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { DatePickerInputEnum } from 'ui/DatePicker/DatePicker';
import {
  areIntersected,
  getPercentOnRent,
  handleDivisionOnCategories,
  handleWordsDeclination,
  minDateForRequest,
} from 'utils';

import { RentPeriodType } from '../../../__generated__/types';
import { useGetLongTermRentAdLazyQuery } from '../../../graphql/queries/Apartments/__generated__/GetLongTermApartment.gql';
import { useGetShortTermRentAdLazyQuery } from '../../../graphql/queries/Apartments/__generated__/getShortTermApartment.gql';
import { GuestField } from './components';

type FormBookingProps = {
  cost: number;
  lockedDates?: Array<{ startDate: string; endDate: string }>;
  isPaused?: boolean;
};

const FormBooking: FC<FormBookingProps> = ({ cost, isPaused, lockedDates }) => {
  const [bookingDays, setBookingDays] = useState<number | undefined>();
  const [isCorrectDate, setIsCorrectDate] = useState(false);
  const [isLockedDatesError, setIsLockedDatesError] = useState(false);

  const { t } = useTranslation('ui');
  const router = useRouter();
  const { query } = router;
  const { guests, kids, pets, dateStartInitial, dateEndInitial, slug } = query;

  const { id, type } = router.query;

  const [fetchShortTermAdvert, { data: shortTermData }] = useGetShortTermRentAdLazyQuery({
    variables: {
      id: { id: id as string },
    },
    fetchPolicy: 'cache-and-network',
  });

  const [fetchLongTermAdvert, { data: longTermData }] = useGetLongTermRentAdLazyQuery({
    variables: {
      id: { id: id as string },
    },
    fetchPolicy: 'cache-and-network',
  });

  const typeRentApartment =
    shortTermData?.rentAd__find_shortTermRentAd?.data || longTermData?.rentAd__find_longTermAd?.data || undefined;

  const rules = typeRentApartment?.apartmentAd.rules;

  const [dates, setDates] = useState<Date[]>([]);

  const form = useForm<InputData>({
    defaultValues: {
      numberOfGuests: Number(guests) || 1,
      numberOfChilds: Number(kids) || 0,
      numberOfPets: Number(pets) || 0,
      dateStart: dateStartInitial ? dayjs(dateStartInitial as string).format('DD MMMM YYYY') : '',
      dateEnd: dateStartInitial ? dayjs(dateEndInitial as string).format('DD MMMM YYYY') : '',
    },
    mode: 'onChange',
  });

  const { handleSubmit, control, getValues, watch } = form;

  const routeToBooking = async (data: InputData) => {
    await router.push(
      {
        pathname: router.pathname,
        query: {
          ...query,
          dateStartInitial: String(dates[0]),
          dateEndInitial: String(dates[1]),
        },
      },
      undefined,
      {
        shallow: true,
      },
    );
    await router.push({
      pathname: `${Routes.booking}/${slug}`,
      query: {
        ...query,
        dateStartInitial: String(dates[0]),
        dateEndInitial: String(dates[1]),
        numberOfGuests: data.numberOfGuests,
        numberOfChild: data.numberOfChilds,
        numberOfPets: data.numberOfPets,
        nightsInitial: Number(bookingDays),
        id,
        type: query.type,
      },
    });
  };

  const { action } = useAuthAction(routeToBooking);

  const onSubmit = async (data: InputData) => {
    if (isLockedDatesError) {
      notify('Выбранные вами даты недоступны');
    } else {
      await action(data);
    }
  };

  const serviceCommission = Math.round(getPercentOnRent(cost, FEE_PERCENTS_SHORT_TERM));
  const showCost = handleDivisionOnCategories(String(cost + serviceCommission));
  const highTitle = bookingDays
    ? `${showCost} 〒 х ${bookingDays} ${handleWordsDeclination(bookingDays, nightsPlural)}`
    : '';
  const resultText = bookingDays
    ? `${handleDivisionOnCategories(String((cost + serviceCommission) * bookingDays))} 〒`
    : '';

  const parsedMinDate = Date.parse(minDateForRequest.toISOString());

  const calculateCostFromQuery = () => {
    if (dateEndInitial && dateStartInitial) {
      setDates([dayjs(dateStartInitial as string).toDate(), dayjs(dateEndInitial as string).toDate()]);
      const dateStart = dayjs(dateStartInitial as string);
      const dateEnd = dayjs(dateEndInitial as string);
      const dateDifferenceInDays = dateEnd.diff(dateStart, 'day');
      setBookingDays(dateDifferenceInDays);
      setIsCorrectDate(true);
    }
  };

  const validationDate = () => {
    const dateStart = dayjs(dates?.[0]);
    const dateEnd = dayjs(dates?.[1]);

    const dateDifferenceInDays = dateEnd.diff(dateStart, 'day');
    setBookingDays(dateDifferenceInDays);

    const parsedStartDate = Date.parse(String(dates[0]));

    const hasDateDifferenceInDays = dateDifferenceInDays > 0;
    const isDateMoreThanMinDate = parsedStartDate >= parsedMinDate;
    const isCorrectDate = isDateMoreThanMinDate && hasDateDifferenceInDays;
    const lockedDatesFromForm = {
      endDate: dayjs(dateEnd).format('YYYY-MM-DD'),
      startDate: dayjs(dateStart).format('YYYY-MM-DD'),
    };
    const allLockedDates = [lockedDatesFromForm, ...(lockedDates || [])];

    if (areIntersected(allLockedDates)) {
      setIsLockedDatesError(true);
    } else {
      setIsLockedDatesError(false);
    }

    setIsCorrectDate(isCorrectDate);
  };

  watch(validationDate);

  useEffect(() => {
    if (type === RentPeriodType.LongTerm) {
      fetchLongTermAdvert();
    }
    if (type === RentPeriodType.ShortTerm) {
      fetchShortTermAdvert();
    }
  }, [type]);

  useEffect(() => {
    calculateCostFromQuery();
  }, [router.query]);

  return (
    <>
      <StyledForm name="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...form}>
          <DatePicker
            selectsRange
            areTwoMonth
            minDate={new Date()}
            onChange={(date) => setDates(date as Date[])}
            inputType={DatePickerInputEnum.multiple}
          />
        </FormProvider>
        <StyledGuestField rules={rules} control={control} getValues={getValues} />
        {isCorrectDate && (
          <>
            <CalculationContainer>
              <HighCalculationItem>
                <StyledAppText font="body_24_16_regular">{highTitle}</StyledAppText>
                <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
                  {resultText}
                </AppText>
              </HighCalculationItem>
              <CalculationItem>
                <StyledAppText font="body_24_16_regular">{t('forms.feeShortTerm')}</StyledAppText>
                <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
                  {t('forms.enabled')}
                </AppText>
              </CalculationItem>
              <LowCalculationItem>
                <StyledAppText font="body_24_16_regular">{t('forms.total')}</StyledAppText>
                <AppText variant={TextVariants.SECONDARY} font="body_24_16_medium">
                  {resultText}
                </AppText>
              </LowCalculationItem>
            </CalculationContainer>
            <StyledButton
              type="submit"
              text={t('buttons.btnToBook')}
              size={ButtonSize.NORMAL}
              disabled={isPaused}
              variant={ButtonVariant.VIOLET}
            />
          </>
        )}
      </StyledForm>
      {!isCorrectDate && (
        <StyledButton
          text={t('forms.book')}
          size={ButtonSize.NORMAL}
          disabled={isPaused}
          variant={ButtonVariant.VIOLET}
        />
      )}
    </>
  );
};

type InputData = {
  dateStart?: string;
  dateEnd?: string;
  numberOfGuests?: number;
  numberOfChilds?: number;
  numberOfPets?: number;
};

const StyledForm = styled.form`
  .react-datepicker-popper {
    transform: translate(-91px, 216px) !important;
  }
`;

const StyledAppText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const CalculationItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;

const LowCalculationItem = styled.div`
  margin: 16px 0 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HighCalculationItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CalculationContainer = styled.div``;

const StyledGuestField = styled(GuestField)`
  max-width: 400px !important;
  width: 100% !important;
  margin: 13px 0 24px !important;
  div {
    max-width: 400px !important;
    width: 100%;
    p {
      width: 100%;
    }
    &div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default FormBooking;
