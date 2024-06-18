import * as React from 'react';
import { SVGProps } from 'react';

const SvgRoom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.25 3.75H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5Zm-16.5 1.5h16.5V9H3.75V5.25Zm16.5 13.5H10.5V10.5h9.75v8.25Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgRoom;
