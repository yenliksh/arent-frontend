import * as React from 'react';
import { SVGProps } from 'react';

const SvgAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 1a2.377 2.377 0 0 0-2.375 2.375c0 1.285 1.005 2.325 2.315 2.37a.403.403 0 0 1 .11 0h.035a2.369 2.369 0 0 0 2.29-2.37A2.377 2.377 0 0 0 6 1ZM8.54 7.075c-1.395-.93-3.67-.93-5.075 0-.635.425-.985 1-.985 1.615s.35 1.185.98 1.605c.7.47 1.62.705 2.54.705.92 0 1.84-.235 2.54-.705.63-.425.98-.995.98-1.615-.005-.615-.35-1.185-.98-1.605Z"
      fill="#AFB5C0"
    />
    <rect x={-73.5} y={-186.5} width={1149} height={2559} rx={37.5} stroke="#fff" strokeWidth={3} />
  </svg>
);

export default SvgAvatar;
