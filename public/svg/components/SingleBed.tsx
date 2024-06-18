import * as React from 'react';
import { SVGProps } from 'react';

const SvgSingleBed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 5.25a.75.75 0 0 0-.75.75v4.75h14.5V6a.75.75 0 0 0-.75-.75h-13Zm-1.591-.841A2.25 2.25 0 0 1 5.5 3.75h13A2.25 2.25 0 0 1 20.75 6v5.5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V6c0-.597.237-1.169.659-1.591ZM3 16.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm18 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.909 8.909A2.25 2.25 0 0 1 9.5 8.25h5a2.25 2.25 0 0 1 2.25 2.25v.25h3.75A2.25 2.25 0 0 1 22.75 13v4.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V13a2.25 2.25 0 0 1 2.25-2.25h3.75v-.25c0-.597.237-1.169.659-1.591Zm.841 1.841h6.5v-.25a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v.25Zm-5.25 1.5a.75.75 0 0 0-.75.75v3.75h18.5V13a.75.75 0 0 0-.75-.75h-17Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgSingleBed;
