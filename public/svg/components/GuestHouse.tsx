import * as React from 'react';
import { SVGProps } from 'react';

const SvgGuesthouse = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#guest_house_svg__a)" fillRule="evenodd" clipRule="evenodd" fill="#1C212D">
      <path d="M11.624 3.35a.75.75 0 0 1 .752 0l9.5 5.5a.75.75 0 1 1-.752 1.3l-8.623-4.993a1 1 0 0 0-1.002 0l-8.623 4.992a.75.75 0 0 1-.752-1.298l9.5-5.5ZM12 15.75A4.25 4.25 0 0 0 7.75 20v.25a.75.75 0 0 1-1.5 0V20a5.75 5.75 0 0 1 11.5 0v.25a.75.75 0 0 1-1.5 0V20A4.25 4.25 0 0 0 12 15.75Z" />
      <path d="M9.348 9.348a3.75 3.75 0 1 1 5.304 5.303 3.75 3.75 0 0 1-5.304-5.303ZM12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    </g>
    <defs>
      <clipPath id="guest_house_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGuesthouse;
