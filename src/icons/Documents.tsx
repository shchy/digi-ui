import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Documents: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_414)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.6 4L11.6 6H22V10.5H2V4H9.6ZM2 12H22V21H2V12Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_414">
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
      <g clipPath="url(#clip0_320_411)">
        <path
          d="M11.6 6L9.6 4H2V21H22V6H11.6ZM9 5.5L11 7.5H20.5V10.5H3.5V5.5H9ZM3.5 19.5V12H20.5V19.5H3.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_411">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
