import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Certification: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_709)">
        <path
          d="M1.5 20H22.5V4H1.5V20ZM12.5 8.1H19V9.4H12.5V8.1ZM12.5 11.3H19V12.6H12.5V11.3ZM12.5 14.6H19V15.9H12.5V14.6ZM5 8.1H10.5V15.9H9.6H5V8.1Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_709">
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
      <g clipPath="url(#clip0_320_701)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5 20H1.5V4H22.5V20ZM3 18.5H21V5.5H3V18.5ZM9 9.5V14.5H6.5V9.5H9ZM10.5 8H5V16H9.6H10.5V8ZM12.5 8H19V9.5H12.5V8ZM19 11.2002H12.5V12.7002H19V11.2002ZM12.5 14.5H19V16H12.5V14.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_701">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
