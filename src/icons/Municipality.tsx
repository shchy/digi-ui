import React from 'react';
import { NamedIconProps } from './types';

export const Municipality: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_556)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5 21.9V19.5L20.1 14.9L9.5 6.6L8 7.8V2H22V21.9H16.5ZM15 10H19V8.5H15V10ZM11.5 6.5H19V5H11.5V6.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.1L17.1 16.3L15 14.7V22H4V14.8L1.9 16.4ZM8 16V19H11V16H8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_556">
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
      <g clip-path="url(#clip0_320_548)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 2V7H9.5V3.5H20.5V22H22V2H8ZM11.5 5.5H18.5V7H11.5V5.5ZM18.5 8.5H14V10H18.5V8.5ZM12 20V15H7V20H12ZM8.5 16.5H10.5V18.5H8.5V16.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.2L17.1 16.4L15.5 15.2V22H14V14L9.5 10.5L5 14V22H3.5V15.1L1.9 16.4Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_548">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
