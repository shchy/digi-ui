import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Me: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_680)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5ZM13.2 13.0997C17.5 13.0997 21 16.4997 21 20.7997V21.9997H3V20.7997C3 16.4997 6.5 12.9997 10.7 13.0997H13.2Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_680">
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
      <g clipPath="url(#clip0_320_675)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 6.5C15 4.8 13.7 3.5 12 3.5C10.3 3.5 9 4.8 9 6.5C9 8.2 10.3 9.5 12 9.5C13.7 9.5 15 8.2 15 6.5ZM7.5 6.5C7.5 4 9.5 2 12 2C14.5 2 16.5 4 16.5 6.5C16.5 9 14.5 11 12 11C9.5 11 7.5 9 7.5 6.5ZM19.5 22.0001H21H21.1V20.8001C21.1 16.6001 17.6 13.1001 13.3 13.1001H10.8C6.5 13.1001 3 16.5001 3 20.8001V22.0001H4.6V20.8001C4.6 17.4001 7.4 14.6001 10.8 14.6001H13.3C16.7 14.6001 19.5 17.4001 19.5 20.8001V22.0001Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_675">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
