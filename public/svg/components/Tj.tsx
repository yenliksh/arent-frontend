import * as React from 'react';
import { SVGProps } from 'react';

const SvgTj = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={0.25} y={0.25} width={27.5} height={19.5} rx={1.75} fill="#fff" stroke="#F5F5F5" strokeWidth={0.5} />
    <mask
      id="TJ_svg__a"
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
    <g mask="url(#TJ_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 6.667h28V0H0v6.667Z" fill="#D9101C" />
      <path d="M0 20h28v-6.667H0V20Z" fill="#0F7811" />
      <path
        d="M13.333 8.667a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0ZM14.666 10c0 .12-.032.377-.088.667h.755a.667.667 0 0 1 0 1.333h-2.667a.667.667 0 0 1 0-1.333h.755a4.352 4.352 0 0 1-.088-.667.667.667 0 0 1 1.333 0ZM16 8.667a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Zm2 2a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM10.667 10a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z"
        fill="#FAD14E"
      />
    </g>
  </svg>
);
export default SvgTj;
