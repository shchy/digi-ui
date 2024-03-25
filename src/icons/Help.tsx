import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const Help: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_127)">
        <path
          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 17.5C11.4 17.5 11 17.1 11 16.5C11 15.9 11.4 15.5 12 15.5C12.6 15.5 13 15.9 13 16.5C13 17.1 12.6 17.5 12 17.5ZM13.9 11.3C13.1 12 12.7 13 12.8 14H11.3C11.2 12.5 11.8 11.2 12.9 10.2C13.7 9.5 13.6 8.8 13.5 8.4C13 7 10.5 7.3 10.5 8.9H9C9 7.1 10.7 5.7 12.4 6C15.1 6.4 15.9 9.7 13.9 11.3Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_127">
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
      <g clipPath="url(#clip0_320_121)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22ZM12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 7.3 16.7 3.5 12 3.5ZM12 17.5C12.5523 17.5 13 17.0523 13 16.5C13 15.9477 12.5523 15.5 12 15.5C11.4477 15.5 11 15.9477 11 16.5C11 17.0523 11.4477 17.5 12 17.5ZM11.3 14.0001H12.8C12.7 13.0001 13.1 12.0001 13.8 11.3001C15.9 9.60012 15.1 6.30012 12.4 6.00012C10.7 5.70012 9 7.10012 9 8.90012H10.5C10.5 7.30012 13 7.00012 13.5 8.40012C13.6 8.80012 13.7 9.50012 12.9 10.2001C11.8 11.2001 11.2 12.5001 11.3 14.0001Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_121">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
