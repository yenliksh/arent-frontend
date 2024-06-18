import * as React from 'react';
import { SVGProps } from 'react';

const SvgNotifyOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={50} height={50} rx={25} fill="#E6E9EE" />
    <path
      d="m20.291 33.824-3.757.835a1 1 0 0 1-1.193-1.193l.835-3.757A9.955 9.955 0 0 1 15 25c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a9.955 9.955 0 0 1-4.709-1.176Z"
      fill="#1C212D"
    />
    <circle cx={44} cy={6} r={6} fill="#fff" />
    <circle cx={44} cy={6} r={3} fill="#DE4444" />
  </svg>
);

export default SvgNotifyOn;
