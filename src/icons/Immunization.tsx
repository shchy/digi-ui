import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Immunization: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_528)">
        <path
          d="M18.6 6.5L19.9 7.8L21.3 6.4L17.6 2.7L16.2 4.1L17.5 5.4L16.2 6.7L11.9 2.5L10.9 3.6L12.2 4.9L10.1 7L13.9 10.7L13 11.7L9.2 7.9L7.1 10.1L10.8 13.8L9.9 14.7L6.2 11L3 14.1L5.9 17L2.5 20.4L3.6 21.5L7 18.1L9.9 21L19.1 11.8L20.4 13.1L21.5 12.1L17.2 7.8L18.6 6.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_528">
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
      <g clipPath="url(#clip0_320_525)">
        <path
          d="M21.5 12.1L17.2 7.8L18.5 6.5L19.8 7.8L21.2 6.4L17.5 2.7L16.1 4.1L17.4 5.4L16.1 6.7L11.8 2.5L10.7 3.6L12 4.9L3 14.1L5.9 17L2.5 20.4L3.6 21.5L7 18.1L9.9 21L19.1 11.8L20.4 13.1L21.5 12.1ZM9.9 18.9L5.2 14.2L7.2 12.2L9.9 14.9L11 13.8L8.3 11.1L10.3 9.1L13 11.8L14.1 10.7L11.3 8L13.3 6L18 10.7L9.9 18.9Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_525">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
