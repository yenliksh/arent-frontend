import * as React from 'react';
import { SVGProps } from 'react';

const SvgAvatar40 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20} cy={20} r={20} fill="#E6E9EE" />
    <path
      d="M20 11.667a3.962 3.962 0 0 0-3.958 3.958c0 2.142 1.675 3.875 3.858 3.95a.667.667 0 0 1 .184 0h.058a3.949 3.949 0 0 0 3.817-3.95A3.962 3.962 0 0 0 20 11.667ZM24.234 21.792c-2.325-1.55-6.117-1.55-8.459 0-1.058.708-1.641 1.666-1.641 2.691s.583 1.975 1.633 2.675c1.167.784 2.7 1.175 4.233 1.175 1.534 0 3.067-.391 4.234-1.175 1.05-.708 1.633-1.658 1.633-2.691-.008-1.025-.583-1.975-1.633-2.675Z"
      fill="#AFB5C0"
    />
  </svg>
);

export default SvgAvatar40;
