import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Information: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_117)">
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.7 18H11.2V9.5H12.7V18ZM11.3 6.3C11.5 6.1 11.7 6 12 6C12.3 6 12.5 6.1 12.7 6.3C12.9 6.5 13 6.7 13 7C13 7.3 12.9 7.5 12.7 7.7C12.5 7.9 12.3 8 12 8C11.7 8 11.5 7.9 11.3 7.7C11.1 7.5 11 7.3 11 7C11 6.7 11.1 6.5 11.3 6.3Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_117">
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
      <g clipPath="url(#clip0_320_111)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22ZM12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 7.3 16.7 3.5 12 3.5ZM11 7C11 6.7 11.1 6.5 11.3 6.3C11.5 6.1 11.7 6 12 6C12.3 6 12.5 6.1 12.7 6.3C12.9 6.5 13 6.7 13 7C13 7.3 12.9 7.5 12.7 7.7C12.5 7.9 12.3 8 12 8C11.7 8 11.5 7.9 11.3 7.7C11.1 7.5 11 7.3 11 7ZM11.1992 9.5H12.6992V18H11.1992V9.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_111">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
