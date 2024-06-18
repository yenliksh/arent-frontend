import * as React from 'react';
import { SVGProps } from 'react';

const SvgParty = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 14c-1 .485-2.5 1.944-2.5 3.5 0 1.555 5 .722 5 2.278C15.5 21.333 10 22 10 22m7.5-14c.5-4-1.436-6-4.937-6C9.063 2 7 4.5 7.5 8s3.627 6 5.063 6C14 14 17 12 17.5 8Z"
      stroke={props.color || '#0C0C0C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgParty;
