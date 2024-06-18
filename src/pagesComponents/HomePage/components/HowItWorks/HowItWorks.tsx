import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

import howItWorksImage from '../../../../../public/img/howItWorksImage.png';
import { StepComponent } from './components';

const HowItWorks: FC = () => {
  const { t } = useTranslation('homePage');
  const steps = [
    { title: t('steps.title1'), info: t('steps.info1') },
    { title: t('steps.title2'), info: t('steps.info2') },
    { title: t('steps.title3'), info: t('steps.info3') },
  ];

  return (
    <MainContainer>
      <Content>
        <TitleContainer>
          <TitleText variant={TextVariants.SECONDARY} font="title_56_48_regular">
            {t('howItWorks.title')}
          </TitleText>
        </TitleContainer>
        <InnerContainer>
          <StepsContainer>
            {steps.map((item, index) => {
              return <StepComponent key={index} index={index + 1} info={item.info} title={item.title} />;
            })}
          </StepsContainer>
        </InnerContainer>
        <ImageContainer>
          <Image src={howItWorksImage} alt="sofa" width={1296} height={380} />
        </ImageContainer>
      </Content>
    </MainContainer>
  );
};

export default HowItWorks;

const MainContainer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.greyScale[30]};
    border-bottom: 1px solid ${theme.colors.greyScale[30]};
  `}
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 56px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 56px 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 624px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    max-width: 343px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    width: 320px;
  }
`;

const TitleText = styled(AppText)`
  text-align: center;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_40_32_medium}
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    ${({ theme: { typography } }) => typography.title_32_24_medium}
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin-top: 40px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 80px;
`;
