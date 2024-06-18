import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearchNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
      stroke="#AFB5C0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSearchNormal;
