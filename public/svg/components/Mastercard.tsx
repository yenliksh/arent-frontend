import * as React from 'react';
import { SVGProps } from 'react';

const SvgMastercard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={38} height={27} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#mastercard_svg__a)">
      <path d="M22.916 6.424h-7.854v14.151h7.854V6.424Z" fill="#FF5F00" />
      <path
        d="M15.561 13.5a9.003 9.003 0 0 1 3.429-7.076 8.963 8.963 0 0 0-9.47-1.019 8.984 8.984 0 0 0-3.686 3.32 9.018 9.018 0 0 0 0 9.55 8.984 8.984 0 0 0 3.686 3.32 8.955 8.955 0 0 0 9.47-1.02A8.98 8.98 0 0 1 15.56 13.5Z"
        fill="#EB001B"
      />
      <path
        d="M33.51 13.5a9.017 9.017 0 0 1-1.366 4.775 8.984 8.984 0 0 1-3.686 3.32 8.955 8.955 0 0 1-9.47-1.02 9.02 9.02 0 0 0 0-14.152 8.962 8.962 0 0 1 9.47-1.018 8.984 8.984 0 0 1 3.686 3.32A9.017 9.017 0 0 1 33.51 13.5ZM32.655 19.077v-.29h.116v-.059h-.296v.06h.116v.289h.064Zm.576 0v-.35h-.091l-.105.24-.104-.24h-.091v.35h.064v-.264l.098.228h.067l.098-.228v.264h.064Z"
        fill="#F79E1B"
      />
    </g>
    <defs>
      <clipPath id="mastercard_svg__a">
        <path fill="#fff" d="M0 0h38v27H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMastercard;
