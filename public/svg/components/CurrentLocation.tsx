import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrentLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" {...props}>
    <circle opacity="0.3" cx="15.5" cy="15.5" r="15" fill="#E6EEFD" stroke="#1656CF" />
    <g filter="url(#filter0_d_3448_415923)">
      <circle cx="15.5" cy="15.5" r="10.5" fill="white" />
    </g>
    <circle cx="15.5" cy="15.5" r="7.5" fill="#1656CF" />
    <defs>
      <filter
        id="filter0_d_3448_415923"
        x="1"
        y="1"
        width="29"
        height="29"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.00833333 0 0 0 0 0.00833333 0 0 0 0 0.00833333 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3448_415923" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3448_415923" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgCurrentLocation;
