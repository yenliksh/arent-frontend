import { BASE_COORDINATE } from 'components/Map/Map';
import { APARTMENT_MAX_PRICE_FOR_BOOKING, APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT, Routes } from 'constains';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'styles/themes/default/colors';
import { TabsValueType } from 'types/tabs';

import { ChatLittle, HeartLittle, Houses, ProfileLittle } from '../../../../../public/svg/components';
import SearchLittle from '../../../../../public/svg/components/SearchLittle';

enum TabsEnum {
  searchShort = '/kratkosrochnaya-arenda',
  searchLong = '/dolgosrochnaya-arenda',
  home = '/',
  chat = '/chat',
  profile = 'my-profile',
  auth = 'mobile-auth',
}

type BottomNavbarProps = {
  isAuthorized: boolean;
};

const BottomNavbar: FC<BottomNavbarProps> = ({ isAuthorized }) => {
  const router = useRouter();
  const currentTab = useMemo(() => {
    if (router.pathname.includes(TabsEnum.chat)) return TabsEnum.chat;
    if (router.pathname.includes(TabsEnum.profile)) return TabsEnum.profile;
    if (router.pathname.includes(TabsEnum.searchShort)) return TabsEnum.searchShort;
    if (router.pathname.includes(TabsEnum.searchLong)) return TabsEnum.searchLong;
    if (router.pathname.includes(TabsEnum.auth)) return TabsEnum.auth;
    return TabsEnum.home;
  }, [router.pathname]);

  const goSearch = () => {
    const queries = {
      guests: 1,
      kids: 0,
      pets: 0,
      city: 'almaty',
      type: TabsValueType.SHORT,
      lat: BASE_COORDINATE.lat,
      lng: BASE_COORDINATE.lng,
      min: APARTMENT_MIN_PRICE_FOR_BOOKING_SHORT,
      max: APARTMENT_MAX_PRICE_FOR_BOOKING,
      slug: 'almaty',
    };

    router.push({ pathname: `${Routes.listApartmentsShort}/almaty`, query: queries });
  };

  const goToHome = () => {
    router.push(Routes.home);
  };

  const goToChat = () => {
    router.push(Routes.chat);
  };

  const goToProfile = () => {
    router.push(isAuthorized ? Routes.myProfile : Routes.mobileAuth);
  };

  return (
    <Root $isAuthorized={isAuthorized}>
      <StyledButton
        $isActive={currentTab === TabsEnum.searchLong || currentTab === TabsEnum.searchShort}
        onClick={goSearch}>
        <SearchLittle
          color={
            currentTab === TabsEnum.searchLong || currentTab === TabsEnum.searchShort
              ? colors.purpleScale[100]
              : undefined
          }
        />
        Поиск
      </StyledButton>
      <StyledButton>
        <HeartLittle />
        Вишлисты
      </StyledButton>
      <StyledButton $isActive={currentTab === TabsEnum.home} onClick={goToHome}>
        <Houses color={currentTab === TabsEnum.home ? colors.purpleScale[100] : undefined} />
        Аренда
      </StyledButton>
      {isAuthorized && (
        <StyledButton $isActive={currentTab === TabsEnum.chat} onClick={goToChat}>
          <ChatLittle color={currentTab === TabsEnum.chat ? colors.purpleScale[100] : undefined} />
          Чат
        </StyledButton>
      )}
      <StyledButton $isActive={currentTab === TabsEnum.profile || currentTab === TabsEnum.auth} onClick={goToProfile}>
        <ProfileLittle
          color={currentTab === TabsEnum.profile || currentTab === TabsEnum.auth ? colors.purpleScale[100] : undefined}
        />
        {isAuthorized ? 'Профиль' : 'Войти'}
      </StyledButton>
    </Root>
  );
};

const Root = styled.div<{ $isAuthorized: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 11px 15px;
  display: grid;
  ${({ $isAuthorized }) => css`
    grid-template-columns: ${$isAuthorized ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)'};
  `}
  background-color: #fff;
  z-index: 1000;
`;

const StyledButton = styled.button<{ $isActive?: boolean }>`
  ${({ theme: { colors, typography }, $isActive }) => css`
    color: ${$isActive ? colors.purpleScale[100] : colors.greyScale[50]};
    ${typography.caption_16_12_regular}
  `}
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default BottomNavbar;
