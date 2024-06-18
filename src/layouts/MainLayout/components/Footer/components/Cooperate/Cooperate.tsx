import { Routes } from 'constains';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BreakpointsEnum, DocumentsTabsSlug } from 'types';
import { LinkTo } from 'ui';

import { Facebook, Instagram, Linkedin } from '../../../../../../../public/svg/components';

const Cooperate = () => {
  const { t } = useTranslation('ui', { keyPrefix: 'footer' });

  const cooperateLinks = useMemo(
    () => [
      {
        text: t('cooperates.termOfUse'),
        href: {
          pathname: `${Routes.documents}/${DocumentsTabsSlug.TERMS_OF_USE}`,
        },
      },
      {
        text: t('cooperates.privacy'),
        href: {
          pathname: `${Routes.documents}/${DocumentsTabsSlug.PRIVACY_POLICY}`,
        },
      },
    ],
    [t],
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: Facebook,
        href: 'https://www.facebook.com/Livin-%D0%90%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%B6%D0%B8%D0%BB%D1%8C%D1%8F-104729858964464',
      },
      {
        icon: Instagram,
        href: ' https://www.instagram.com/arent.app/',
      },
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/livin-agency-941264247',
      },
    ],
    [],
  );

  return (
    <Root>
      <LinksContainer>
        <Text>{t('cooperates.arent')}</Text>
        {cooperateLinks.map((link, index) => (
          <Link key={index} target="_blank" {...link} />
        ))}
      </LinksContainer>
      <SocialLinksContainer>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="blank">
            <link.icon />
          </a>
        ))}
      </SocialLinksContainer>
    </Root>
  );
};

export default Cooperate;

const Root = styled.div`
  display: flex;
  padding: 26px 0;

  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  border-top: 1px solid ${({ theme: { colors } }) => colors.greyScale[40]};
`;

const Text = styled.p`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[50]};
    ${typography.body_20_14_regular}
  `}
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  row-gap: 8px;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;

  @media (max-width: ${BreakpointsEnum.s}px) {
    gap: 24px;
  }
`;

const Link = styled(LinkTo)`
  --leftIndent: 20px;

  position: relative;
  margin-left: var(--leftIndent);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc((var(--leftIndent) + 1px) / -2);
    border-radius: 50%;
    width: 2px;
    height: 2px;
    background-color: ${({ theme: { colors } }) => colors.greyScale[50]};
    transform: translateX(-50%);
  }

  ${({ theme: { colors, typography } }) => css`
    color: ${colors.greyScale[50]};
    ${typography.body_20_14_regular}
  `}
`;
