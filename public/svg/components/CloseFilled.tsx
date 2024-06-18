import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM3.52438 3.52511C3.71964 3.32985 4.03622 3.32985 4.23148 3.52511L5.99902 5.29265L7.76656 3.52511C7.96183 3.32985 8.27841 3.32985 8.47367 3.52511C8.66893 3.72037 8.66893 4.03695 8.47367 4.23222L6.70613 5.99976L8.47412 7.76775C8.66939 7.96301 8.66939 8.27959 8.47412 8.47486C8.27886 8.67012 7.96228 8.67012 7.76702 8.47486L5.99902 6.70686L4.23103 8.47486C4.03577 8.67012 3.71919 8.67012 3.52392 8.47486C3.32866 8.27959 3.32866 7.96301 3.52392 7.76775L5.29192 5.99976L3.52438 4.23222C3.32911 4.03695 3.32911 3.72037 3.52438 3.52511Z"
      fill="#CDD1DB"
    />
  </svg>
);

export default SvgCloseCircle;