import React from 'react';
import { NamedIconProps } from './types';

export const BankAccount: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_484)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 4H22V7H2V4ZM2 17.3V8.5H22V17.2C22 18.8 20.7 20 19.2 20H4.7C3.2 20 2 18.8 2 17.3ZM12 13.4L10.4 10.5H9.1L10.8 13.5H9.4V14.5H11.4V15.5H9.4V16.5H11.4V18H12.4V16.5H14.4V15.5H12.4V14.5H14.4V13.5H13L14.7 10.5H13.6L12 13.4Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_484">
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
      <g clip-path="url(#clip0_320_479)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 17.2V4H22V17.2C22 18.8 20.7 20 19.2 20H4.7C3.2 20 2 18.8 2 17.2ZM20.5 7V5.5H3.5V7H20.5ZM4.7 18.5H19.2C19.9 18.5 20.5 17.9 20.5 17.3V8.5H3.5V17.3C3.5 17.9 4 18.5 4.7 18.5ZM11.9992 12.4L13.5992 9.5H14.7992L13.0992 12.5H14.4992V13.5H12.4992V14.5H14.4992V15.5H12.4992V17H11.4992V15.5H9.49922V14.5H11.4992V13.5H9.49922V12.5H10.8992L9.19922 9.5H10.3992L11.9992 12.4Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_479">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
