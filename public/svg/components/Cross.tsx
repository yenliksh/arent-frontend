import * as React from 'react';
import { SVGProps } from 'react';

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.227 7.227a.75.75 0 0 1 1.061 0l8.485 8.485a.75.75 0 1 1-1.06 1.06L7.227 8.289a.75.75 0 0 1 0-1.061Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.773 7.227a.75.75 0 0 1 0 1.06l-8.486 8.486a.75.75 0 0 1-1.06-1.06l8.485-8.486a.75.75 0 0 1 1.06 0Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgCross;
