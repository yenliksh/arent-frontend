import * as React from 'react';
import { SVGProps } from 'react';

const SvgHairDryer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9.597 10.772 1.159 9.276a1.736 1.736 0 0 1-3.446.431l-1.187-9.495"
      stroke="#1C212D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m22 4.25-7.75-1.125M6.5 2a4.5 4.5 0 0 0 0 9c.789 0 1.87-.088 3.097-.228l6.201-1.011L22 8.75v-4.5l-7.75-1.125L6.5 2Zm12 2.1v4.8-4.8ZM22 8.75l-6.202 1.011L22 8.75Z"
      stroke="#1C212D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0v0Z"
      stroke="#1C212D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgHairDryer;
