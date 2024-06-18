import * as React from 'react';
import { SVGProps } from 'react';

const SvgHouses = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <mask
      id="mask0_3084_382553"
      // style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="1"
      y="2"
      width="22"
      height="20">
      <path d="M1 2H23V22H1V2Z" fill="white" />
    </mask>
    <g mask="url(#mask0_3084_382553)">
      <path
        d="M1.85938 12L12 2.78125L22.1406 12"
        stroke={props.color || '#AFB5C0'}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.54883 10.4635V21.2188H20.4499V10.4635"
        stroke={props.color || '#AFB5C0'}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.61914 21.2188V15.0729H15.3795V21.2188"
        stroke={props.color || '#AFB5C0'}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default SvgHouses;
