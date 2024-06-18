import * as React from 'react';
import { SVGProps } from 'react';

const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"
      fill={props.color || '#1C212D'}
    />
    <circle cx={12} cy={12} r={4} fill="#fff" />
  </svg>
);

export default SvgRadio;
