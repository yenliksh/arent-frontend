import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.833 8C.833 4.057 4.057.833 8 .833c3.943 0 7.166 3.224 7.166 7.167 0 3.943-3.223 7.167-7.166 7.167C4.057 15.167.833 11.943.833 8ZM8 1.833C4.61 1.833 1.833 4.61 1.833 8c0 3.39 2.776 6.167 6.167 6.167 3.39 0 6.166-2.777 6.166-6.167 0-3.39-2.776-6.167-6.166-6.167Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6.967a.5.5 0 0 1 .5.5V10.8a.5.5 0 1 1-1 0V7.467a.5.5 0 0 1 .5-.5ZM7.33 5.5c0-.368.298-.667.666-.667h.006a.667.667 0 0 1 0 1.334h-.006a.667.667 0 0 1-.667-.667Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgInfoCircle;
