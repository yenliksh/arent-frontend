import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirConditioning = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4.75a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h18a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25H3ZM1.25 5c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 21 14.75H3A1.75 1.75 0 0 1 1.25 13V5Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.25 7a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-10 3A.75.75 0 0 1 6 9.25h12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-4Zm1.5.75v2.5h10.5v-2.5H6.75Zm5.25 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm-4 1a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm8 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgAirConditioning;
