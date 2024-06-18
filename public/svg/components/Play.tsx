import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.445 3.142c-1.711-.988-3.41-1.154-4.722-.397-1.31.758-2.015 2.313-2.015 4.288v5.934c0 1.975.704 3.53 2.015 4.288 1.312.757 3.01.59 4.722-.397l5.15-2.966c1.712-.988 2.707-2.377 2.707-3.892 0-1.515-.995-2.904-2.707-3.891l-5.15-2.967Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgPlay;
