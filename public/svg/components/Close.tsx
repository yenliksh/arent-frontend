import * as React from 'react';
import { SVGProps } from 'react';

interface SVGCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgClose = ({ color = '#AFB5C0', ...props }: SVGCloseProps) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.023 6.023a.625.625 0 0 1 .884 0l7.07 7.07a.625.625 0 0 1-.883.884l-7.071-7.07a.625.625 0 0 1 0-.884Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.977 6.023a.625.625 0 0 1 0 .883l-7.071 7.071a.625.625 0 0 1-.884-.883l7.071-7.071a.625.625 0 0 1 .884 0Z"
      fill={color}
    />
  </svg>
);

export default SvgClose;
