import Link, { LinkProps } from 'next/link';
import React, { FC, HTMLAttributeAnchorTarget } from 'react';

type LinkToProps = {
  text: string;
  className?: string;
  children?: React.ReactNode;
  target?: HTMLAttributeAnchorTarget | undefined;
  asLink?: string;
} & Omit<LinkProps, 'children'>;

const LinkTo: FC<LinkToProps> = ({ text, className, target, children, asLink, ...props }) => (
  <Link as={asLink} {...props} prefetch>
    <a className={className} target={target}>
      {text}
      {children}
    </a>
  </Link>
);

export default LinkTo;
