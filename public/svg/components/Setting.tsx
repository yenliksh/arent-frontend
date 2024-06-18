import * as React from 'react';
import { SVGProps } from 'react';

const SvgSetting = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.333 5.417h-5M5 5.417H1.667M8.334 8.333a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833ZM18.333 14.583H15M6.667 14.583h-5M11.667 17.5a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
      stroke={props.color || '#1C212D'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSetting;
