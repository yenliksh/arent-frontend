import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui';

const AverageTermCancellationPolicy: FC = () => {
  const { t } = useTranslation('ui', { keyPrefix: 'averageTerm' });
  return (
    <Root>
      <AppText font="body_24_16_medium" variant={TextVariants.SECONDARY}>
        {t('title')}
      </AppText>
      <Description>{`${t('rules.first')} ${t('rules.second')}`}</Description>
    </Root>
  );
};

export default AverageTermCancellationPolicy;

const Root = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 8px;
  border-radius: 16px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.greyScale[0]};
    border: 1px solid ${colors.greyScale[30]};
  `};
`;

const Description = styled.p`
  ${({ theme: { typography, colors } }) => css`
    color: ${colors.greyScale[60]};
    ${typography.body_20_14_regular}
  `};
`;
