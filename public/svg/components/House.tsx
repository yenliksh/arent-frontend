import * as React from 'react';
import { SVGProps } from 'react';

const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22.5 19.5H21v-8.672a1.5 1.5 0 0 0-.488-1.106l-7.5-6.816a1.5 1.5 0 0 0-2.024 0l-7.5 6.816A1.5 1.5 0 0 0 3 10.828V19.5H1.5a.75.75 0 1 0 0 1.5h21a.75.75 0 1 0 0-1.5Zm-18-8.672L12 4.013l7.5 6.815V19.5H15V15a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 15v4.5H4.5v-8.672Zm9 8.672h-3V15h3v4.5Z"
      fill="#1C212D"
    />
  </svg>
);

export default SvgHouse;
