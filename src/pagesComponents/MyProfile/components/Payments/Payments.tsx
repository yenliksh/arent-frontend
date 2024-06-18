import { InnopayAppointmentCardType } from '__generated__/types';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, TextTabs } from 'ui';

import { BankCards } from './components';
import { OneTimePayments } from './components/OneTimePayments';
import SubscriptionPayments from './components/SubscriptionPayments/SubscriptionPayments';
import usePaymentsLoading from './hooks/usePaymentsLoading';
import PaymentsSkeleton from './PaymentsSkeleton';

const Payments: FC = () => {
  const { t } = useTranslation('profilePage', { keyPrefix: 'payments' });
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [currentBankCardTabIndex, setCurrentBankCardTabIndex] = useState(0);

  const isLoading = usePaymentsLoading();

  const tabs = [
    { title: t('bySubscription'), value: TabsValue.BY_SUBSCRIPTION, component: <SubscriptionPayments /> },
    { title: t('oneTime'), value: TabsValue.ONE_TIME, component: <OneTimePayments /> },
  ];

  const bankCardTabs = [
    {
      title: t('forPayment'),
      value: MyCardsTabsValue.FOR_PAYMENT,
      component: (
        <>
          <StyledAppText font="body_24_16_regular">{t('usedForRentPayments')}</StyledAppText>
          <BankCards activeAppointmentType={InnopayAppointmentCardType.ChargeOff} />
        </>
      ),
    },
    {
      title: t('forWithdraw'),
      value: MyCardsTabsValue.FOR_WITHDRAW,
      component: (
        <>
          <StyledAppText font="body_24_16_regular">{t('usedForRentWithdraw')}</StyledAppText>
          <BankCards activeAppointmentType={InnopayAppointmentCardType.Crediting} />
        </>
      ),
    },
  ];

  const currentTab = tabs[currentTabIndex];
  const currentBankTab = bankCardTabs[currentBankCardTabIndex];

  const handleChangeActiveTab = (currentTabIndex: number) => () => {
    setCurrentTabIndex(currentTabIndex);
  };

  const handleChangeActiveBankCardTab = (currentTabIndex: number) => () => {
    setCurrentBankCardTabIndex(currentTabIndex);
  };

  return (
    <>
      {isLoading ? (
        <Root>
          <Title variant={TextVariants.SECONDARY}>{t('myCards')}</Title>
          <TabsContainer>
            <StyledTextTab
              isSmall
              tabs={bankCardTabs}
              activeTab={bankCardTabs[currentBankCardTabIndex]}
              handleChangeActiveTab={handleChangeActiveBankCardTab}
            />
          </TabsContainer>
          {currentBankTab?.component}
          <Title variant={TextVariants.SECONDARY}>{t('history')}</Title>
          <TabsContainer>
            <StyledTextTab
              isSmall
              tabs={tabs}
              activeTab={tabs[currentTabIndex]}
              handleChangeActiveTab={handleChangeActiveTab}
            />
          </TabsContainer>
          <ContentContainer>{currentTab?.component}</ContentContainer>
        </Root>
      ) : (
        <PaymentsSkeleton />
      )}
    </>
  );
};

export default Payments;

enum TabsValue {
  BY_SUBSCRIPTION = 'BY_SUBSCRIPTION',
  ONE_TIME = 'ONE_TIME',
}

enum MyCardsTabsValue {
  FOR_PAYMENT = 'FOR_PAYMENT',
  FOR_WITHDRAW = 'FOR_WITHDRAW',
}

const Root = styled.div`
  max-width: 848px;
  margin-bottom: 80px;
  padding: 24px 16px 16px 16px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    padding: 40px;
    margin-top: 32px;
    border-radius: 21px;
  }
`;

const Title = styled(AppText)`
  margin-bottom: 24px;
  ${({ theme: { typography } }) => typography.title_22_18_bold};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_36_26_bold}
  }
`;

const TabsContainer = styled.div`
  margin-bottom: 24px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
`;

const StyledTextTab = styled(TextTabs)`
  @media (max-width: ${BreakpointsEnum.sm}px) {
    li {
      ${({ theme: { typography } }) => typography.body_24_16_medium}
    }
  }
`;

const StyledAppText = styled(AppText)`
  margin-bottom: 24px;
`;

const ContentContainer = styled.div``;
