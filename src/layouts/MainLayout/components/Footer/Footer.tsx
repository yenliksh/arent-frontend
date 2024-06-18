import React from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';

import { SvgLogoArent } from '../../../../../public/svg/components';
import { Cities, Cooperate, Questions } from './components';

const Footer = () => {
  return (
    <Root>
      <Wrapper>
        <Container>
          <LogoContainer>
            <SvgLogoArent />
          </LogoContainer>
          <Cities />
          <Questions />
        </Container>
        <Cooperate />
      </Wrapper>
    </Root>
  );
};

export default Footer;

const Root = styled.footer`
  display: flex;
  width: 100%;

  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 40px 72px 0;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    padding: 24px 48px;
  }

  @media (max-width: ${BreakpointsEnum.s}px) {
    padding: 24px 16px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  padding-bottom: 41px;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-gap: 27px;
`;
