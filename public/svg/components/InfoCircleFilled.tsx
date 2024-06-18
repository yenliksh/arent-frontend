import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfoCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.042 10c0-4.928 4.03-8.958 8.958-8.958 4.929 0 8.959 4.03 8.959 8.958 0 4.929-4.03 8.958-8.959 8.958-4.928 0-8.958-4.03-8.958-8.958ZM10 8.71c.345 0 .625.28.625.625V13.5a.625.625 0 0 1-1.25 0V9.334c0-.346.28-.625.625-.625Zm-.005-2.667a.833.833 0 0 0 0 1.666h.008a.833.833 0 1 0 0-1.666h-.008Z"
      fill="#CDD1DB"
    />
  </svg>
);

export default SvgInfoCircleFilled;
