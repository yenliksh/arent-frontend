import * as React from 'react';
import { SVGProps } from 'react';

const SvgAz = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={28} height={20} rx={2} fill="#fff" />
    <mask
      id="AZ_svg__a"
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
    <g mask="url(#AZ_svg__a)">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 6.667h28V0H0v6.667Z" fill="#24AAD5" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 20h28v-6.667H0V20Z" fill="#21BF75" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 13.333h28V6.667H0v6.666Z" fill="#ED1845" />
      <g filter="url(#AZ_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 12a1.99 1.99 0 0 0 1.112-.337 1.667 1.667 0 1 1 0-3.326A2 2 0 1 0 14 12Zm2-2a.667.667 0 1 1-1.333 0A.667.667 0 0 1 16 10Z"
          fill="#fff"
        />
      </g>
    </g>
    <defs>
      <filter
        id="AZ_svg__b"
        x={12}
        y={8}
        width={4}
        height={5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_36_155476" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_155476" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgAz;
