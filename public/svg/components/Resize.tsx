import * as React from 'react';
import { SVGProps } from 'react';

const SvgResize = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21 9V3h-6M3 15v6h6M21 3l-7.5 7.5M10.5 13.5 3 21"
      stroke="#1C212D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgResize;
