import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Inbox: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_612)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 12.5L2 4.5H22L12 12.5ZM2 6.2002L12 14.2002L22 6.2002V19.5002H2V6.2002Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_612">
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
      <g clipPath="url(#clip0_320_609)">
        <path
          d="M2 4V20H22V4H2ZM20.4 5.5L12 11.9L3.6 5.5H20.4ZM3.5 18.5V7.3L12 13.8L20.5 7.3V18.5H3.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_609">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
