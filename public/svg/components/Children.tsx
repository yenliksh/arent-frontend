import * as React from 'react';
import { SVGProps } from 'react';

const SvgChildren = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.69 9.377a8.64 8.64 0 0 0-6.308-5.098l.857-1.37a.75.75 0 1 0-1.273-.795L12.71 4.125a8.627 8.627 0 0 0-7.9 5.252 3.374 3.374 0 0 0 0 6.746 8.629 8.629 0 0 0 15.881 0 3.374 3.374 0 0 0 0-6.746Zm1.273 4.686c-.343.35-.81.552-1.301.56l-.972.02-.38.893a7.128 7.128 0 0 1-13.12 0l-.38-.894-.972-.018a1.874 1.874 0 0 1 0-3.748l.972-.018.38-.894a7.128 7.128 0 0 1 13.12 0l.38.894.972.018a1.874 1.874 0 0 1 1.3 3.187Z"
      fill={props.color || '#1C212D'}
    />
    <path
      d="M8.625 11.813a.937.937 0 1 1 1.875 0 .937.937 0 0 1-1.875 0Zm6.375 0a.937.937 0 1 1 1.875 0 .937.937 0 0 1-1.875 0ZM12.75 18a3.75 3.75 0 0 0 3.465-2.315c.31-.751-.374-1.435-1.188-1.435h-4.554c-.814 0-1.499.684-1.188 1.435A3.752 3.752 0 0 0 12.75 18Z"
      fill={props.color || '#1C212D'}
    />
  </svg>
);

export default SvgChildren;