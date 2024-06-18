import * as React from 'react';
import { SVGProps } from 'react';

const SvgPillow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.54 2.48a.75.75 0 0 1 .19.69 36.766 36.766 0 0 0 0 16.66.75.75 0 0 1-.81.915 92.292 92.292 0 0 0-19.84 0 .75.75 0 0 1-.809-.922 35.19 35.19 0 0 0 0-16.646.75.75 0 0 1 .872-.913 51.91 51.91 0 0 0 19.714 0 .75.75 0 0 1 .683.216Zm-1.511 1.46a53.428 53.428 0 0 1-18.047.002 36.673 36.673 0 0 1-.019 15.205 93.809 93.809 0 0 1 18.084 0 38.251 38.251 0 0 1-.018-15.207Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgPillow;
