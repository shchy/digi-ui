import React from 'react';
import { NamedIconProps } from './types';

export const ArrowLeft: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_201)">
        <path
          d="M7.90156 12.0001L15.9016 4.0001L14.5016 2.6001L5.10156 12.0001L14.5016 21.4001L15.9016 20.0001L7.90156 12.0001Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_201">
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
      <g clipPath="url(#clip0_320_198)">
        <path
          d="M14.4984 21L5.39844 12L14.4984 3L15.4984 4L7.59844 12L15.4984 20L14.4984 21Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_198">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
