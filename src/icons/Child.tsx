import React from 'react';
import { NamedIconProps } from './types';

export const Child: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_603)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.69844 8.1C6.49844 8.1 5.19844 7.7 4.09844 7.2C3.79844 7.1 3.59844 7 3.39844 6.9C5.19844 4 8.39844 2 11.9984 2C15.9984 2 19.4984 4.4 21.0984 7.9C18.4984 8.6 15.6984 7.9 13.7984 6C13.5984 5.8 13.1984 5.8 12.8984 6C11.4984 7.3 9.69844 8.1 7.69844 8.1ZM13.3 7.2998C15.6 9.2998 18.7 9.89981 21.6 9.0998C21.8 9.9998 22 10.9998 22 11.9998C22 17.4998 17.5 21.9998 12 21.9998C6.5 21.9998 2 17.4998 2 11.9998C2 10.5998 2.3 9.1998 2.8 7.9998C4.2 8.8998 6 9.3998 7.6 9.3998C9.7 9.3998 11.7 8.6998 13.3 7.2998ZM16.5 11.9998C16.5 11.3998 16.1 10.9998 15.5 10.9998C14.9 10.9998 14.5 11.3998 14.5 11.9998C14.5 12.5998 14.9 12.9998 15.5 12.9998C16.1 12.9998 16.5 12.5998 16.5 11.9998ZM15.5 16.3998L14.6 15.4998C13.2 16.8998 10.8 16.8998 9.4 15.4998L8.5 16.3998C9.5 17.2998 10.7 17.7998 12 17.7998C13.3 17.7998 14.6 17.2998 15.5 16.3998ZM9.6 11.9998C9.6 11.3998 9.2 10.9998 8.6 10.9998C8 10.9998 7.6 11.3998 7.6 11.9998C7.6 12.5998 8 12.9998 8.6 12.9998C9.2 12.9998 9.6 12.5998 9.6 11.9998Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_603">
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
      <g clip-path="url(#clip0_320_596)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM19.5 8C18 5.3 15.2 3.5 12 3.5C9 3.5 6.4 5.1 4.8 7.4C5.7 7.8 6.6 8 7.6 8C9.6 8 11.4 7.3 12.8 5.9C13.1 5.6 13.6 5.6 13.9 5.9C15.2 7.2 17.1 8 19 8H19.5ZM3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 11.1 20.4 10.2 20.1 9.4C19.8 9.5 19.4 9.5 19 9.5C16.9 9.5 14.9 8.7 13.3 7.4C11.7 8.8 9.7 9.5 7.6 9.5C6.4 9.5 5.2 9.3 4.1 8.8C3.7 9.8 3.5 10.9 3.5 12ZM9.60156 12C9.60156 12.5523 9.15385 13 8.60156 13C8.04928 13 7.60156 12.5523 7.60156 12C7.60156 11.4477 8.04928 11 8.60156 11C9.15385 11 9.60156 11.4477 9.60156 12ZM15.5 13C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11C14.9477 11 14.5 11.4477 14.5 12C14.5 12.5523 14.9477 13 15.5 13ZM8.39844 16.5999L9.49844 15.4999C10.7984 16.7999 13.1984 16.7999 14.3984 15.3999L15.4984 16.4999C14.5984 17.4999 13.2984 17.9999 11.9984 17.9999C10.6984 17.9999 9.39844 17.4999 8.39844 16.5999Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_596">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
