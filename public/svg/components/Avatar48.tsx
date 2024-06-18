import * as React from 'react';
import { SVGProps } from 'react';

const SvgAvatar48 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={24} cy={24} r={24} fill="#F6F7F9" />
    <path
      d="M24 15.667a3.962 3.962 0 0 0-3.958 3.958c0 2.142 1.675 3.875 3.858 3.95a.675.675 0 0 1 .184 0h.058a3.948 3.948 0 0 0 3.817-3.95A3.962 3.962 0 0 0 24 15.667ZM28.234 25.791c-2.325-1.55-6.117-1.55-8.459 0-1.058.709-1.641 1.667-1.641 2.692 0 1.025.583 1.975 1.633 2.675 1.167.783 2.7 1.175 4.233 1.175 1.534 0 3.067-.392 4.234-1.175 1.05-.708 1.633-1.658 1.633-2.692-.008-1.025-.583-1.975-1.633-2.675Z"
      fill="#AFB5C0"
    />
  </svg>
);

export default SvgAvatar48;
