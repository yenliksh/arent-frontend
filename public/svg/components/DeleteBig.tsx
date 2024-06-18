import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeleteBig = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" fill="#EFF1F5" />
    <path
      d="m7.758 7.758 8.485 8.485M7.757 16.243l8.485-8.485"
      stroke="#1C212D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDeleteBig;
