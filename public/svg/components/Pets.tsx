import * as React from 'react';
import { SVGProps } from 'react';

const SvgPets = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.4 4.8V3.2a2.4 2.4 0 0 0-4.8 0v1.6a2.4 2.4 0 0 0 4.8 0Zm8 0V3.2a2.4 2.4 0 0 0-4.8 0v1.6a2.4 2.4 0 0 0 4.8 0Zm4.8 7.2v-.8a2.4 2.4 0 0 0-4.8 0v.8a2.4 2.4 0 0 0 4.8 0ZM5.6 12v-.8a2.4 2.4 0 0 0-4.8 0v.8a2.4 2.4 0 1 0 4.8 0Zm-1.032 6.624 4.669-5.669a3.58 3.58 0 0 1 5.526 0l4.669 5.669c1.502 1.824.205 4.576-2.16 4.576-.31 0-.616-.072-.895-.211l-.576-.288a8.505 8.505 0 0 0-7.604 0l-.576.288a1.995 1.995 0 0 1-.893.211c-2.365 0-3.663-2.752-2.16-4.576Z"
      stroke={props.color || '#0C0C0C'}
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgPets;
