import * as React from 'react';
import { SVGProps } from 'react';

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 4c-.406 0-.78-.233-.966-.593l-.48-.967c-.307-.607-1.107-1.107-1.787-1.107H7.24c-.686 0-1.486.5-1.793 1.107l-.48.967C4.78 3.767 4.407 4 4 4a2.502 2.502 0 0 0-2.5 2.66l.347 5.507c.08 1.373.82 2.5 2.66 2.5h6.987c1.84 0 2.573-1.127 2.66-2.5L14.5 6.66A2.502 2.502 0 0 0 12 4Zm-5 .833h2c.274 0 .5.227.5.5 0 .274-.226.5-.5.5H7a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5Zm1 7.247a2.255 2.255 0 0 1-2.253-2.253A2.25 2.25 0 0 1 8 7.573a2.25 2.25 0 0 1 2.254 2.254A2.255 2.255 0 0 1 8 12.08Z"
      fill="#fff"
    />
  </svg>
);

export default SvgCamera;
