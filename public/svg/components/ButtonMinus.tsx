import * as React from 'react';
import { SVGProps } from 'react';

const SvgButtonMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 12C0 5.373 5.373 0 12 0h16c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12H12C5.373 40 0 34.627 0 28V12Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 20a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75Z"
      fill="#1C212D"
    />
    <path
      d="M12 1h16v-2H12v2Zm27 11v16h2V12h-2ZM28 39H12v2h16v-2ZM1 28V12h-2v16h2Zm11 11C5.925 39 1 34.075 1 28h-2c0 7.18 5.82 13 13 13v-2Zm27-11c0 6.075-4.925 11-11 11v2c7.18 0 13-5.82 13-13h-2ZM28 1c6.075 0 11 4.925 11 11h2c0-7.18-5.82-13-13-13v2ZM12-1C4.82-1-1 4.82-1 12h2C1 5.925 5.925 1 12 1v-2Z"
      fill="#E6E9EE"
    />
  </svg>
);

export default SvgButtonMinus;
