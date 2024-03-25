import React from 'react';
import { NamedIconProps } from './types';

export const Arrival: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_361)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.1008 14.2001C17.8008 14.1001 16.7008 13.7001 14.9008 13.0001C13.3008 12.4001 4.30078 8.9001 4.30078 8.8001C3.20078 8.4001 1.80078 7.3001 1.80078 5.7001V2.9001L3.70078 3.7001L4.40078 5.9001L7.80078 6.9001L8.40078 1.1001L10.8008 2.1001L12.3008 8.2001C13.6567 8.61276 14.4565 8.88642 15.0896 9.103C15.5304 9.25381 15.8903 9.37695 16.3008 9.5001C18.1008 10.2001 19.4008 11.2001 20.0008 12.5001C20.4008 13.3001 20.1008 14.2001 19.1008 14.2001ZM8.69922 19.2002H22.1992V21.2002H8.69922V19.2002Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_361">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_356)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3 10.9001C18.9 11.4001 19.4 12.0001 19.8 12.7001C20.1749 13.4499 19.847 13.7605 19.7221 13.8788C19.7137 13.8868 19.7063 13.8938 19.7 13.9001C19.6 14.0001 19.4 14.0001 19.2 14.0001C18.7 14.0001 18.1 13.8001 18 13.7001L4.4 8.7001C3.3 8.3001 2 7.3001 2 5.8001V3.3001L3.5 3.9001L4.2 6.0001L8 7.2001L8.6 1.6001L10.6 2.5001L12.1 8.6001C14.4 9.3001 15.9 9.8001 16.2 9.9001C17.2 10.2001 17.6 10.4001 18.3 10.9001ZM9 19.5H22V21H9V19.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_356">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
