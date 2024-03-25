import React from 'react';
import { NamedIconProps } from './types';

export const Add: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_187)">
        <path
          d="M13.0008 10.9998V2.7998H11.0008V10.9998H2.80078V12.9998H11.0008V21.1998H13.0008V12.9998H21.2008V10.9998H13.0008Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_187">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_184)">
        <path
          d="M21 11.2H12.7V3H11.2V11.2H3V12.7H11.2V21H12.7V12.7H21V11.2Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_184">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
