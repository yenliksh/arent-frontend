import * as React from 'react';
import { SVGProps } from 'react';

const SvgSmoking = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19 19a.75.75 0 0 0-1.5 0H19Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm0-7a.75.75 0 0 0 1.5 0h-1.5Zm-3.25-2v-.75a.75.75 0 0 0-.069.003l.069.747Zm-3-3 .749.039V10h-.75ZM12 4.5a.75.75 0 0 0-1.5 0H12ZM21.5 15a.75.75 0 0 0 1.5 0h-1.5Zm-3.25-6.014v-.75a.75.75 0 0 0-.182 1.477l.182-.727ZM23 6a.75.75 0 0 0-1.5 0H23Zm0 13a.75.75 0 0 0-1.5 0H23Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-4-3v3H19v-3h-1.5Zm1.5-4c0-1.6-1.55-2.75-3.75-2.75v1.5c1.8 0 2.25.85 2.25 1.25H19Zm-3.75-2.75h-1v1.5h1v-1.5ZM12 10V4.5h-1.5V10H12Zm11 5c0-2.354-.523-3.932-1.43-4.994-.903-1.058-2.09-1.486-3.138-1.748l-.364 1.455c.951.238 1.765.568 2.361 1.267.594.695 1.07 1.874 1.07 4.02H23Zm-4.75-5.264c.49 0 1.03.001 1.541-.049.513-.05 1.052-.154 1.542-.397.505-.25.94-.639 1.238-1.212.291-.56.429-1.25.429-2.078h-1.5c0 .672-.113 1.105-.26 1.386-.139.268-.329.439-.573.56-.26.128-.596.207-1.021.248-.426.042-.887.042-1.396.042v1.5ZM21.5 19v3H23v-3h-1.5Zm-7.25-6a90.614 90.614 0 0 1-.068-.747h.008-.013l-.086-.001a1.956 1.956 0 0 1-.357-.05 2.176 2.176 0 0 1-1.05-.592l-1.06 1.06c.6.6 1.258.872 1.768.992a3.454 3.454 0 0 0 .83.09 2.16 2.16 0 0 0 .094-.005h.001c.001 0 .002 0-.067-.747Zm-1.566-1.39a2.342 2.342 0 0 1-.685-1.563v-.016.007l-.75-.038-.748-.038V9.976l-.002.02a2.248 2.248 0 0 0 .008.26 3.842 3.842 0 0 0 1.116 2.415l1.06-1.06Z"
      fill={props.color || '#1C212D'}
    />
    <path
      d="M13.65 19H2.85a.6.6 0 0 0-.6.6v1.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-1.8a.6.6 0 0 0-.6-.6Z"
      stroke={props.color || '#1C212D'}
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgSmoking;