import * as React from 'react';
import { SVGProps } from 'react';

const SvgAvatar20 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill="#E6E9EE" />
    <path
      d="M10 5a2.377 2.377 0 0 0-2.375 2.375c0 1.285 1.005 2.325 2.315 2.37a.403.403 0 0 1 .11 0h.035a2.369 2.369 0 0 0 2.29-2.37A2.377 2.377 0 0 0 10 5ZM12.54 11.075c-1.394-.93-3.67-.93-5.075 0-.635.425-.985 1-.985 1.615s.35 1.185.98 1.605c.7.47 1.62.705 2.54.705.92 0 1.84-.235 2.54-.705.63-.425.98-.995.98-1.615-.005-.615-.35-1.185-.98-1.605Z"
      fill="#AFB5C0"
    />
  </svg>
);

export default SvgAvatar20;
