import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Search: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_180)">
        <path
          d="M15.3992 14.5002C16.5992 13.1002 17.1992 11.3002 17.1992 9.5002C17.1992 5.2002 13.6992 1.7002 9.39922 1.7002C5.09922 1.7002 1.69922 5.2002 1.69922 9.5002C1.69922 13.8002 5.19922 17.3002 9.49922 17.3002C11.0992 17.3002 12.5992 16.8002 13.8992 15.9002L19.8992 21.9002L21.2992 20.5002L15.3992 14.5002ZM15.1992 9.5002C15.1992 12.7002 12.5992 15.3002 9.39922 15.3002C6.19922 15.3002 3.59922 12.7002 3.59922 9.5002C3.59922 6.3002 6.19922 3.7002 9.39922 3.7002C12.5992 3.7002 15.1992 6.3002 15.1992 9.5002Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_180">
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
      <g clipPath="url(#clip0_320_177)">
        <path
          d="M21 20.5L15 14.5C16.2 13.2 16.9 11.4 16.9 9.5C17 5.4 13.6 2 9.5 2C5.4 2 2 5.4 2 9.5C2 13.6 5.3 17 9.5 17C11.2 17 12.7 16.4 14 15.5L20 21.5L21 20.5ZM3.5 9.5C3.5 6.2 6.2 3.5 9.5 3.5C12.8 3.5 15.5 6.2 15.5 9.5C15.5 12.8 12.8 15.5 9.5 15.5C6.2 15.5 3.5 12.8 3.5 9.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_177">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
