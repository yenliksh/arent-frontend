import { MainLayout } from 'layouts';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, DocumentsTabsSlug, TextVariants } from 'types';
import { AppText } from 'ui';

import {
  Agreement,
  ConditionsForOwner,
  ConditionsForTenant,
  Navigation,
  PrivacyPolicy,
  TermsOfUse,
} from './components';

const DocumentsPage = () => {
  const { t } = useTranslation('documentsPage');

  const tabs = useMemo(
    () => [
      {
        title: t('privacyPolicy'),
        slug: DocumentsTabsSlug.PRIVACY_POLICY,
        component: <PrivacyPolicy />,
        metaTitle: 'Соблюдение конфиденциальности при использовании сайта | Arent',
      },
      {
        title: t('termsOfUse'),
        slug: DocumentsTabsSlug.TERMS_OF_USE,
        component: <TermsOfUse />,
        metaTitle: 'Условия использования сайта | Arent',
      },
      {
        title: t('conditionsForOwner'),
        slug: DocumentsTabsSlug.CONDITIONS_FOR_OWNER,
        component: <ConditionsForOwner />,
      },
      {
        title: t('conditionsForTenant'),
        slug: DocumentsTabsSlug.CONDITIONS_FOR_TENANT,
        component: <ConditionsForTenant />,
      },
      {
        title: t('agreement'),
        slug: DocumentsTabsSlug.AGREEMENT,
        component: <Agreement />,
      },
    ],
    [t],
  );

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const router = useRouter();

  const handleToggleActiveTab = (slug: string) => {
    const activeTabFromQuery = slug as DocumentsTabsSlug;
    const activeTab = tabs.findIndex(({ slug }) => slug === activeTabFromQuery);

    if (activeTab >= 0) {
      setCurrentTabIndex(activeTab);
    }
  };

  useEffect(() => {
    handleToggleActiveTab(router.query.slug as string);
  }, [router.query.slug]);

  const currentTab = tabs[currentTabIndex];
  const currentTabComponent = currentTab.component;

  return (
    <StyledMainLayout headTitle={currentTab?.metaTitle || t('title')} isSecondaryBackground>
      <section>
        <Header>
          <HeaderContainer>
            <Title variant={TextVariants.SECONDARY}>{t('title')}</Title>
          </HeaderContainer>
        </Header>

        <Body>
          <InfoContainer>
            <Info>{currentTabComponent}</Info>
          </InfoContainer>

          <NavigationContainer>
            <Navigation tabs={tabs} activeTab={currentTab} />
          </NavigationContainer>
        </Body>
      </section>
    </StyledMainLayout>
  );
};

const StyledMainLayout = styled(MainLayout)`
  --headerHeight: 84px;

  padding: 0;
  max-width: unset;
  min-height: calc(100vh - var(--headerHeight));

  @media (max-width: ${BreakpointsEnum.s}px) {
    --headerHeight: 72px;

    background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
  }
`;

const Container = styled.div`
  --horizontalIndent: 72px;

  margin: 0 auto;
  padding-left: var(--horizontalIndent);
  padding-right: var(--horizontalIndent);
  max-width: 1440px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    --horizontalIndent: 48px;
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    --horizontalIndent: 16px;
  }
`;

const Header = styled.div`
  background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
`;

const HeaderContainer = styled(Container)`
  padding-top: 26px;
  padding-bottom: 32px;
`;

const Title = styled(AppText)`
  ${({ theme: { typography } }) => typography.title_48_40_bold};

  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_38_32_bold}
  }
`;

const Body = styled(Container)`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

const InfoContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  width: 100%;

  @media (max-width: ${BreakpointsEnum.s}px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media (min-width: ${BreakpointsEnum.lgm + 1}px) {
    margin: 0;
    padding: 0;
    max-width: initial;
  }
`;

const Info = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.greyScale[0]};

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${BreakpointsEnum.s + 1}px) {
    border-radius: 21px;
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    padding: 0;
  }
`;

const NavigationContainer = styled(Container)`
  width: 100%;

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
  }

  @media (min-width: ${BreakpointsEnum.lgm + 1}px) {
    margin: 0 0 0 48px;
    padding: 0;
    max-width: initial;
    width: 400px;
  }
`;

export default DocumentsPage;
