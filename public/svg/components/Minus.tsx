import * as React from 'react';
import { SVGProps } from 'react';

interface SvgMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgMinus = ({ color = '#1C212D', ...props }: SvgMinusProps) => (
  <svg width={20} height={20} fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.375 10c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5A.625.625 0 0 1 4.375 10Z"
      fill={color}
    />
  </svg>
);

export default SvgMinus;
