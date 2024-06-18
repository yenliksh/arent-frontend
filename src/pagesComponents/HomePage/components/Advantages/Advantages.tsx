import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText } from 'ui';

interface AdvantagesProps {
  payPicSrc: string;
  ownerPicSrc: string;
  legallyPicSrc: string;
}

const Advantages: FC<AdvantagesProps> = ({ payPicSrc, ownerPicSrc, legallyPicSrc }) => {
  const { t } = useTranslation('homePage', { keyPrefix: 'advantages' });
  return (
    <MainContainer>
      <Content>
        <TitleBlock>
          <TitleText variant={TextVariants.SECONDARY}>{t('title')}</TitleText>
        </TitleBlock>
        <CardsBlock>
          <StyledCard>
            <ImageContainer>
              <Image src={ownerPicSrc} alt="only owners" width={140} height={140} />
            </ImageContainer>
            <TextContainer>
              <AppText variant={TextVariants.SECONDARY} font="title_32_24_medium">
                {t('ownersOnly')}
              </AppText>
            </TextContainer>
          </StyledCard>
          <StyledCard>
            <ImageContainer>
              <Image src={payPicSrc} alt="macbook" width={140} height={140} />
            </ImageContainer>
            <TextContainer>
              <AppText variant={TextVariants.SECONDARY} font="title_32_24_medium">
                {t('securePay')}
              </AppText>
            </TextContainer>
          </StyledCard>
          <StyledCard>
            <ImageContainer>
              <Image src={legallyPicSrc} alt="legally protection" width={140} height={140} />
            </ImageContainer>
            <TextContainer>
              <AppText variant={TextVariants.SECONDARY} font="title_32_24_medium">
                {t('legalProtection')}
              </AppText>
            </TextContainer>
          </StyledCard>
        </CardsBlock>
      </Content>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 64px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 56px 0;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    margin: 0;
  }
`;

const TitleBlock = styled.div`
  align-items: center;
  margin: 64px 0;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    gap: 16px;
    margin: 56px 0 32px;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    gap: 12px;
    margin: 40px 0 32px;
  }
`;

const TitleText = styled(AppText)`
  text-align: center;
  ${({ theme: { typography } }) => typography.title_56_48_medium};
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_40_32_medium}
  }
`;

const CardsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    grid-template-columns: 1fr;
    align-items: center;
    gap: 24px;
    height: auto;
  }
  @media (max-width: ${BreakpointsEnum.xxs}px) {
    width: 320px;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 134px;
  width: 140px;
  height: 140px;
`;

const StyledCard = styled.div`
  padding: 40px 27px 40px 27px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: center;
  ${({ theme }) => css`
    background: ${theme.colors.greyScale[10]};
  `};
`;

const TextContainer = styled.div``;

export default Advantages;
