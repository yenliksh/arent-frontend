import { useReactiveVar } from '@apollo/client';
import { Auth } from 'components/Auth';
import { ProfileButton } from 'components/ProfileButton';
import { Routes } from 'constains';
import { useGetLightMeLazyQuery } from 'graphql/queries/User/__generated__/getLightMe.query';
import useClientSize from 'hooks/useClientSize';
import useToggle from 'hooks/useToggle';
import useWindowScroll from 'hooks/useWindowScroll';
import { authRoute, loginModalVar } from 'libs/apollo-client/react-variables';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { FC, ReactNode, useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum } from 'types';
import { CookieKeys, getCookie, setCookie } from 'utils/cookie';

import SvgLogoArent from '../../../../../public/svg/components/SvgLogoArent';
import { BottomNavbar } from '../BottomNavbar';

type HeaderProps = {
  isSecondary: boolean;
  children?: ReactNode;
  filters?: ReactNode;
};

const Header: FC<HeaderProps> = ({ isSecondary, children, filters }) => {
  const router = useRouter();
  const { t } = useTranslation('ui', { keyPrefix: 'header' });

  const { scrollY } = useWindowScroll();
  const { isAuthModalOpen } = useReactiveVar(loginModalVar);
  const { isOpened, close } = useToggle();
  const token = getCookie(CookieKeys.TOKEN);
  const isAdvertPage = router.pathname.includes(Routes.adCreate);
  const isDashboardPage = router.pathname.includes(Routes.myAds);
  const isApartmentPage = router.pathname.includes(Routes.apartment);
  const isBookingPage = router.pathname.includes('booking');
  const isProfilePage = router.pathname.includes(Routes.myProfile);

  const [getLightMe, { data }] = useGetLightMeLazyQuery();

  useEffect(() => {
    if (token) {
      getLightMe();
    }
  }, [token]);

  const user = data?.user__me;
  const isAuthorized = !!user?.id;

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

  const routeToDashboard = () => {
    router.push(Routes.myAds);
  };

  const routeToHomePage = () => {
    router.push(Routes.home);
    close();
  };

  const { getIsBreakpoint } = useClientSize();

  const isSBreakpoint = getIsBreakpoint('sm');

  const isBorder = scrollY > 0 && !isOpened;

  const isHiddenMainHeader = !!filters && scrollY > 0 && isSBreakpoint;

  const showBottomNavbar = isSBreakpoint && !isAdvertPage && !isApartmentPage && !isBookingPage;

  useEffect(() => {
    if (!isSBreakpoint) close();
  }, [isSBreakpoint]);

  const authorizedLinks = useMemo(
    () => [
      { label: t('userDropDown.links.messages'), value: Routes.chat },
      { label: t('userDropDown.links.profile'), value: Routes.myProfile },
      { label: t('userDropDown.links.myApartmentAd'), value: Routes.myAds },
    ],
    [t],
  );

  if (isDashboardPage && isSBreakpoint) return null;

  return (
    <>
      <Root $isBorder={isBorder} $isSecondaryBackground={isSecondary}>
        {!((isApartmentPage || isBookingPage || isProfilePage) && isSBreakpoint) && (
          <Wrapper $isHiddenMainHeader={isHiddenMainHeader} $isAdvertPage={isAdvertPage}>
            <button onClick={routeToHomePage}>
              <SvgLogoArent />
            </button>

            {filters}
            <Navigation>
              {isAdvertPage && (
                <ExitAndSaveButton onClick={routeToDashboard}>{t('userDropDown.links.exitAndSave')}</ExitAndSaveButton>
              )}
              {!isAdvertPage && !isSBreakpoint && (
                <LinkButton onClick={routeToCreateAdPage}>{t('userDropDown.links.becomeAnOwner')}</LinkButton>
              )}
              {!isSBreakpoint && !isAdvertPage && (
                <ProfileButton
                  authorizedLinks={authorizedLinks}
                  avatar={user?.avatarKey}
                  username={user?.firstName}
                  isAuthorized={isAuthorized}
                />
              )}
            </Navigation>
          </Wrapper>
        )}
        {children}
      </Root>
      {isAuthModalOpen && <Auth />}
      {showBottomNavbar && <BottomNavbar isAuthorized={isAuthorized} />}
    </>
  );
};

export default Header;

type RootProps = { $isBorder: boolean; $isSecondaryBackground: boolean };

const Root = styled.header<RootProps>`
  ${({ theme: { colors }, $isSecondaryBackground, $isBorder }) => css`
    position: sticky;
    display: flex;
    flex-direction: column;

    width: 100%;
    z-index: 1001;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;

    background-color: ${$isSecondaryBackground ? colors.greyScale[10] : colors.greyScale[0]};

    border-bottom: 1px solid;
    border-color: ${$isBorder ? colors.greyScale[30] : 'transparent'};

    @media (max-width: ${BreakpointsEnum.sm}px) {
      padding: 24px 48px;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: ${BreakpointsEnum.s}px) {
      padding: 16px;
    }
  `}
`;

const Wrapper = styled.div<{ $isHiddenMainHeader: boolean; $isAdvertPage?: boolean }>`
  display: flex;
  padding: 24px 72px;

  width: 100%;
  max-width: 1440px;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${BreakpointsEnum.s}px) {
    display: ${({ $isHiddenMainHeader }) => ($isHiddenMainHeader ? 'none' : 'flex')};
    height: ${({ $isHiddenMainHeader }) => ($isHiddenMainHeader ? '0' : '100%')};
    flex-direction: ${({ $isAdvertPage }) => ($isAdvertPage ? 'row' : 'column')};
    align-items: center;
    gap: 20px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    gap: 24px;
  }
`;

const LinkButton = styled.button`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[100]};
    ${typography.body_24_16_medium}
  `}
`;

const ExitAndSaveButton = styled.button`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[100]};
    background-color: ${colors.greyScale[30]};
    padding: 10px 24px;
    border-radius: 12px;

    ${typography.body_24_16_medium}
  `}
`;
