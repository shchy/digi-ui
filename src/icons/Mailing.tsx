import React from 'react';
import { NamedIconProps } from './types';

export const Mailing: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_372)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.4 2.5H11.5C9.5 3.9 8.2 6.2 8.2 8.7V16.5H2V8.9C2 5.4 4.9 2.5 8.4 2.5ZM13.0016 22H11.0016V16.4H9.60156V8.7C9.60156 5.4 12.3016 2.6 15.6016 2.5H15.8016C19.2016 2.5 22.0016 5.2 22.0016 8.7V9.2V16.5H13.0016V22ZM12.5016 10.8H19.0016V9.5H12.5016V10.8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_372">
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
      <g clip-path="url(#clip0_320_367)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5 2.5C19.1 2.6 22 5.6 22 9.2V17H13V22H11V17H8.6H2V8.9C2 5.4 4.9 2.5 8.5 2.5H15.5ZM3.5 8.9V15.5H8.6V9.2C8.6 7.1 9.5 5.2 11 4H8.4C5.7 4 3.5 6.2 3.5 8.9ZM11.1 15.5H20.4V9.2C20.4 6.3 18.1 4 15.2 4C12.3 4 10 6.3 10 9.2V15.5H11.1ZM12.3008 9.3999H18.6008V10.8999H12.3008V9.3999Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_367">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
