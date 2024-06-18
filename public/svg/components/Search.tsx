import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3332 18.3332L16.6665 16.6665"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSearch;