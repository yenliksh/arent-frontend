import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.5 6.1 1.4 4l-.7.7 2.8 2.8 6-6-.7-.7-5.3 5.3Z" fill="#fff" />
  </svg>
);

export default SvgCheck;
