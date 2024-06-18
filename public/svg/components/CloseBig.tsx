import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloseBig = (props: SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.841 10.84c.44-.439 1.152-.439 1.591 0L25.16 23.57a1.125 1.125 0 1 1-1.59 1.59L10.84 12.433a1.125 1.125 0 0 1 0-1.591Z"
      fill={props.color || '#fff'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.159 10.84c.44.44.44 1.152 0 1.592L12.43 25.16a1.125 1.125 0 1 1-1.591-1.591L23.568 10.84c.44-.44 1.151-.44 1.59 0Z"
      fill={props.color || '#fff'}
    />
  </svg>
);

export default SvgCloseBig;
