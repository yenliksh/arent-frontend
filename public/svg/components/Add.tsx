import * as React from 'react';
import { SVGProps } from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.375 10c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5A.625.625 0 0 1 4.375 10Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4.375c.345 0 .625.28.625.625v10a.625.625 0 1 1-1.25 0V5c0-.345.28-.625.625-.625Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgAdd;
