import * as React from 'react';
import { SVGProps } from 'react';

const SvgDe = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={28} height={20} rx={2} fill="#fff" />
    <mask
      id="DE_svg__a"
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
    <g mask="url(#DE_svg__a)">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 6.667h28V0H0v6.667Z" fill="#262626" />
      <g filter="url(#DE_svg__b)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 13.333h28V6.667H0v6.666Z" fill="#F01515" />
      </g>
      <g filter="url(#DE_svg__c)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 20h28v-6.667H0V20Z" fill="#FFD521" />
      </g>
    </g>
    <defs>
      <filter
        id="DE_svg__b"
        x={0}
        y={6.667}
        width={28}
        height={6.667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_36_155866" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_155866" result="shape" />
      </filter>
      <filter
        id="DE_svg__c"
        x={0}
        y={13.333}
        width={28}
        height={6.667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_36_155866" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_155866" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgDe;
