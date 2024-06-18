import * as React from 'react';
import { SVGProps } from 'react';

const SvgForkSpoon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 9.617V2.25a.75.75 0 0 1 1.5 0v7.367A2.25 2.25 0 0 0 9 7.494V2.25a.75.75 0 0 1 1.5 0v5.244a3.75 3.75 0 0 1-3 3.675V21.75a.75.75 0 1 1-1.5 0V11.169a3.75 3.75 0 0 1-3-3.675V2.25a.75.75 0 0 1 1.5 0v5.244A2.25 2.25 0 0 0 6 9.617Zm9.75 3.8C13.621 12.942 12 10.474 12 7.5c0-3.315 2.014-6 4.5-6 2.485 0 4.5 2.685 4.5 6 0 2.973-1.622 5.44-3.75 5.918v8.332a.75.75 0 1 1-1.5 0v-8.332ZM16.5 12c1.548 0 3-1.935 3-4.5S18.048 3 16.5 3s-3 1.935-3 4.5 1.452 4.5 3 4.5Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgForkSpoon;
