import { useTranslation } from 'next-i18next';
import { FC, FunctionComponentElement } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

import { MainLayout } from '../MainLayout';

type AdvertLayoutProps = {
  children: FunctionComponentElement<FC>;
  onSaveDraft?: () => void;
  isDisabled?: boolean;
  step?: string;
};

export enum RentTypesEnum {
  LONG = 'LONG',
  SHORT = 'SHORT',
  ALL = 'ALL',
}

const AdvertLayout: FC<AdvertLayoutProps> = ({ children, step }) => {
  const { t } = useTranslation('common');

  return (
    <StyledMainLayout headTitle={t('advertHeader.title')} isSecondaryBackground>
      <Wrapper>
        <TitleContainer>
          <ContentTitle variant={TextVariants.SECONDARY} font="title_48_40_bold">
            {t('advertHeader.title')}
          </ContentTitle>
          <StepsNumberContainer>
            <StepsNumber variant={TextVariants.SECONDARY} font="title_38_32_bold" $isMain>
              {step}
            </StepsNumber>
            <StepsNumber variant={TextVariants.SECONDARY} font="title_38_32_bold">
              /7
            </StepsNumber>
          </StepsNumberContainer>
        </TitleContainer>
        <Content>{children}</Content>
      </Wrapper>
    </StyledMainLayout>
  );
};

export default AdvertLayout;

const StyledMainLayout = styled(MainLayout)`
  padding-bottom: 80px !important;
`;

const Wrapper = styled.div``;

const Content = styled.div`
  width: 100%;
  min-height: 440px;
  border-radius: 21px;
  background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
  @media (max-width: ${BreakpointsEnum.md}px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

const ContentTitle = styled(AppText)`
  @media (max-width: ${BreakpointsEnum.s}px) {
    font-size: 30px;
  }
`;

const StepsNumber = styled(AppText)<{ $isMain?: boolean }>`
  color: ${({ theme: { colors }, $isMain }) => ($isMain ? colors.purpleScale[100] : colors.greyScale[50])};
  @media (max-width: ${BreakpointsEnum.s}px) {
    font-size: 30px;
  }
`;

const StepsNumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 26px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
