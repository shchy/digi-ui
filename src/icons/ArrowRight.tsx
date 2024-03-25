import React from 'react';
import { NamedIconProps, Svg } from './types';

export const ArrowRight: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_194)">
        <path
          d="M9.00156 2.6001L7.60156 4.0001L15.6016 12.0001L7.60156 20.0001L9.00156 21.4001L18.4016 12.0001L9.00156 2.6001Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_194">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  ) : (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_191)">
        <path d="M9 21L8 20L16 12L8 4L9 3L18.1 12L9 21Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_320_191">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
