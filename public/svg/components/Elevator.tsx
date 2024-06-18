import * as React from 'react';
import { SVGProps } from 'react';

const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.75a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25H6ZM4.25 5c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19V5Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.25a.75.75 0 0 1 .53.22l2 2a.75.75 0 1 1-1.06 1.06L12 9.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 .53-.22Zm-2.53 6.22a.75.75 0 0 1 1.06 0L12 14.94l1.47-1.47a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 0-1.06Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgElevator;
