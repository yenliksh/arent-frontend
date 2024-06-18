import * as React from 'react';
import { SVGProps } from 'react';

const SvgElementPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.333 6.892V3.525c0-1.325-.533-1.858-1.858-1.858h-3.367c-1.325 0-1.858.533-1.858 1.858v3.367c0 1.325.533 1.858 1.858 1.858h3.367c1.325 0 1.858-.533 1.858-1.858ZM18.333 16.475v-3.367c0-1.325-.533-1.858-1.858-1.858h-3.367c-1.325 0-1.858.533-1.858 1.858v3.367c0 1.325.533 1.858 1.858 1.858h3.367c1.325 0 1.858-.533 1.858-1.858ZM8.75 7.1V3.317c0-1.175-.533-1.65-1.858-1.65H3.525c-1.325 0-1.858.475-1.858 1.65v3.775c0 1.183.533 1.65 1.858 1.65h3.367C8.217 8.75 8.75 8.275 8.75 7.1ZM8.75 16.475v-3.367c0-1.325-.533-1.858-1.858-1.858H3.525c-1.325 0-1.858.533-1.858 1.858v3.367c0 1.325.533 1.858 1.858 1.858h3.367c1.325 0 1.858-.533 1.858-1.858Z"
      stroke={props.color || '#1C212D'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgElementPlus;
