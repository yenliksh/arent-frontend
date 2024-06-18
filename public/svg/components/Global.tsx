import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlobal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.667 2.5H7.5a23.686 23.686 0 0 0 0 15h-.833M12.5 2.5a23.686 23.686 0 0 1 0 15"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 13.333V12.5a23.686 23.686 0 0 0 15 0v.833M2.5 7.5a23.686 23.686 0 0 1 15 0"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGlobal;
