import { useWindowScroll } from 'hooks';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/themes/default/colors';
import { Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';

import { ListIcon, MapIcon } from '../../../../../public/svg/components';

type BottomToggleProps = {
  isMapsOpened: boolean;
  toggleOpen: () => void;
};

const BottomToggle: FC<BottomToggleProps> = ({ isMapsOpened, toggleOpen }) => {
  const { t } = useTranslation('ui', { keyPrefix: 'map' });
  const { scrollY } = useWindowScroll();

  const isScroll = scrollY > 0;

  return (
    <Root $isScroll={isScroll}>
      <Button
        size={ButtonSize.FULL_TEXT}
        LeftIconComponent={
          isMapsOpened ? <StyledListIcon color={colors.greyScale[0]} /> : <StyledMapIcon color={colors.greyScale[0]} />
        }
        text={isMapsOpened ? t('showList') : t('showMap')}
        variant={ButtonVariant.VIOLET}
        isFullWight
        onClick={toggleOpen}
      />
    </Root>
  );
};

export default BottomToggle;

const Root = styled.div<{ $isScroll: boolean }>`
  width: 100%;
`;

const StyledMapIcon = styled(MapIcon)`
  width: 20px;
  height: 20px;
`;

const StyledListIcon = styled(ListIcon)`
  width: 20px;
  height: 20px;
`;
