import { Routes } from 'constains';
import { useGetLightMeLazyQuery } from 'graphql/queries/User/__generated__/getLightMe.query';
import { useClientSize } from 'hooks';
import { MainLayout } from 'layouts';
import { authRoute, loginModalVar, logout as logoutCache } from 'libs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import TextTabs from 'ui/TextTabs/TextTabs';
import { setCookie } from 'utils';

import { ArrowRight, Exit, House, Notification, Private, User } from '../../../public/svg/components';
import { MyBookings, Payments, PersonalInfo, Security } from './components';
import { HeaderMyProfile } from './components/HeaderMyProfile';

const MyProfile: FC = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>();
  const router = useRouter();

  const { getIsBreakpoint } = useClientSize();
  const { t } = useTranslation('profilePage', { keyPrefix: 'myProfile' });
  const { t: tHeader } = useTranslation('ui', { keyPrefix: 'header' });

  const isSBreakpoint = getIsBreakpoint('sm');

  // eslint-disable-next-line no-unused-vars
  const [_, { data }] = useGetLightMeLazyQuery();

  const user = data?.user__me;

  const tabs = useMemo(
    () => [
      {
        title: t('personalInformation'),
        value: TabsValue.PERSONAL_INFO,
        query: TabsQueryValueEnum.PERSONAL_INFO,
        component: <PersonalInfo />,
        icon: <User />,
      },
      {
        title: t('security'),
        value: TabsValue.SECURITY,
        query: TabsQueryValueEnum.SECURITY,
        component: <Security />,
        icon: <Notification />,
      },
      {
        title: t('payments'),
        value: TabsValue.PAYMENTS,
        query: TabsQueryValueEnum.PAYMENTS,
        component: <Payments />,
        icon: <Private />,
      },
      {
        title: t('myBookings'),
        value: TabsValue.MY_BOOKINGS,
        query: TabsQueryValueEnum.MY_BOOKINGS,
        component: <MyBookings />,
        icon: <House />,
      },
    ],

    [t],
  );

  const currentTab = currentTabIndex !== undefined ? tabs[currentTabIndex] : isSBreakpoint ? null : tabs[0];

  const handleChangeActiveTab = (currentTabIndex: number) => () => {
    const selectedTab = tabs[currentTabIndex];
    router.push(
      {
        pathname: router.pathname,
        query: {
          activeTab: selectedTab.query,
        },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  const handleChangeTab = (currentTabIndex: number) => {
    setCurrentTabIndex(currentTabIndex);
    const selectedTab = tabs[currentTabIndex];
    router.push(
      {
        pathname: router.pathname,
        query: {
          activeTab: selectedTab.query,
        },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  const setActiveTab = () => {
    const activeTabFromQuery = router.query.activeTab as TabsQueryValueEnum;
    if (!activeTabFromQuery) {
      setCurrentTabIndex(undefined);
      return;
    }
    const activeTab = tabs.findIndex((tab) => tab.query === activeTabFromQuery);
    if (activeTab >= 0) {
      setCurrentTabIndex(activeTab);
    }
  };

  useEffect(() => {
    setActiveTab();
  }, [router.query]);

  const isWidthLg = getIsBreakpoint('lg');

  const routeToCreateAdPage = () => {
    if (user?.id) {
      loginModalVar({ isAuthModalOpen: false });
      setCookie('advertId', '');
      router.push(Routes.adCreate);
    } else {
      authRoute(Routes.adCreate);
      loginModalVar({ isAuthModalOpen: true });
    }
  };

  const logout = () => {
    logoutCache();
  };

  return (
    <StyledMainLayout
      headTitle={t('headTitle')}
      isSecondaryBackground
      childrenForHeader={<HeaderMyProfile title={currentTab?.title} />}>
      <Root>
        {isSBreakpoint && currentTabIndex === undefined ? (
          <MobileWrapper>
            <AppText font="title_36_26_bold">{t('title')}</AppText>
            <Wrapper>
              <AppText font="body_20_14_regular">{t('description')}</AppText>
              <LinkButton
                onClick={routeToCreateAdPage}
                variant={ButtonVariant.VIOLET}
                size={ButtonSize.NORMAL}
                text={tHeader('userDropDown.links.becomeAnOwner')}
              />
            </Wrapper>
            {tabs.map((tab, index) => {
              return (
                <TabWrapper key={index} onClick={() => handleChangeTab(index)}>
                  <Info>
                    {tab.icon}
                    <AppText font="body_18_16_medium">{tab.title}</AppText>
                  </Info>
                  <ArrowRight />
                </TabWrapper>
              );
            })}
            <TabWrapper onClick={logout}>
              <Info>
                <Exit />
                <ExitText font="body_18_16_medium">{t('exit')}</ExitText>
              </Info>
              <ArrowRight />
            </TabWrapper>
          </MobileWrapper>
        ) : (
          !isSBreakpoint && (
            <TopContainer>
              <TopContentContainer>
                <TopInnerContentContainer>
                  <Container>
                    <StyledAppText variant={TextVariants.SECONDARY}>{t('personalAccount')}</StyledAppText>
                    <TabsContainer>
                      <TextTabs
                        isSmall={isWidthLg}
                        tabs={tabs}
                        activeTab={tabs[currentTabIndex || 0]}
                        handleChangeActiveTab={handleChangeActiveTab}
                      />
                    </TabsContainer>
                  </Container>
                </TopInnerContentContainer>
              </TopContentContainer>
            </TopContainer>
          )
        )}
        {currentTab && (
          <ContentContainer>
            <InnerContentContainer>
              <InnerContainer>{currentTab?.component}</InnerContainer>
            </InnerContentContainer>
          </ContentContainer>
        )}
      </Root>
    </StyledMainLayout>
  );
};

export default MyProfile;

enum TabsValue {
  PERSONAL_INFO = 'Личная информация',
  NOTIFICATIONS = 'Уведомления',
  SECURITY = 'Безопасность',
  PAYMENTS = 'Платежи',
  MY_BOOKINGS = 'Мои бронирования',
  BUSINESS_TRIPS = 'Деловые поездки',
}

enum TabsQueryValueEnum {
  PERSONAL_INFO = 'PERSONAL_INFO',
  NOTIFICATIONS = 'NOTIFICATIONS',
  SECURITY = 'SECURITY',
  PAYMENTS = 'PAYMENTS',
  MY_BOOKINGS = 'MY_BOOKINGS',
  BUSINESS_TRIPS = 'BUSINESS_TRIPS',
}

const StyledAppText = styled(AppText)`
  ${({ theme: { typography } }) => typography.title_48_40_bold};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_38_32_bold}
  }
`;
const StyledMainLayout = styled(MainLayout)`
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
`;
const ContentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${BreakpointsEnum.md}px) {
    margin: 0;
  }
`;
const TopContainer = styled.div`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
`;
const TopContentContainer = styled(ContentContainer)`
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
`;
const InnerContentContainer = styled.div`
  padding: 0 72px;

  @media (max-width: ${BreakpointsEnum.md}px) {
    padding: 0 16px;
  }
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 0;
  }
`;
const TopInnerContentContainer = styled.div`
  padding: 0 72px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  @media (max-width: ${BreakpointsEnum.md}px) {
    padding: 0 16px;
  }
`;
const Root = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  margin-bottom: -32px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    margin-top: -15px;
  }
`;
const Container = styled.div`
  width: 100%;
  padding-top: 36px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};

  @media (max-width: ${BreakpointsEnum.md}px) {
    padding-top: 25px;
  }
`;
const TabsContainer = styled.div`
  margin-top: 37px;

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }

  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 33px;
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const InnerContainer = styled.div`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.greyScale[10]};
`;

const Wrapper = styled.div`
  border-radius: 12px;
  padding: 16px 14px;
  background: ${({ theme: { colors } }) => colors.purpleScale[0]};
  margin-top: 20px;
`;

const LinkButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

const MobileWrapper = styled.div`
  padding: 16px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  margin-bottom: 80px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const TabWrapper = styled.button`
  border-radius: 12px;
  padding: 16px 14px;
  background: ${({ theme: { colors } }) => colors.greyScale[10]};
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ExitText = styled(AppText)`
  color: ${({ theme: { colors } }) => colors.additional.red};
`;
