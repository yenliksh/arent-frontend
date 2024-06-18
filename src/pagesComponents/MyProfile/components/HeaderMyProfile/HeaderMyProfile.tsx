import { useClientSize } from 'hooks';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

import { ArrowLeft } from '../../../../../public/svg/components';
import { Routes } from '../../../../constains';

type ProfileProps = {
  title?: string;
};

const HeaderMyProfile: FC<ProfileProps> = ({ title }) => {
  const router = useRouter();

  const { getIsBreakpoint } = useClientSize();

  const isWidthSm = getIsBreakpoint('sm');

  if (!isWidthSm || !title) return null;
  return (
    <Root>
      <StyledArrowLeft
        onClick={() =>
          router.push({
            pathname: Routes.myProfile,
          })
        }
      />

      <AppText variant={TextVariants.SECONDARY} font="title_22_18_bold">
        {title}
      </AppText>
    </Root>
  );
};

export default HeaderMyProfile;

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
