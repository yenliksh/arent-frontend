import * as React from 'react';
import { SVGProps } from 'react';

const SvgTick = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.625 6A5.38 5.38 0 0 0 6 11.375 5.38 5.38 0 0 0 11.375 6 5.38 5.38 0 0 0 6 .625 5.38 5.38 0 0 0 .625 6Zm4.4 1.68a.375.375 0 0 0 .53 0L8.39 4.845a.377.377 0 0 0 0-.53.377.377 0 0 0-.53 0l-2.57 2.57-1.15-1.15a.377.377 0 0 0-.53 0 .377.377 0 0 0 0 .53L5.025 7.68Z"
      fill="#AFB5C0"
    />
  </svg>
);

export default SvgTick;
