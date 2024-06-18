import * as React from 'react';
import { SVGProps } from 'react';

const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m7.291 20.824-3.757.835a1 1 0 0 1-1.193-1.193l.835-3.757A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.955 9.955 0 0 1-4.709-1.176Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgChat;
