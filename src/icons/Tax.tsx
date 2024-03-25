import React from 'react';
import { NamedIconProps } from './types';

export const Tax: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_473)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM14.4 14.9L12 8.5V8.6H10.9L8.3 15.6H9.4L10.1 13.6H12.8L13.6 15.6H15.2L16.4 13L17.6 15.6H18.7L17 12L18.7 8.6H17.6L16.4 11.1L15.2 8.6H14.1L15.8 12L14.4 14.9ZM9.3 8.5H5V9.5H6.7V15.5H7.7V9.5H9.3V8.5ZM10.5 12.4999L11.5 9.8999L12.5 12.4999H10.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_473">
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
      <g clipPath="url(#clip0_320_467)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22ZM12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 7.3 16.7 3.5 12 3.5ZM9.3 8.5H5V9.5H6.7V15.5H7.7V9.5H9.3V8.5ZM12.8008 13.5H10.1008L9.40078 15.5H8.30078L10.9008 8.5H12.0008L14.5008 14.8L15.9008 11.9L14.2008 8.5H15.3008L16.5008 11L17.6008 8.5H18.7008L17.0008 11.9L18.7008 15.5H17.6008L16.4008 12.9L15.2008 15.5H13.6008L12.8008 13.5ZM12.5008 12.5L11.5008 9.9L10.5008 12.5H12.5008Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_467">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
