import * as React from 'react';
import { SVGProps } from 'react';

const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM2.76 12a9.24 9.24 0 1 0 18.48 0 9.24 9.24 0 0 0-18.48 0Z"
      fill="#CDD1DB"
    />
    <path
      d="M12 1.88c0-.486.395-.884.88-.845a11 11 0 0 1 6.507 19.116c-.36.326-.916.252-1.212-.133-.297-.385-.222-.935.134-1.267a9.24 9.24 0 0 0-5.43-15.95C12.395 2.757 12 2.367 12 1.88Z"
      fill="#8991A1"
    />
  </svg>
);

export default SvgLoading;
