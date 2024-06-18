import * as React from 'react';
import { SVGProps } from 'react';

const SvgDetector = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.95 12a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1ZM6.17 5.11a.75.75 0 0 1 0 1.06 8.25 8.25 0 0 0 0 11.66.75.75 0 0 1-1.06 1.06 9.75 9.75 0 0 1 0-13.78.75.75 0 0 1 1.06 0Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.991 7.93a.75.75 0 0 1-.001 1.061 4.25 4.25 0 0 0 0 6.018.75.75 0 1 1-1.06 1.062 5.75 5.75 0 0 1 0-8.142.75.75 0 0 1 1.061.001ZM17.83 5.11a.75.75 0 0 1 1.061 0 9.75 9.75 0 0 1 0 13.78.75.75 0 1 1-1.061-1.06 8.25 8.25 0 0 0 0-11.66.75.75 0 0 1 0-1.06Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.009 7.93a.75.75 0 0 1 1.06-.001 5.75 5.75 0 0 1 0 8.142.75.75 0 0 1-1.059-1.062 4.249 4.249 0 0 0 0-6.018.75.75 0 0 1-.001-1.06Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgDetector;
