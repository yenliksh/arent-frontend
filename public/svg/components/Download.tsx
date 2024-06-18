import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.4a.6.6 0 0 1 .6.6v9.218l2.976-2.976a.6.6 0 0 1 .849.849l-4 4a.6.6 0 0 1-.849 0l-4-4a.6.6 0 1 1 .849-.849L9.4 11.218V2a.6.6 0 0 1 .6-.6ZM3.334 13.333c.368 0 .666.299.666.667v2a1.33 1.33 0 0 0 1.329 1.333h9.34c.735 0 1.331-.596 1.331-1.333v-2a.667.667 0 0 1 1.334 0v2a2.665 2.665 0 0 1-2.665 2.667h-9.34A2.663 2.663 0 0 1 2.667 16v-2c0-.368.298-.667.667-.667Z"
      fill="#000"
    />
  </svg>
);

export default SvgDownload;
