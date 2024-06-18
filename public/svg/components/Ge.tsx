import * as React from 'react';
import { SVGProps } from 'react';

const SvgGe = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={0.25} y={0.25} width={27.5} height={19.5} rx={1.75} fill="#fff" stroke="#F5F5F5" strokeWidth={0.5} />
    <mask
      id="GE_svg__a"
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
    <g mask="url(#GE_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M16 21.333h-4V12H-1.333V8H12v-9.333h4V8h13.334v4H16v9.333Z" fill="#FF2B37" />
      <path
        d="m21.6 4.4-1.6.267V3.333l1.6.267-.267-1.6h1.333L22.4 3.6l1.6-.267v1.334L22.4 4.4l.266 1.6h-1.333l.267-1.6ZM5.6 4.4 4 4.667V3.333l1.6.267L5.333 2h1.333L6.4 3.6 8 3.333v1.334L6.4 4.4 6.666 6H5.333L5.6 4.4ZM5.6 16.4l-1.6.267v-1.334l1.6.267-.267-1.6h1.333L6.4 15.6l1.6-.267v1.334L6.4 16.4l.266 1.6H5.333l.267-1.6ZM21.6 16.4l-1.6.267v-1.334l1.6.267-.267-1.6h1.333l-.266 1.6 1.6-.267v1.334l-1.6-.267.266 1.6h-1.333l.267-1.6Z"
        fill="#FD0D1B"
      />
    </g>
  </svg>
);
export default SvgGe;
