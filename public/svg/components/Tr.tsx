import * as React from 'react';
import { SVGProps } from 'react';

const SvgTr = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={28} height={20} rx={2} fill="#fff" />
    <mask
      id="TR_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={28}
      height={20}>
      <rect width={28} height={20} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#TR_svg__a)">
      <path fill="#E92434" d="M0 0h28v20H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.02 10.768-1.224 1.485.083-1.923-1.79-.706 1.854-.515.118-1.921 1.063 1.605 1.864-.482-1.198 1.507 1.034 1.624-1.804-.674Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.403 13.685a6 6 0 1 1 0-7.37 5.21 5.21 0 0 0-3.069-.982c-2.761 0-5 2.09-5 4.667s2.239 4.667 5 4.667a5.21 5.21 0 0 0 3.069-.982Z"
        fill="#fff"
      />
    </g>
  </svg>
);
export default SvgTr;
