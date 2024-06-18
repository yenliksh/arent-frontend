import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlash = (props: SVGProps<SVGSVGElement>) => (
  <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M32.669 4H15.331C8.553 4 4.001 8.756 4.001 15.834v16.334C4.001 39.244 8.553 44 15.331 44h17.336c6.778 0 11.334-4.756 11.334-11.832V15.834C44.001 8.756 39.447 4 32.669 4Z"
      fill="#fff"
    />
    <path
      d="M23.111 35a1 1 0 0 1-.99-1.11l.77-7.09h-5.89a1.001 1.001 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14h5.89a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"
      fill="#4FC168"
    />
  </svg>
);

export default SvgFlash;
