import { useClientSize } from 'hooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

import { ArrowLeft } from '../../../../../public/svg/components';
import { Routes } from '../../../../constains';

type BookingProps = {
  slug?: string;
};

const HeaderBooking: FC<BookingProps> = (props) => {
  const { t } = useTranslation('bookingPage', { keyPrefix: 'headerBooking' });
  const router = useRouter();

  const { getIsBreakpoint } = useClientSize();

  const isWidthSm = getIsBreakpoint('sm');

  if (!isWidthSm) return null;
  return (
    <Root>
      <StyledArrowLeft
        onClick={() =>
          router.push({
            pathname: `${Routes.apartment}/${props.slug}`,
            query: {
              ...router.query,
            },
          })
        }
      />

      <AppText variant={TextVariants.SECONDARY} font="title_22_18_bold">
        {t('title')}
      </AppText>
    </Root>
  );
};

export default HeaderBooking;

const StyledArrowLeft = styled(ArrowLeft)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
`;

const Root = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;
