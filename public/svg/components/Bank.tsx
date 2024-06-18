import * as React from 'react';
import { SVGProps } from 'react';

const SvgBank = (props: SVGProps<SVGSVGElement>) => (
  <svg width={62} height={34} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 7a7 7 0 0 1 7-7h48a7 7 0 0 1 7 7v20a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7Z" fill="#fff" />
    <path
      d="M41 24v3H21v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1Z"
      fill="#4FC168"
      stroke="#4FC168"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 16h-2v7h2v-7ZM30 16h-2v7h2v-7ZM34 16h-2v7h2v-7ZM38 16h-2v7h2v-7ZM42 27.75H20c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75ZM40.37 10.75l-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V15c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-3.32c0-.38-.28-.79-.63-.93ZM31 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"
      fill="#4FC168"
    />
    <path
      d="M7 1h48v-2H7v2Zm54 6v20h2V7h-2Zm-6 26H7v2h48v-2ZM1 27V7h-2v20h2Zm6 6a6 6 0 0 1-6-6h-2a8 8 0 0 0 8 8v-2Zm54-6a6 6 0 0 1-6 6v2a8 8 0 0 0 8-8h-2ZM55 1a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2ZM7-1a8 8 0 0 0-8 8h2a6 6 0 0 1 6-6v-2Z"
      fill="#E6E9EE"
    />
  </svg>
);

export default SvgBank;
