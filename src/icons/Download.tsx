import React from 'react';
import { NamedIconProps } from './types';

export const Download: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_149)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9977 8.5998L19.3977 9.9998L11.9977 17.3998L4.59766 9.9998L5.99766 8.5998L10.9977 13.5998V2.7998H12.9977V13.5998L17.9977 8.5998ZM2.69922 19.1997H21.1992V21.1997H2.69922V19.1997Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_149">
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
      <g clip-path="url(#clip0_320_144)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 9L19 10L12 17.1L5 10L6 9L11.2 14.2V3H12.7V14.2L18 9ZM3 21V19.5H21V21H3Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_144">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};