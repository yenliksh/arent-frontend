import * as React from 'react';
import { SVGProps } from 'react';

const SvgHostel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.125 11.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Zm0-1.5a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Z"
      fill="#1C212D"
    />
    <path
      d="M18.75 10.5h-6a1.5 1.5 0 0 0-1.5 1.5v3.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.547a1 1 0 0 1 .526-.88l8-4.307a1 1 0 0 1 .948 0l8.262 4.444a.748.748 0 0 0 .71-1.318L12.352 1.59a.75.75 0 0 0-.704 0l-9.75 5.25a.75.75 0 0 0-.398.66v14.25a.75.75 0 0 0 1.5 0V19a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.75a.75.75 0 0 0 1.5 0v-7.5a3.75 3.75 0 0 0-3.75-3.75Zm-5 6a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h5A2.25 2.25 0 0 1 21 14.25v1.25a1 1 0 0 1-1 1h-6.25Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgHostel;
