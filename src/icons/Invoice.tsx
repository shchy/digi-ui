import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Invoice: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_656)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 4.6V6.2C9.5 6.6 5.9 10.4 6 15C6 16.1 6.2 17.1 6.5 18H1.5V2H11.3L14 4.6ZM12.7 5.5L10.5 3.3V5.5H12.7ZM8 5.7H3.5V7H8V5.7ZM6 8.7H3.5V10H6V8.7ZM13.5992 7.6C13.8992 7.5 14.2992 7.5 14.6992 7.5C18.8992 7.5 22.1992 10.9 22.1992 15C22.1992 19.1 18.7992 22.5 14.6992 22.5C11.5992 22.5 8.99922 20.7 7.79922 18C7.39922 17.1 7.19922 16.1 7.19922 15C7.19922 11.2 9.99922 8.1 13.5992 7.6ZM15.2992 15.5H17.2992V14.5H15.6992L17.3992 11.5H16.2992L14.6992 14.4L13.0992 11.5H11.9992L13.6992 14.5H12.2992V15.5H14.2992V16.5H12.2992V17.5H14.2992V19H15.2992V17.5H17.2992V16.5H15.2992V15.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_656">
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
      <g clipPath="url(#clip0_320_648)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 4.6L11.8 2H1.5V18H5.5V16.5H3V3.5H10.5V6H13.7H14.5V4.6ZM9.1 6.5H4.5V8H9.1V6.5ZM4.5 9.5H7V11H4.5V9.5ZM16.4 11.5L14.8 14.4L13.1 11.5H12L13.7 14.5H12.3V15.5H14.2V16.5H12.3V17.5H14.2V19H15.2V17.5H17.3V16.5H15.2V15.5H17.3V14.5H15.8L17.5 11.5H16.4ZM20.6992 15C20.6992 11.7 17.9992 9 14.6992 9C11.3992 9 8.69922 11.7 8.69922 15C8.69922 18.3 11.3992 21 14.6992 21C17.9992 21 20.6992 18.3 20.6992 15ZM7.19922 15C7.19922 10.9 10.5992 7.5 14.6992 7.5C18.8992 7.5 22.1992 10.9 22.1992 15C22.1992 19.1 18.7992 22.5 14.6992 22.5C10.5992 22.5 7.19922 19.1 7.19922 15Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_648">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
