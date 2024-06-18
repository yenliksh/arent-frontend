import * as React from 'react';
import { SVGProps } from 'react';

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6.113A1.884 1.884 0 0 0 6.113 8c0 1.044.843 1.887 1.887 1.887A1.884 1.884 0 0 0 9.887 8 1.884 1.884 0 0 0 8 6.113ZM5.113 8A2.884 2.884 0 0 1 8 5.113 2.884 2.884 0 0 1 10.887 8 2.884 2.884 0 0 1 8 10.887 2.884 2.884 0 0 1 5.113 8Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.505 5.998C3.099 3.492 5.435 1.98 8 1.98s4.901 1.513 6.495 4.018c.363.57.528 1.3.528 1.999 0 .699-.165 1.428-.528 1.998-1.594 2.506-3.93 4.018-6.495 4.018-2.566 0-4.901-1.512-6.495-4.018-.364-.57-.528-1.3-.528-1.998 0-.7.164-1.43.528-1.999ZM8 2.98c-2.141 0-4.192 1.26-5.652 3.555-.236.371-.371.901-.371 1.462 0 .56.135 1.09.371 1.46v.001c1.46 2.294 3.51 3.555 5.652 3.555 2.141 0 4.192-1.26 5.651-3.555.237-.37.372-.9.372-1.461 0-.56-.135-1.091-.371-1.461v-.001C12.191 4.241 10.141 2.98 8 2.98Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgEye;
