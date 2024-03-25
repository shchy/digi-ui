import React from 'react';
import { NamedIconProps } from './types';

export const Printer: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_401)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19V6.2H5V3ZM20.3 17H22V7.5H2V17H3.7V10.7H20.3V17ZM5 21H19V12H5V21ZM8 14.5H16V15.5H8V14.5ZM16 18.5H8V17.5H16V18.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_401">
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
      <g clip-path="url(#clip0_320_395)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 7V3H5V7H2V17H5V21H19V17H22V7H19ZM6.5 4.5H17.5V7H6.5V4.5ZM17.5 19.5H6.5V12.5H17.5V19.5ZM20.5 15.5H19V11H5V15.5H3.5V8.5H20.5V15.5ZM8 17.7002H16V17.0002V16.7002H8V17.7002ZM8 14.2998H16V15.2998H8V14.2998Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_395">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
