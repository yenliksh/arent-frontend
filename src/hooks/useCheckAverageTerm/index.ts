import { useReactiveVar } from '@apollo/client';
import { averageTerm } from 'libs';
import { useEffect } from 'react';
import { calculateMonths } from 'utils';

const MINIMAL_MONTHS_FOR_AVERAGE_TERM = 1;

const MAXIMUM_MONTHS_FOR_AVERAGE_TERM = 3;

const useCheckAverageTerm = (startDate: Date, endDate: Date) => {
  const isAverageTerm = useReactiveVar(averageTerm);

  const checkOnAverageTerm = () => {
    const long = calculateMonths(startDate, endDate);
    if (long < MAXIMUM_MONTHS_FOR_AVERAGE_TERM && long > MINIMAL_MONTHS_FOR_AVERAGE_TERM) {
      averageTerm(true);
    } else {
      averageTerm(false);
    }
  };

  useEffect(() => {
    checkOnAverageTerm();
  }, [startDate, endDate]);

  return isAverageTerm;
};

export default useCheckAverageTerm;
