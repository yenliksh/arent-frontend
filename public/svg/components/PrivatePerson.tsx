import * as React from 'react';
import { SVGProps } from 'react';

const SvgPrivateperson = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.754 14a2.248 2.248 0 0 1 2.249 2.25v.575c0 .894-.32 1.759-.901 2.438-1.57 1.833-3.957 2.738-7.102 2.738-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.9-2.434v-.578A2.25 2.25 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.75.75 0 0 0-.75.75v.577c0 .535.193 1.053.54 1.46 1.254 1.469 3.22 2.214 5.958 2.214s4.706-.745 5.962-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
      fill={props.color || '#1C212D'}
    />
  </svg>
);

export default SvgPrivateperson;
