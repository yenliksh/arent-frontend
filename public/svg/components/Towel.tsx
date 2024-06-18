import * as React from 'react';
import { SVGProps } from 'react';

const SvgTowel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 9A.75.75 0 0 1 2 8.25h16a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V9Zm1.5.75v2.5h14.5v-2.5H2.75Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 2.75a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 .75.75h13a.75.75 0 0 0 .75-.75V6a.75.75 0 0 1 1.5 0v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75v1.75a.75.75 0 0 0 .75.75h13a.75.75 0 0 0 .75-.75v-17a.75.75 0 0 0-.75-.75h-17Zm1.75 16v1.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25v-17a2.25 2.25 0 0 0-2.25-2.25h-17A2.25 2.25 0 0 0 1.25 3.5v13a2.25 2.25 0 0 0 2.25 2.25h1.75Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgTowel;
