import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloset = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 13.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm7 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.395 1.395A1.35 1.35 0 0 1 3.35 1h16.8a1.35 1.35 0 0 1 1.35 1.35v18.8a1.35 1.35 0 0 1-1.35 1.35H3.35A1.35 1.35 0 0 1 2 21.15V2.35c0-.358.142-.701.395-.955ZM12.5 21H20V2.5h-7.5V21ZM11 2.5V21H3.5V2.5H11Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgCloset;
