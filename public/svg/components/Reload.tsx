import * as React from 'react';
import { SVGProps } from 'react';

const SvgReload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#EFF1F5" />
  </svg>
);

export default SvgReload;
