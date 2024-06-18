import { Routes } from 'constains';
import { useClientSize } from 'hooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { TabsValueType, TabType } from 'types/tabs';
import { AppText, LightButton, Tabs as BaseTabs } from 'ui';
import { LightButtonSize } from 'ui/LightButton/LightButton';

import SvgClose from '../../../../../../../public/svg/components/Close';
import { tabs as tabsOptions } from '../../../../options';

type TabsProps = {
  reset: any;
  onClose: () => void;
};

const Tabs: FC<TabsProps> = ({ reset, onClose }) => {
  const { getIsBreakpoint } = useClientSize();
  const isWidthSm = getIsBreakpoint('sm');
  const isWidthLgm = getIsBreakpoint('lgm');

  const { colors } = useTheme();

  const router = useRouter();
  const { query } = router;

  const { t } = useTranslation('listApartmentsPage');

  const [actualTab] = useState(tabsOptions[0]);

  const changeTab = (actualTab: TabType) => () => {
    tabsOptions.map((tab) => {
      if (actualTab.value === TabsValueType.LONG) {
        router.push({
          pathname: Routes.listApartmentsLong,
          query: {
            lat: query.lat,
            lng: query.lng,
            label: query.label,
            isShowModal: true,
            numberOfAdults: 1,
          },
        });
      }
      return tab;
    });
  };
  return (
    <>
      {isWidthSm && (
        <Header>
          <StyledLightButton
            size={LightButtonSize.SMALL}
            text={t('modalFilters.reset')}
            isUnderline
            onClick={() => reset()}
          />
          <AppText font="body_24_16_medium" variant={TextVariants.SECONDARY}>
            {t('modalFilters.filters')}
          </AppText>
          <IconContainer onClick={onClose}>
            <SvgClose color={colors.greyScale[100]} />
          </IconContainer>
        </Header>
      )}
      {isWidthLgm && (
        <TabsContainer>
          <BaseTabs tabs={tabsOptions} activeTab={actualTab} handleChangeActiveTab={changeTab} isSmall />
        </TabsContainer>
      )}
    </>
  );
};

export default Tabs;

const StyledLightButton = styled(LightButton)`
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
`;

const TabsContainer = styled.div`
  padding: 8px 0 16px;

  @media (max-width: ${BreakpointsEnum.sm - 1}px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 25px 16px 6px;
  background: ${({ theme: { colors } }) => colors.greyScale[0]};
  z-index: 999;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.greyScale[30]};
`;

const IconContainer = styled.button`
  background: transparent;
  display: flex;
  justify-content: flex-end;
  border: none;
  padding: 0;
  width: 75px;
  height: 20px;
  cursor: pointer;
`;
