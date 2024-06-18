import * as React from 'react';
import { SVGProps } from 'react';

const SvgHangerTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.665 7.83a.75.75 0 0 1 .67 0l9.147 4.572a2.296 2.296 0 0 1-1.027 4.348H18.5a.75.75 0 0 1 0-1.5h1.955a.795.795 0 0 0 .356-1.506l-8.81-4.405-8.811 4.405a.796.796 0 0 0 .355 1.506H5.5a.75.75 0 0 1 0 1.5H3.545a2.295 2.295 0 0 1-1.026-4.348l9.146-4.573Z"
      fill="#1C212D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.056 2.055A2.75 2.75 0 0 1 14.75 4c0 .435-.18.976-.365 1.445-.2.504-.461 1.055-.716 1.558a37.34 37.34 0 0 1-.933 1.723l-.066.113-.017.03-.006.01s0 .002-.647-.379l.646.38a.75.75 0 1 1-1.292-.76v-.002l.005-.007.015-.027a34.034 34.034 0 0 0 .957-1.759c.245-.484.484-.989.66-1.432.188-.477.259-.776.259-.893a1.25 1.25 0 0 0-2.5 0 .75.75 0 0 1-1.5 0c0-.73.29-1.429.806-1.945ZM4.75 15a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-7Zm1.5.75v5.5h11.5v-5.5H6.25Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgHangerTwo;
