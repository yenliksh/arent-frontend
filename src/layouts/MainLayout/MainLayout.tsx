import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';

import { Header } from './components/Header';

const Footer = dynamic(() => import('./components/Footer/Footer'), { ssr: false });

type MainLayoutProps = {
  isSecondaryHeader?: boolean;
  isSecondaryBackground?: boolean;
  headTitle: string;
  childrenForHeader?: ReactNode;
  children: ReactNode;
  customHeader?: ReactNode;
  className?: string;
  filters?: ReactNode;
  hideFooter?: boolean;
};

const MainLayout: FC<MainLayoutProps> = ({
  isSecondaryHeader = false,
  isSecondaryBackground = false,
  headTitle,
  children,
  customHeader,
  className,
  childrenForHeader,
  filters,
  hideFooter,
}) => {
  return (
    <Root $isSecondaryBackground={isSecondaryBackground}>
      <Head>
        <link rel="preload" href="/fonts/EuclidCircularB-SemiBold.woff2" as="font" />
        <link rel="preload" href="/fonts/EuclidCircularB-Bold.woff2" as="font" />
        <link rel="preload" href="/fonts/EuclidCircularB-Medium.woff2" as="font" />
        <link rel="preload" href="/fonts/EuclidCircularB-Regular.woff2" as="font" />
        <link rel="preload" href="/fonts/EuclidCircularB-Light.woff2" as="font" />
        <link rel="preconnect" href="https://d1ozbl7uifqnph.cloudfront.net/" />
        <title>{headTitle}</title>
      </Head>
      {customHeader || (
        <Header isSecondary={isSecondaryHeader} filters={filters}>
          {childrenForHeader}
        </Header>
      )}
      <Main className={className}>{children}</Main>
      {!hideFooter && <Footer />}
    </Root>
  );
};

export default MainLayout;

const Root = styled.div<{ $isSecondaryBackground: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme: { colors }, $isSecondaryBackground }) =>
    $isSecondaryBackground ? colors.greyScale[10] : colors.greyScale[0]};
`;

const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: 0 auto;
  padding: 32px 72px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 48px;
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    padding: 12px 16px;
  }
`;
