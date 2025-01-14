import * as React from 'react';
import { SVGProps } from 'react';

const SvgBy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={28} height={20} rx={2} fill="#fff" />
    <mask
      id="BY_svg__a"
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
    <g mask="url(#BY_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 13.333h28V0H0v13.333Z" fill="#E54252" />
      <path d="M0 20h28v-6.667H0V20Z" fill="#5CBE6B" />
      <path d="M0 0h4v3l-.667 1L4 5v2l-.667 1L4 9v2l-.667 1L4 13v2l-.667 1L4 17v3H0V0Z" fill="#fff" />
      <path
        d="M-.667 2-2 4l1.333 2L-2 8l1.333 2L-2 12l1.333 2L-2 16l1.333 2 1.334-2-1.334-2 1.334-2-1.334-2L.667 8-.667 6 .667 4-.667 2ZM.667 2 2 0l1.334 2L2 4 .667 2ZM2 8 .667 6 2 4l1.334 2L2 8Zm0 4L.667 10 2 8l1.334 2L2 12Zm0 4 1.334-2L2 12 .667 14 2 16Zm0 0 1.334 2L2 20 .667 18 2 16Z"
        fill="#E54252"
      />
    </g>
  </svg>
);
export default SvgBy;
