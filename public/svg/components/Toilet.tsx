import * as React from 'react';
import { SVGProps } from 'react';

const SvgToilet = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.25 6a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm4.8 12.534.319 2.25a1.49 1.49 0 0 1-1.482 1.716H9.113a1.492 1.492 0 0 1-1.482-1.716l.319-2.25A9 9 0 0 1 3 10.5a.75.75 0 0 1 .75-.75h1.5v-6a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v6h1.5a.75.75 0 0 1 .75.75 9 9 0 0 1-4.95 8.034ZM6.75 9.75h10.5v-6H6.75v6Zm7.866 9.366a9.093 9.093 0 0 1-5.232 0L9.113 21h5.774l-.271-1.884Zm4.846-7.866H4.537a7.5 7.5 0 0 0 14.925 0Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgToilet;
