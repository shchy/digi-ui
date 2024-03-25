import React from 'react';
import { NamedIconProps } from './types';

export const Application: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_644)">
        <path
          d="M4 22H20V5.2L16.7 2H4V22ZM11.3 19.8L8.4 17.2L9.3 16.2L11.3 18L14.6 14.9L15.5 15.9L11.3 19.8ZM15.9 3.3L18.9 6.3H15.9V3.3ZM7 8.2H17V9.7H7V8.2ZM7 11.7H17V13.2H7V11.7Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_644">
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
      <g clipPath="url(#clip0_320_637)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2H16.7L20 5.2V22H4V2ZM5.5 3.5V20.5H18.5V6.5H15.5V3.5H5.5ZM7 11H17V12.5H7V11ZM17 8H7V9.5H17V8ZM9.39844 15.1999L11.2984 16.8999L14.5984 13.8999L15.5984 15.0999L11.2984 18.9999L8.39844 16.2999L9.39844 15.1999Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_637">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
