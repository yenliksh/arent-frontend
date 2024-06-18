import * as React from 'react';
import { SVGProps } from 'react';

const SvgUz = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={0.25} y={0.25} width={27.5} height={19.5} rx={1.75} fill="#fff" stroke="#F5F5F5" strokeWidth={0.5} />
    <mask
      id="UZ_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={28}
      height={20}>
      <rect x={0.25} y={0.25} width={27.5} height={19.5} rx={1.75} fill="#fff" stroke="#fff" strokeWidth={0.5} />
    </mask>
    <g mask="url(#UZ_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 6.667h28V0H0v6.667Z" fill="#04AAC8" />
      <path d="M0 20h28v-6.667H0V20Z" fill="#23C840" />
      <path
        d="M4.667 5.333a1.99 1.99 0 0 0 1.111-.337 1.667 1.667 0 1 1 0-3.326 2 2 0 1 0-1.112 3.663ZM8 4.667a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Zm2-2a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM13.334 2A.667.667 0 1 1 12 2a.667.667 0 0 1 1.333 0Zm-.666 3.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Zm-2-.666a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z"
        fill="#fff"
      />
    </g>
  </svg>
);
export default SvgUz;
