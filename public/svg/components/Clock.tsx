import * as React from 'react';
import { SVGProps } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75c-5.106 0-9.25 4.144-9.25 9.25s4.144 9.25 9.25 9.25 9.25-4.144 9.25-9.25S17.106 2.75 12 2.75ZM1.25 12C1.25 6.066 6.066 1.25 12 1.25S22.75 6.066 22.75 12 17.934 22.75 12 22.75 1.25 17.934 1.25 12Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.63 6.76a.75.75 0 0 1 .75.75v4.1c0 .154.058.376.189.605.13.228.292.392.423.47l.002.001 3.1 1.85a.75.75 0 1 1-.769 1.288l-3.098-1.849c-.409-.243-.737-.624-.961-1.017-.225-.394-.386-.872-.386-1.348v-4.1a.75.75 0 0 1 .75-.75Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgClock;
