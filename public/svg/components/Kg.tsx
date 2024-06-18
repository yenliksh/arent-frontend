import * as React from 'react';
import { SVGProps } from 'react';

const SvgKg = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={28} height={20} rx={2} fill="#fff" />
    <mask
      id="KG_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={28}
      height={20}>
      <rect width={28} height={20} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#KG_svg__a)">
      <path fill="#F22A46" d="M0 0h28v20H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 13.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
        fill="#FFF04D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.368 17.15 14 14.713l1.632 2.435.414-2.902 2.527 1.486-.887-2.794 2.921.243-2.011-2.133L21.334 10l-2.738-1.049 2.011-2.133-2.921.243.887-2.794-2.527 1.486-.414-2.902L14 5.286l-1.632-2.435-.413 2.902-2.527-1.486.887 2.794-2.922-.243 2.012 2.133-2.738 1.05 2.738 1.048-2.012 2.133 2.922-.243-.887 2.794 2.527-1.486.413 2.902Zm6.3-7.15a4.667 4.667 0 1 1-9.334 0 4.667 4.667 0 0 1 9.333 0Z"
        fill="#FFF04D"
      />
    </g>
  </svg>
);
export default SvgKg;
