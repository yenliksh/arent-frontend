import * as React from 'react';
import { SVGProps } from 'react';

const SvgBathtub = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.75 9H19.5a.75.75 0 0 0-.75-.75h-6A.75.75 0 0 0 12 9H6V4.875a1.125 1.125 0 0 1 2.25 0 .75.75 0 0 0 1.5 0 2.625 2.625 0 0 0-5.25 0V9H2.25a1.5 1.5 0 0 0-1.5 1.5v3A5.25 5.25 0 0 0 6 18.75v1.5a.75.75 0 1 0 1.5 0v-1.5h9v1.5a.75.75 0 1 0 1.5 0v-1.5a5.25 5.25 0 0 0 5.25-5.25v-3a1.5 1.5 0 0 0-1.5-1.5ZM18 9.75v3h-4.5v-3H18Zm3.75 3.75A3.75 3.75 0 0 1 18 17.25H6a3.75 3.75 0 0 1-3.75-3.75v-3H12v3a.75.75 0 0 0 .75.75h6a.75.75 0 0 0 .75-.75v-3h2.25v3Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgBathtub;
