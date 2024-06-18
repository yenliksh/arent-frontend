import * as React from 'react';
import { SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 7h18M3 12h18M3 17h18" stroke="#1C212D" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export default SvgMenu;
