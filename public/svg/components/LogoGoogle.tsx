import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogoGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.64 12.205c0-.639-.057-1.252-.164-1.841H12v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.805.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H3.957v2.332A8.997 8.997 0 0 0 12 21Z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.964 13.71A5.41 5.41 0 0 1 6.682 12c0-.593.102-1.17.282-1.71V7.958H3.957A8.996 8.996 0 0 0 3 12c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.462 3.891 14.426 3 12 3a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332C7.672 8.163 9.656 6.58 12 6.58Z"
      fill="#EA4335"
    />
  </svg>
);

export default SvgLogoGoogle;
