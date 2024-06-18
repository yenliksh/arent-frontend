import * as React from 'react';
import { SVGProps } from 'react';

const SvgNopets = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.571 5.571V4.143a2.143 2.143 0 0 0-3.658-1.515M6 6c0 .568.098 1.098.5 1.5.402.402.932.5 1.5.5m9.714-2.429V4.143a2.143 2.143 0 0 0-4.285 0V5.57a2.143 2.143 0 1 0 4.285 0ZM22 12v-.714a2.143 2.143 0 0 0-4.286 0V12A2.143 2.143 0 1 0 22 12ZM6.286 12v-.714a2.143 2.143 0 1 0-4.286 0V12a2.142 2.142 0 1 0 4.286 0Zm-.922 5.914 4.169-5.061c.3-.364 1.217-1.366 1.643-1.567L19 19c.5 1.5-.658 3.228-2.293 3-.277 0-.55-.064-.798-.189l-.515-.257a7.592 7.592 0 0 0-6.79 0l-.514.257c-.247.124-.52.189-.797.189-2.112 0-3.27-2.457-1.929-4.086Z"
      stroke={props.color || '#1C212D'}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="m3 3 18 18"
      stroke={props.color || '#1C212D'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgNopets;
