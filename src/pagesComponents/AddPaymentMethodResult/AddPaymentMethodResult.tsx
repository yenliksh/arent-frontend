import { innopayCardCompleteVar } from 'libs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

import { CloseCircle, TickCircle } from '../../../public/svg/components';

enum StatesEnum {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

const AddPaymentMethodResult = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { t } = useTranslation('cardLinkingPage', { keyPrefix: 'states' });
  const { status } = router.query;
  const currentState = status === StatesEnum.SUCCESS ? StatesEnum.SUCCESS : StatesEnum.FAILURE;

  innopayCardCompleteVar(true);

  const states = useMemo(
    () => ({
      [StatesEnum.SUCCESS]: {
        title: t('paymentMade'),
        description: null,
        icon: <TickCircle color={colors.additional.green} width={40} height={40} />,
      },
      [StatesEnum.FAILURE]: {
        title: t('error.title'),
        description: t('error.description'),
        icon: <CloseCircle width={40} height={40} />,
      },
    }),
    [t],
  );

  const paymentState = states[currentState];

  return (
    <Root>
      <StateContainer>
        {paymentState.icon}
        <StateWrapper>
          <AppText font="title_22_18_medium" variant={TextVariants.SECONDARY}>
            {paymentState.title}
          </AppText>
          {paymentState.description && (
            <StyledAppText font="body_24_16_regular">{paymentState.description}</StyledAppText>
          )}
        </StateWrapper>
      </StateContainer>
    </Root>
  );
};

export default AddPaymentMethodResult;

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 232px;
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-items: center;
`;

const StyledAppText = styled(AppText)`
  text-align: center;
  max-width: 262px;
`;
