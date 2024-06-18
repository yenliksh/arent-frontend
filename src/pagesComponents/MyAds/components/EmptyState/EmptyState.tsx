import { ApartmentAdStatusType } from '__generated__/types';
import { Routes } from 'constains';
import router from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, TextVariants } from 'types';
import { AppText, Button } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button';
import { setCookie } from 'utils';

interface EmptyStateProps {
  status: ApartmentAdStatusType;
}

const EmptyState: FC<EmptyStateProps> = ({ status }) => {
  const { t } = useTranslation('myAdsPage', { keyPrefix: 'emptyState' });

  const goToCreateAdd = () => {
    setCookie('advertId', '');
    router.push(Routes.adCreate);
  };

  const states = {
    [ApartmentAdStatusType.Active]: (
      <>
        <TitleText variant={TextVariants.SECONDARY} font="title_36_26_bold">
          {t(`activeTitle`)}
        </TitleText>
        <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
          {t(`activeHint`)}
        </AppText>
      </>
    ),
    [ApartmentAdStatusType.Published]: (
      <>
        <TitleText variant={TextVariants.SECONDARY} font="title_36_26_bold">
          {t(`publishedTitle`)}
        </TitleText>
        <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
          {t(`publishedHint`)}
        </AppText>
      </>
    ),
    [ApartmentAdStatusType.Processing]: (
      <>
        <TitleText variant={TextVariants.SECONDARY} font="title_36_26_bold">
          {t(`processTitle`)}
        </TitleText>
        <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
          {t(`processHint`)}
        </AppText>
      </>
    ),
    [ApartmentAdStatusType.Paused]: (
      <>
        <TitleText variant={TextVariants.SECONDARY} font="title_36_26_bold">
          {t(`stoppedTitle`)}
        </TitleText>
        <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
          {t(`stoppedHint`)}
        </AppText>
      </>
    ),
    [ApartmentAdStatusType.Draft]: (
      <>
        <TitleText variant={TextVariants.SECONDARY} font="title_36_26_bold">
          {t(`draftTitle`)}
        </TitleText>
        <AppText variant={TextVariants.SECONDARY} font="body_24_16_regular">
          {t(`draftHint`)}
        </AppText>
      </>
    ),
  };
  return (
    <Root>
      <TextContainer>{states[status]}</TextContainer>
      <Button onClick={goToCreateAdd} size={ButtonSize.LONG_TEXT} text={t('button')} variant={ButtonVariant.VIOLET} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  padding: 84px;
  border-radius: 24px;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.greyScale[10]};
  `}
  @media (max-width: ${BreakpointsEnum.sm}px) {
    flex-direction: column;
    margin-top: 24px;
    gap: 32px;
    padding: 84px 16px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 24px;
  margin-bottom: 32px;
  max-width: 584px;
  margin: auto;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    gap: 16px;
    margin-bottom: 24px;
  }
`;

const TitleText = styled(AppText)`
  @media (max-width: ${BreakpointsEnum.sm}px) {
    ${({ theme: { typography } }) => typography.title_33_24_bold}
  }
`;

export default EmptyState;
