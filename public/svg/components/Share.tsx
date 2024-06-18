import * as React from 'react';
import { SVGProps } from 'react';

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.35 9.2a.85.85 0 0 0-.85.85v9.6c0 .47.38.85.85.85h12.8c.47 0 .85-.38.85-.85v-9.6a.85.85 0 0 0-.85-.85h-2a.75.75 0 0 1 0-1.5h2a2.35 2.35 0 0 1 2.35 2.35v9.6A2.35 2.35 0 0 1 18.15 22H5.35A2.35 2.35 0 0 1 3 19.65v-9.6A2.35 2.35 0 0 1 5.35 7.7h2a.75.75 0 0 1 0 1.5h-2ZM11 3.861 8.68 6.18A.75.75 0 1 1 7.62 5.12l3.6-3.6a.75.75 0 0 1 1.06 0l3.6 3.6a.75.75 0 0 1-1.06 1.06L12.5 3.86v10.99a.75.75 0 0 1-1.5 0V3.861Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgShare;
