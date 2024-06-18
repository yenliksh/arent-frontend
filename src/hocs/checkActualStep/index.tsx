import { useReactiveVar } from '@apollo/client';
import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Routes } from '../../constains';
import { useGetStep } from '../../graphql/queries/Advert/__generated__/getStep.query';
import { tokenVar } from '../../libs';
import { StepProps } from '../../types/advert';
import { CookieKeys, getCookie } from '../../utils';

const MAX_STEP_FOR_VALIDATION = 10;

const checkActualStep = (Component: NextComponentType<NextPageContext, StepProps, StepProps>, route: string) => {
  const CheckingActualStep = (props: StepProps) => {
    const router = useRouter();
    const advertId = getCookie('advertId');
    const { data } = useGetStep({
      fetchPolicy: 'network-only',
      variables: {
        input: {
          id: advertId!,
        },
      },
    });
    const step = data?.rentAd__myRentAd.completeStep ? data.rentAd__myRentAd.completeStep + 1 : MAX_STEP_FOR_VALIDATION;
    // const stepByRoute = Steps[route];
    // const currentRoute = StepsByIndex[step! - 1];
    // const isOkay = +stepByRoute > step!;
    // const isFirstStep = route === Routes.adCreate;

    // const [cookieToken, setCookieToken] = useState(getCookie(CookieKeys.TOKEN) || '');
    const token = useReactiveVar(tokenVar);

    useEffect(() => {
      const newCookieToken = getCookie(CookieKeys.TOKEN) || '';
      // setCookieToken(newCookieToken);
      if (!advertId && route !== Routes.adCreate) {
        router.push(Routes.home);
      }

      if (!newCookieToken) {
        router.push(Routes.home);
      }
    }, [token]);

    // useEffect(() => {
    //   if (isOkay && step) {
    //     router.push(currentRoute);
    //   }
    // }, [step]);

    // const isReturnNull = isOkay || !cookieToken || (!isFirstStep && !data);

    return <Component {...props} step={step !== MAX_STEP_FOR_VALIDATION ? String(step) : '1'} />;
  };

  return CheckingActualStep;
};

export default checkActualStep;
