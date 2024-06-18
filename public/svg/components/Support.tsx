import * as React from 'react';
import { SVGProps } from 'react';

interface SvgSupportProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgSupport = ({ color = '#4E545F', ...props }: SvgSupportProps) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Support_svg__a)" stroke={color} strokeWidth={2.857} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.152 20v-6.474A9.676 9.676 0 0 1 20 3.999a9.674 9.674 0 0 1 9.847 9.527V20M6.46 16.308H8.92a1.231 1.231 0 0 1 1.231 1.23v7.386a1.23 1.23 0 0 1-1.23 1.23H6.46a2.462 2.462 0 0 1-2.462-2.461v-4.924a2.462 2.462 0 0 1 2.462-2.461v0Z" />
      <path d="M33.538 26.154h-2.461a1.23 1.23 0 0 1-1.231-1.23v-7.386a1.23 1.23 0 0 1 1.23-1.23h2.462A2.462 2.462 0 0 1 36 18.767v4.924a2.462 2.462 0 0 1-2.462 2.462v0Z" />
      <path d="M24.924 32.924A4.923 4.923 0 0 0 29.847 28v-5.538M24.923 32.924a3.078 3.078 0 0 1-3.077 3.077h-3.693a3.077 3.077 0 0 1 0-6.154h3.693a3.077 3.077 0 0 1 3.077 3.077Z" />
    </g>
    <defs>
      <clipPath id="Support_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSupport;
