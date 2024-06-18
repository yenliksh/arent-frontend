import Link, { LinkProps } from 'next/link';
import React, { FC, ReactNode } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';

type TabType = {
  title: string;
  slug: string;
  component: ReactNode;
};

interface NavigationProps {
  className?: string;
  tabs: TabType[];
  activeTab: TabType;
}

const Navigation: FC<NavigationProps> = ({ className, tabs, activeTab }) => {
  return (
    <Root className={className}>
      <ScrollContainer>
        <List>
          {tabs?.map(({ title, slug }, index) => {
            const isActive = slug === activeTab.slug;

            const options: LinkProps = {
              href: {
                pathname: `/documents/${slug}`,
              },
              passHref: true,
              shallow: true,
            };

            return (
              <Item key={index}>
                <Link {...options}>
                  <ItemLink $isActive={isActive}>{title}</ItemLink>
                </Link>
              </Item>
            );
          })}
        </List>
      </ScrollContainer>
    </Root>
  );
};

const Root = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
  width: 100%;

  @media (min-width: ${BreakpointsEnum.lgm + 1}px) {
    overflow: hidden;
    position: sticky;
    top: calc(var(--headerHeight) + 30px);
    border-radius: 21px;
    padding: 32px 24px;
    max-width: 400px;
    min-width: 400px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    flex-direction: row;
  }
`;

const Item = styled.li`
  flex-shrink: 0;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    &:not(:last-child) {
      margin: 0 24px 0 0;
    }
  }
`;

const ItemLink = styled.a<{ $isActive: boolean }>`
  display: inline-block;
  margin: 0;
  ${({ theme: { typography }, $isActive }) =>
    $isActive ? typography.body_24_16_medium : typography.body_24_16_regular};
  color: ${({ theme: { colors }, $isActive }) => ($isActive ? colors.greyScale[100] : colors.greyScale[60])};

  &:hover {
    color: ${({ theme: { colors } }) => colors.greyScale[80]};
  }

  @media (max-width: ${BreakpointsEnum.lgm}px) {
    border-bottom: 2px solid
      ${({ theme: { colors }, $isActive }) => ($isActive ? colors.greyScale[100] : 'transparent')};
    padding-bottom: 8px;

    &:not(:last-child) {
      margin: 0 24px 0 0;
    }
  }
`;

export default Navigation;
