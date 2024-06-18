import * as React from 'react';
import { SVGProps } from 'react';

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0ZM3.524 3.525a.5.5 0 0 1 .707 0L6 5.293l1.768-1.768a.5.5 0 0 1 .707.707L6.706 6l1.768 1.768a.5.5 0 1 1-.707.707L5.999 6.707 4.231 8.475a.5.5 0 0 1-.707-.707L5.292 6 3.524 4.232a.5.5 0 0 1 0-.707Z"
      fill="#CDD1DB"
    />
  </svg>
);

export default SvgDelete;
