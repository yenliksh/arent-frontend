import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearchLittle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
    <path
      d="M22.0102 20.2899L18.3002 16.6099C19.7403 14.8143 20.4377 12.5352 20.249 10.2412C20.0603 7.94721 18.9999 5.81269 17.2857 4.27655C15.5716 2.74041 13.334 1.91941 11.0331 1.98237C8.73224 2.04534 6.54292 2.98747 4.91534 4.61505C3.28776 6.24263 2.34563 8.43194 2.28267 10.7328C2.21971 13.0337 3.0407 15.2713 4.57684 16.9854C6.11298 18.6996 8.2475 19.76 10.5415 19.9487C12.8355 20.1374 15.1146 19.44 16.9102 17.9999L20.5902 21.6799C20.6832 21.7736 20.7938 21.848 20.9156 21.8988C21.0375 21.9496 21.1682 21.9757 21.3002 21.9757C21.4322 21.9757 21.5629 21.9496 21.6848 21.8988C21.8066 21.848 21.9172 21.7736 22.0102 21.6799C22.1904 21.4934 22.2912 21.2442 22.2912 20.9849C22.2912 20.7256 22.1904 20.4764 22.0102 20.2899ZM11.3002 17.9999C9.91573 17.9999 8.56235 17.5894 7.41121 16.8202C6.26006 16.051 5.36285 14.9578 4.83304 13.6787C4.30323 12.3996 4.1646 10.9921 4.4347 9.63427C4.7048 8.27641 5.37148 7.02912 6.35045 6.05016C7.32942 5.07119 8.5767 4.4045 9.93457 4.13441C11.2924 3.86431 12.6999 4.00293 13.979 4.53275C15.2581 5.06256 16.3513 5.95977 17.1205 7.11091C17.8897 8.26206 18.3002 9.61544 18.3002 10.9999C18.3002 12.8564 17.5627 14.6369 16.2499 15.9497C14.9372 17.2624 13.1567 17.9999 11.3002 17.9999Z"
      fill={props.color || '#AFB5C0'}
    />
  </svg>
);

export default SvgSearchLittle;