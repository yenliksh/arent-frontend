import * as React from 'react';
import { SVGProps } from 'react';

const SvgUa = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={28} height={20} rx={2} fill="#fff" />
    <mask
      id="UA_svg__a"
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
    <g mask="url(#UA_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 10.667h28V0H0v10.667Z" fill="#156DD1" />
      <path d="M0 20h28v-9.333H0V20Z" fill="#FFD948" />
    </g>
  </svg>
);
export default SvgUa;
