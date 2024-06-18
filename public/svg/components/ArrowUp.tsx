import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.618 12h6.766c.548 0 .822-.607.434-.963l-2.96-2.711a1.298 1.298 0 0 0-1.72 0l-1.126 1.03-1.834 1.681c-.383.356-.108.963.44.963Z"
      fill="#8991A1"
    />
  </svg>
);

export default SvgArrowUp;
