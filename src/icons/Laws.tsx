import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const Laws: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_271)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8008 4.8L14.6008 2L20.2008 7.7L17.4008 10.5L11.8008 4.8ZM9.67578 6.93799L10.7364 5.87734L22.05 17.1909L20.9894 18.2516L9.67578 6.93799ZM3 19.5H16V21H3V19.5ZM8.59922 8L5.69922 10.8L11.3992 16.5L14.1992 13.7L8.59922 8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_271">
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
      <g clipPath="url(#clip0_320_264)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3008 9.4L17.4008 10.5L20.2008 7.7L14.6008 2L11.8008 4.8L12.8008 5.9L14.6008 4.1L18.1008 7.7L16.3008 9.4ZM9.67578 6.93799L10.7364 5.87734L22.05 17.1909L20.9894 18.2516L9.67578 6.93799ZM3 19.5H16V21H3V19.5ZM11.3992 16.5L5.69922 10.8L8.59922 8L9.59922 9.1L7.89922 10.8L11.3992 14.3L13.1992 12.6L14.1992 13.7L11.3992 16.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_264">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
