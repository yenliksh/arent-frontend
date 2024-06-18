import { FC } from 'react';
import styled from 'styled-components';
import { TabType } from 'types/tabs';

import { Tab } from './styled';

interface TabsProps {
  tabs: Array<TabType>;
  isSmall?: boolean;
}

const Tabs: FC<TabsProps> = ({ tabs, isSmall = false }) => (
  <Root>
    {tabs.map((tab) => {
      return (
        <StyledTab key={tab.id} $isSmall={isSmall}>
          {tab.title}
        </StyledTab>
      );
    })}
  </Root>
);

export default Tabs;

const Root = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTab = styled(Tab)`
  width: max-content;
  height: min-content;
`;
