import { useTranslation } from 'next-i18next';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Oval as Loader } from 'react-loader-spinner';
import styled, { useTheme } from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

import { CloseCircle, TickCircle } from '../../../public/svg/components';
import { PaymentHistorySearchType } from '../../__generated__/types';
import { usePayManually } from '../../graphql/mutations/User/__generated__/manuallyPay.mutation';
import { useGetHistoryInvoiceLazyQuery } from '../../graphql/queries/User/__generated__/getHistoryInvoice.query';
import { manualyPayError } from '../../libs';

type SelfPaymentModalProps = {
  id: string;
};

enum StatesEnum {
  LOADING,
  SUCCESS,
  ERROR,
}

const SelfPaymentModal: FC<SelfPaymentModalProps> = ({ id }) => {
  const { t } = useTranslation('paymentPage', { keyPrefix: 'states' });
  const { colors } = useTheme();
  const [currentState, setCurrentState] = useState(StatesEnum.LOADING);
  const [getHistoryInvoices] = useGetHistoryInvoiceLazyQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        limit: 6,
        paymentSearchType: PaymentHistorySearchType.Recurring,
      },
    },
  });

  const onCompleted = async () => {
    setCurrentState(StatesEnum.SUCCESS);
  };

  const onError = () => {
    manualyPayError(true);
    setCurrentState(StatesEnum.ERROR);
  };

  const [fetchManuallyPay] = usePayManually({
    variables: {
      input: {
        id,
      },
    },
    onError,
    onCompleted,
  });

  const states = useMemo(
    () => ({
      [StatesEnum.LOADING]: {
        title: t('paymentInProgress'),
        description: null,
        icon: (
          <Loader
            width={40}
            height={40}
            strokeWidth={3}
            strokeWidthSecondary={3}
            color={colors.greyScale[100]}
            secondaryColor={colors.greyScale[30]}
          />
        ),
      },
      [StatesEnum.SUCCESS]: {
        title: t('paymentMade'),
        description: null,
        icon: <TickCircle color={colors.additional.green} width={40} height={40} />,
      },
      [StatesEnum.ERROR]: {
        title: t('error.title'),
        description: t('error.description'),
        icon: <CloseCircle width={40} height={40} />,
      },
    }),
    [t],
  );

  const paymentState = states[currentState];

  const pay = async () => {
    await fetchManuallyPay();
    await getHistoryInvoices();
  };

  useEffect(() => {
    pay();
  }, []);
  return (
    <Root>
      <StateContainer>
        {paymentState.icon}
        <StateWrapper>
          <AppText font="title_22_18_medium" variant={TextVariants.SECONDARY}>
            {paymentState.title}
          </AppText>
          {paymentState.description && <AppText font="body_24_16_regular">{paymentState.description}</AppText>}
        </StateWrapper>
        {/* {isError && <StyledButton text={t('error.buttonText')} />} */}
      </StateContainer>
    </Root>
  );
};

export default SelfPaymentModal;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-items: center;
`;

const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-items: center;
`;
