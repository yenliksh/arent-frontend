import * as React from 'react';
import { SVGProps } from 'react';

const SvgSoup = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 9 4.25Zm3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM2.25 11a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75 8.75 8.75 0 0 1-3.851 7.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h3.101A8.75 8.75 0 0 1 2.25 11Zm1.539.75A7.25 7.25 0 0 0 11 18.25h2a7.25 7.25 0 0 0 7.211-6.5H3.79Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgSoup;
