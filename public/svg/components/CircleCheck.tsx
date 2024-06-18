import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" fill="#1C212D" />
    <path d="m10.8 14.3-2.1-2.1-.7.7 2.8 2.8 6-6-.7-.7-5.3 5.3Z" fill="#fff" />
  </svg>
);

export default SvgCircleCheck;
