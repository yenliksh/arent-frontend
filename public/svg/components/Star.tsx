import * as React from 'react';
import { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m8.927 3.432.94 1.88c.126.26.466.507.753.56l1.7.28c1.087.18 1.34.967.56 1.754l-1.327 1.326c-.22.22-.346.654-.273.967l.38 1.64c.3 1.293-.393 1.8-1.533 1.12l-1.594-.947c-.286-.173-.766-.173-1.053 0l-1.593.947c-1.14.674-1.834.174-1.534-1.12l.38-1.64c.06-.32-.066-.753-.286-.973L3.12 7.899c-.78-.78-.527-1.567.56-1.753l1.7-.28c.287-.047.627-.3.753-.56l.94-1.88c.514-1.014 1.34-1.014 1.854.006Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgStar;
