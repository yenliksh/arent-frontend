import * as React from 'react';
import { SVGProps } from 'react';

interface SvgCoinsProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgCoins = ({ color = '#4E545F', ...props }: SvgCoinsProps) => (
  <svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M24.922 21.229C31.04 21.229 36 19.025 36 16.305c0-2.719-4.96-4.923-11.078-4.923-6.118 0-11.078 2.204-11.078 4.923 0 2.72 4.96 4.924 11.078 4.924Z"
      stroke={color}
      strokeWidth={2.857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.844 16.306v14.77c0 2.708 4.923 4.924 11.078 4.924C31.076 36 36 33.784 36 31.076v-14.77"
      stroke={color}
      strokeWidth={2.857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 23.69c0 2.709-4.924 4.924-11.078 4.924-6.155 0-11.078-2.215-11.078-4.923M24.676 6.458a16.666 16.666 0 0 0-9.6-2.462c-6.13 0-11.079 2.216-11.079 4.924 0 1.453 1.428 2.757 3.693 3.693"
      stroke={color}
      strokeWidth={2.857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.69 27.383c-2.265-.935-3.693-2.24-3.693-3.693V8.92"
      stroke={color}
      strokeWidth={2.857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.69 19.998c-2.265-.935-3.693-2.24-3.693-3.693"
      stroke={color}
      strokeWidth={2.857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCoins;
