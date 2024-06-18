import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.345 12.766a1 1 0 0 0 1.31 0l3.09-2.677c.7-.606.272-1.756-.654-1.756H6.908c-.925 0-1.354 1.15-.654 1.756l3.091 2.677Z"
      fill="#AFB5C0"
    />
  </svg>
);

export default SvgArrowBottom;
