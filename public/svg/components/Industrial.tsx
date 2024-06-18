import * as React from 'react';
import { SVGProps } from 'react';

const SvgIndustrial = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.75 21H21V7.91175C21 7.3965 20.7405 6.92325 20.3055 6.64575L12.4028 1.617C12.1568 1.461 11.8433 1.461 11.5972 1.617L3.6945 6.6465C3.2595 6.92325 3 7.3965 3 7.91175V21H2.25C1.83525 21 1.5 21.336 1.5 21.75C1.5 22.164 1.83525 22.5 2.25 22.5H21.75C22.1647 22.5 22.5 22.164 22.5 21.75C22.5 21.336 22.1647 21 21.75 21ZM4.5 7.91175L12 3.13875L19.5 7.91175V21H18V12C18.4147 12 18.75 11.664 18.75 11.25C18.75 10.836 18.4147 10.5 18 10.5H6C5.58525 10.5 5.25 10.836 5.25 11.25C5.25 11.664 5.58525 12 6 12V21H4.5V7.91175ZM16.5 12V12.75H7.5V12H16.5ZM16.5 18.75H7.5V17.25H16.5V18.75ZM16.5 15.75H7.5V14.25H16.5V15.75ZM7.5 20.25H16.5V21H7.5V20.25Z"
      fill={props.color || '#1C212D'}
    />
  </svg>
);

export default SvgIndustrial;
