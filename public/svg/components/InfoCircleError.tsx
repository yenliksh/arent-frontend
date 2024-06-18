import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfoCircleError = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 12C1.25 6.086 6.086 1.25 12 1.25c5.915 0 10.75 4.836 10.75 10.75S17.915 22.75 12 22.75C6.087 22.75 1.25 17.914 1.25 12Zm10.748 1.75a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75Zm.006 3.2a1 1 0 0 0 0-2h-.01a1 1 0 1 0 0 2h.01Z"
      fill="#DE4444"
    />
  </svg>
);

export default SvgInfoCircleError;
