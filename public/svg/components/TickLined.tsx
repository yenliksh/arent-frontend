import * as React from 'react';
import { SVGProps } from 'react';

const SvgTickLined = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.54 7.48a.75.75 0 0 1-.02 1.06l-9.338 9a.75.75 0 0 1-1.042 0l-4.66-4.5a.75.75 0 0 1 1.04-1.08l4.142 3.998L18.48 7.46a.75.75 0 0 1 1.06.02Z"
      fill="#4FC168"
    />
  </svg>
);

export default SvgTickLined;
