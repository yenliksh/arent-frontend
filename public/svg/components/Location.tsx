import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.62 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28A5.436 5.436 0 0 0 12 22.25c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27ZM12 13.46a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Z"
      fill="#8991A1"
    />
  </svg>
);

export default SvgLocation;
