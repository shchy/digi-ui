import React from 'react';
import { NamedIconProps } from './types';

export const Income: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_426)">
        <path
          d="M13.3008 13C14.7008 13 15.8008 14.3 15.5008 15.7C18.7008 15 21.2008 12.1 21.2008 8.7C21.2008 4.7 18.0008 1.5 14.0008 1.5C10.0008 1.5 6.80078 4.7 6.80078 8.7C6.80078 10.3 7.30078 11.8 8.20078 13H13.3008ZM16.5008 8V9H14.5008V10H16.5008V11H14.5008V12H13.5008V11H11.5008V10H13.5008V9H11.5008V8H12.9008L11.2008 5H12.3008L14.0008 7.9L15.6008 5H16.7008L15.0008 8H16.5008Z"
          fill="currentColor"
        />
        <path
          d="M19.6 17.5002H9.5V16.5002H13.3C14 16.5002 14.5 15.9002 14.5 15.3002C14.5 14.7002 13.9 14.0002 13.2 14.0002H5L2.5 13.2002V18.7002L9.4 21.1002C10.5 21.5002 11.7 21.6002 12.9 21.4002L19.9 20.2002C20.6 20.1002 21.1 19.5002 21 18.7002C20.9 18.0002 20.4 17.5002 19.6 17.5002Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_426">
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
      <g clip-path="url(#clip0_320_420)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.4 15.4L16.6 14.1C18.4 13 19.5 11.1 19.5 9C19.5 5.7 16.8 3 13.5 3C10.2 3 7.5 5.7 7.5 9C7.5 10.1 7.8 11.2 8.4 12.1L7.1 12.9C6.4 11.7 6 10.4 6 9C6 4.9 9.4 1.5 13.5 1.5C17.6 1.5 21 4.9 21 9C21 11.6 19.6 14 17.4 15.4ZM15.0992 5.5L13.4992 8.4L11.8992 5.5H10.6992L12.3992 8.5H10.9992V9.5H12.9992V10.5H10.9992V11.5H12.9992V13H13.9992V11.5H15.9992V10.5H13.9992V9.5H15.9992V8.5H14.5992L16.2992 5.5H15.0992ZM14.9008 16.9998H18.8008C20.0008 16.9998 21.0008 17.9998 21.1008 19.1998C21.1008 20.2998 20.4008 21.1998 19.3008 21.3998L13.6008 22.3998C12.5008 22.5998 11.3008 22.4998 10.2008 22.0998L2.40078 19.3998L2.90078 17.9998L10.7008 20.6998C11.5008 20.9998 12.4008 21.0998 13.3008 20.8998L19.0008 19.8998C19.4008 19.7998 19.6008 19.4998 19.6008 19.1998C19.6008 18.7998 19.3008 18.4998 18.9008 18.4998H12.9008H10.7008V16.9998H12.9008C13.4008 16.9998 13.7008 16.5998 13.7008 16.1998C13.7008 15.6998 13.3008 15.3998 12.9008 15.3998H5.50078L2.30078 14.1998L2.80078 12.7998L5.80078 13.8998H12.8008C14.0008 13.8998 15.0008 14.9998 15.0008 16.1998C15.0008 16.4998 15.0008 16.7998 14.9008 16.9998Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_420">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};