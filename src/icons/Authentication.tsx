import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Authentication: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_718)">
        <path
          d="M12 2L3 4.9V10.6C3 15.4 6.3 19.7 11.7 21.8L12 22L12.3 21.9C17.7 19.8 21 15.5 21 10.7V4.9L12 2ZM11 15.5L7 11.5L8.1 10.4L11.1 13.4L16 8.5L17 9.6L11 15.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_718">
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
      <g clipPath="url(#clip0_320_713)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7 21.9L12 22L12.3 21.8C17.7 19.7 21 15.4 21 10.6V4.9L12 2L3 4.9V10.7C3 15.5 6.3 19.8 11.7 21.9ZM4.5 10.6V6L12 3.6L19.5 6V10.6C19.5 14.7 16.6 18.4 12 20.3C7.4 18.4 4.5 14.7 4.5 10.6ZM7 11.5L11 15.5L17 9.6L15.9 8.5L11 13.4L8.1 10.4L7 11.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_713">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
