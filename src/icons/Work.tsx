import React from 'react';
import { NamedIconProps } from './types';

export const Work: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_574)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 3.5H7V6.5H2V10.2C4.3 11.7 6.8 12.6 9.5 13V11.6H14.5V13C17.2 12.6 19.7 11.7 22 10.2V6.5H17V3.5ZM15.5 6.5H8.5V5H15.5V6.5ZM21.2 12.1002C19.1 13.2002 16.8 13.9002 14.5 14.2002V16.5002H9.5V14.2002C6.8 13.9002 4.3 13.0002 2 11.7002V20.5002H22V11.7002C21.9394 11.7305 21.8697 11.7699 21.7936 11.813L21.7936 11.813C21.6183 11.9121 21.4092 12.0305 21.2 12.1002ZM10.8008 15.1998V12.7998H13.2008V15.1998H10.8008Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_574">
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
      <g clipPath="url(#clip0_320_571)">
        <path
          d="M17 6.5V3.5H7V6.5H2V20.5H22V6.5H17ZM8.5 5H15.5V6.5H8.5V5ZM20.5 19H3.5V12.6C5.4 13.5 7.4 14.1 9.5 14.3V16.5H14.5V14.3C16.6 14 18.6 13.5 20.5 12.6V19ZM13 15H11V13H13V15ZM20.5 10.9C18.6 11.9 16.6 12.5 14.5 12.8V11.5H9.5V12.8C7.4 12.5 5.4 11.9 3.5 10.9V8H20.5V10.9Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_571">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
