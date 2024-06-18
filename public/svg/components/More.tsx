import * as React from 'react';
import { SVGProps } from 'react';

const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2.5c-.688 0-1.25.563-1.25 1.25C8.75 4.438 9.313 5 10 5c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25ZM10 15c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25Zm0-6.25c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgMore;
