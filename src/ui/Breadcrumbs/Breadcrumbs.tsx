import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextVariants } from 'types';
import { AppText } from 'ui/AppText';

const customBreadcrumbs: { [key: string]: string } = {
  '/my-profile': 'Mой профиль',
};

type BreadcrumbsProps = {
  title?: string;
  intermediateLink?: { title: string; href: string };
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, intermediateLink }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();
      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: `/${path}`, href: `/${linkPath.slice(0, i + 1).join('/')}` };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Root>
      <Link href="/">
        <a>
          <StyledAppText font="body_20_14_light">Главная</StyledAppText>
        </a>
      </Link>
      {intermediateLink && (
        <>
          <Circle />
          <Link href={{ pathname: intermediateLink.href, query: { ...query } }}>
            <a>
              <StyledAppText font="body_20_14_light">{intermediateLink.title}</StyledAppText>
            </a>
          </Link>
        </>
      )}
      {breadcrumbs &&
        breadcrumbs.map((path, index) => {
          const customBreadCrumb = customBreadcrumbs[path.breadcrumb];
          if (index === breadcrumbs.length - 1 || !customBreadCrumb) {
            return null;
          }
          return (
            <>
              <Circle />
              <Link key={index} href={path.href}>
                <a>
                  <StyledAppText font="body_20_14_light">{customBreadCrumb}</StyledAppText>
                </a>
              </Link>
            </>
          );
        })}
      {title && (
        <>
          <Circle />
          <AppText font="body_20_14_medium" variant={TextVariants.SECONDARY}>
            {title}
          </AppText>
        </>
      )}
    </Root>
  );
};

export default Breadcrumbs;

type BreadcrumbType = {
  breadcrumb: string;
  href: string;
};

const Circle = styled.div`
  margin-right: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.greyScale[60]};
`;
const StyledAppText = styled(AppText)`
  margin-right: 8px;
  color: ${({ theme: { colors } }) => colors.greyScale[60]};
  cursor: pointer;
`;

const Root = styled.nav`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;
