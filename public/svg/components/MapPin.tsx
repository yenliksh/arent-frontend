import * as React from 'react';
import { SVGProps } from 'react';

const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#map-pin_svg__a)">
      <path
        d="M27.546 24.992 18 34.538l-9.546-9.546a13.5 13.5 0 1 1 19.092 0ZM18 18.446a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="#1C212D"
      />
    </g>
    <defs>
      <clipPath id="map-pin_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMapPin;
