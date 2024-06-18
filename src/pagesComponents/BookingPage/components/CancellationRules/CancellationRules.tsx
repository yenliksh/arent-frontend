/* eslint-disable no-irregular-whitespace */
import { useReactiveVar } from '@apollo/client';
import { Routes } from 'constains';
import { useClientSize } from 'hooks';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum, DocumentsTabsSlug, TextVariants } from 'types';
import { AppText, LightButton } from 'ui';

import { averageTerm } from '../../../../libs';

const CancellationRules: FC = () => {
  const { t } = useTranslation('bookingPage', { keyPrefix: 'cancelledRules' });
  // const { t: tPolicy } = useTranslation('importantInfoPage', { keyPrefix: 'cancel' });
  const { t: tUi } = useTranslation('ui', { keyPrefix: 'averageTerm' });
  const { t: tCommon } = useTranslation('common', { keyPrefix: 'months' });
  const { getIsBreakpoint } = useClientSize();
  const isAverageTerm = useReactiveVar(averageTerm);
  const router = useRouter();

  const newDate = new Date();

  newDate.setDate(newDate.getDate() + 2);

  // const termsMapping = useMemo(() => {
  //   return {
  //     [ShortTermRentCancellationPolicyType.Strict]: tPolicy('rules.strict'),
  //     [ShortTermRentCancellationPolicyType.Flexible]: tPolicy('rules.flexible'),
  //     [ShortTermRentCancellationPolicyType.Inflexible]: tPolicy('rules.inFlexible'),
  //     [ShortTermRentCancellationPolicyType.Moderate]: tPolicy('rules.moderate'),
  //   };
  // }, [tPolicy]);

  const getMonth = (date: number) => {
    if (date === 0) return tCommon('0');
    if (date === 1) return tCommon('1');
    if (date === 2) return tCommon('2');
    if (date === 3) return tCommon('3');
    if (date === 4) return tCommon('4');
    if (date === 5) return tCommon('5');
    if (date === 6) return tCommon('6');
    if (date === 7) return tCommon('7');
    if (date === 8) return tCommon('8');
    if (date === 9) return tCommon('9');
    if (date === 10) return tCommon('10');
    if (date === 11) return tCommon('11');
  };

  const renderRules = () => {
    if (isAverageTerm) {
      return (
        <>
          <StyledAppText variant={TextVariants.SECONDARY} font="body_20_14_medium">
            {tUi('rules.first')}
          </StyledAppText>
          <StyledAppText variant={TextVariants.SECONDARY} font="body_20_14_medium">
            {tUi('rules.second')}
          </StyledAppText>
        </>
      );
    }
    return (
      <StyledAppText variant={TextVariants.SECONDARY} font="body_20_14_medium">
        Бесплатная отмена в течение 48 ч. При отмене до {newDate.getHours()}:00 {newDate.getDate()} 
        {getMonth(newDate.getMonth())} вы получите возврат в размере 50% за вычетом сбора за услуги.`
      </StyledAppText>
    );
  };

  const isWidthSm = getIsBreakpoint('sm');
  return (
    <Root>
      <AppText variant={TextVariants.SECONDARY} font={isWidthSm ? 'title_22_18_medium' : 'title_22_18_bold'}>
        {t('title')}
      </AppText>
      {renderRules()}
      <LightButton
        isUnderline
        text={t('more')}
        onClick={() => router.push(`${Routes.documents}/${DocumentsTabsSlug.CONDITIONS_FOR_OWNER}`)}
      />
      <StyledAppText variant={TextVariants.SECONDARY} font="body_20_14_medium">
        {t('bookingText')}
      </StyledAppText>
      <ConditionText font="caption_16_12_regular">{t('conditionText')}</ConditionText>
    </Root>
  );
};

export default CancellationRules;

const ConditionText = styled(AppText)`
  margin-top: 32px;
  max-width: 100%;
  color: ${({ theme: { colors } }) => colors.greyScale[60]};

  @media (min-width: ${BreakpointsEnum.sm}px) {
    max-width: 510px;
  }
`;

const StyledAppText = styled(AppText)`
  margin-top: 24px;
  max-width: 100%;

  @media (min-width: ${BreakpointsEnum.sm}px) {
    max-width: 500px;
  }
`;

const Root = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
`;
