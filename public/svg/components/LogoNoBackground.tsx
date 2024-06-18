import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogoNoBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.02 22.008H7.883a.98.98 0 0 1-.98-.98V14.82a.98.98 0 0 1 .264-.668l6.869-7.367-2.038-2.328-8.032 9.022v7.549a.98.98 0 1 1-1.958 0v-7.922a.98.98 0 0 1 .248-.652l9.017-10.129a.944.944 0 0 1 .734-.328.98.98 0 0 1 .733.334l9.016 10.296a.98.98 0 0 1 .243.646v7.755a.98.98 0 0 1-.98.98Zm-12.158-1.96H20.04v-6.406l-4.708-5.376-6.471 6.94v4.841Z"
      fill="#AFB5C0"
    />
  </svg>
);

export default SvgLogoNoBackground;
