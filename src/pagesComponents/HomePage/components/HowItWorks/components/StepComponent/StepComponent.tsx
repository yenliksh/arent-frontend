import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

interface StepComponentProps {
  index: number;
  title: string;
  info: string;
}

const StepComponent: FC<StepComponentProps> = ({ index, title, info }) => {
  return (
    <MainContainer>
      <Content>
        <NumberText variant={TextVariants.SECONDARY} font="title_56_48_medium">
          0{index}
        </NumberText>
        <TextContainer>
          <AppText variant={TextVariants.SECONDARY} font="title_26_18_medium">
            {title}
          </AppText>
          <TextInfo font="body_22_14_regular">{info}</TextInfo>
        </TextContainer>
      </Content>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1056px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 343px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    max-width: 320px;
  }
`;

const Content = styled.div`
  display: column;
  margin: 16px 40px 16px 40px;
  gap: 32px;
  align-items: flex-start;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 16px;
    gap: 16px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    margin: 12px;
    gap: 12px;
  }
`;

const NumberText = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.purpleScale[100]};
  `}
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_40_32_medium}
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
  }
`;

const TextInfo = styled(AppText)`
  ${({ theme }) => css`
    color: ${theme.colors.greyScale[50]};
  `}
`;

export default StepComponent;
