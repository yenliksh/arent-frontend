import { UserChatRole } from '__generated__/types';
import { Chat } from 'components';
import { Routes } from 'constains';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Button, IconButton, TextTabs } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { getQueryFromUrl, setCookie } from 'utils';

import { ArrowLeft } from '../../../../../public/svg/components';
import { Ads, Requests } from '../index';

enum TabsValueType {
  ADS = 'ADS',
  REQUESTS = 'REQUESTS',
  CHAT = 'CHAT',
}

const CHAT_TAB_INDEX = 2;

const Header: FC = () => {
  const router = useRouter();
  const query = getQueryFromUrl(router.asPath);

  const isChat = Boolean(+query.isChat);

  const [currentTabIndex, setCurrentTabIndex] = useState(isChat ? CHAT_TAB_INDEX : 0);
  const { t } = useTranslation('myAdsPage', { keyPrefix: 'header' });
  const { ref } = useInView();

  const tabs = [
    { title: t('adsTab'), value: TabsValueType.ADS, component: <Ads /> },
    { title: t('requestTab'), value: TabsValueType.REQUESTS, component: <Requests /> },
    { title: t('chatTab'), value: TabsValueType.CHAT, component: <StyledChat chatRole={UserChatRole.Landlord} /> },
  ];

  const currentTab = tabs[currentTabIndex];

  const isCurrentTabChat = currentTab.value === TabsValueType.CHAT;

  const handleChangeActiveTab = (currentTabIndex: number) => () => {
    const selectedTab = tabs[currentTabIndex];
    router.push(
      {
        pathname: router.pathname,
        query: {
          activeTab: selectedTab.value,
        },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  const goToCreateAdd = () => {
    setCookie('advertId', '');
    router.push(Routes.adCreate);
  };

  const setActiveTab = () => {
    const activeTabFromQuery = router.query.activeTab as TabsValueType;
    const activeTab = tabs.findIndex((tab) => tab.value === activeTabFromQuery);
    if (activeTab >= 0) {
      setCurrentTabIndex(activeTab);
    }
  };

  useEffect(() => {
    setActiveTab();
  }, [router.query]);

  const returnBack = () => {
    router.push(Routes.home);
  };

  return (
    <MainContainer>
      <HeadContainer>
        <TitleBlock ref={ref}>
          <LeftContainer>
            <ReturnButton IconComponent={ArrowLeft} onClick={returnBack} />
            <TitleText variant={TextVariants.SECONDARY} font="title_48_40_bold">
              {t('myAds')}
            </TitleText>
          </LeftContainer>
          <NewAddButton
            onClick={goToCreateAdd}
            size={ButtonSize.LONG_TEXT}
            text={t('btnAddNewAd')}
            variant={ButtonVariant.VIOLET}
          />
        </TitleBlock>
        <TextTabs tabs={tabs} activeTab={tabs[currentTabIndex]} handleChangeActiveTab={handleChangeActiveTab} />
      </HeadContainer>
      <InnerContainer>
        <Content $isCurrentTabChat={isCurrentTabChat}>{currentTab?.component}</Content>
      </InnerContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeadContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 24px 72px 0;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 25px 16px 0;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17px auto 40px;
  width: 100%;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 0px auto 33px;
    flex-direction: column;
    gap: 18px;
    align-items: center;
    height: max-content;
  }
`;

const TitleText = styled(AppText)`
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_38_32_bold}
  }
`;

const NewAddButton = styled(Button)`
  width: max-content;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.greyScale[10]};
  `}
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme }) => css`
      background-color: ${theme.colors.greyScale[0]};
    `}
  }
`;

const Content = styled.div<{ $isCurrentTabChat: boolean }>`
  display: flex;
  flex-direction: column;
  margin: ${({ $isCurrentTabChat }) => ($isCurrentTabChat ? '16px 72px 24px' : '40px 80px')};
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 0;
  }
`;

const StyledChat = styled(Chat)`
  height: 618px;
`;

const LeftContainer = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    text-align: center;
  }
`;

const ReturnButton = styled(IconButton)`
  display: none;
  position: absolute;
  left: 0;
  box-shadow: none !important;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    display: block;
  }
`;

export default Header;
