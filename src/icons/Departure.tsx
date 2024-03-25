import React from 'react';
import { NamedIconProps } from './types';

export const Departure: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_350)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8 4.5999C19.7 4.4999 20.5 4.5999 21.3 4.7999C22.4 5.0999 22.2 5.8999 22.2 5.7999C22.1063 6.45607 21.3096 6.84863 20.8807 7.05995C20.8521 7.07407 20.825 7.08738 20.8 7.0999L7.6 13.1999C7 13.4999 6.3 13.5999 5.7 13.5999C4.8 13.5999 4 13.3999 3.5 12.7999L1.5 10.7999L3.4 9.9999L5.5 10.9999L8.6 9.3999L5 4.8999L7.4 3.8999L12.8 7.2999C13.9 6.69992 16.0999 5.59995 16.5 5.39992L16.5 5.3999C17.5 4.8999 17.9 4.6999 18.8 4.5999ZM1.69922 19.2002H15.1992V21.2002H1.69922V19.2002Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_350">
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
      <g clipPath="url(#clip0_320_345)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8 4.8002C19.6 4.7002 20.4 4.8002 21.2 5.0002C22.0259 5.27551 22.0097 5.71926 22.0014 5.94501C22.0007 5.96525 22 5.98374 22 6.0002C21.8459 6.38543 21.2763 6.77067 20.9772 6.97295C20.8881 7.03322 20.823 7.07724 20.8 7.1002L7.6 13.2002C7.1 13.4002 6.4 13.6002 5.8 13.6002C5.1 13.6002 4.4 13.4002 3.8 12.8002L2 11.0002L3.4 10.3002L5.5 11.3002L9 9.5002L5.4 5.0002L7.4 4.2002L12.8 7.5002C14.1 6.8002 16.2 5.7002 16.6 5.5002C17.5 5.1002 18 4.9002 18.8 4.8002ZM2 19.5H15V21H2V19.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_345">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
