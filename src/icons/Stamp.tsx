import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Stamp: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_238)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 3C14.4001 3 16.1001 5.3 15.5001 7.5L14.5001 11.2H9.50011L8.50011 7.5C7.90011 5.3 9.60011 3 12.0001 3ZM4 14.5V18.5H20V14.5C20 13.4 19.1 12.5 18 12.5H6C4.9 12.5 4 13.4 4 14.5ZM21.5 20.5H2.5V22H21.5V20.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_238">
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
      <g clipPath="url(#clip0_320_233)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 12C19.1 12 20 12.9 20 14V18.5H4V14C4 12.9 4.9 12 6 12H9.6L8.3 7.3C7.7 4.9 9.5 2.5 12 2.5C14.5 2.5 16.4 4.9 15.7 7.3L14.4 12H18ZM10.2 4.9C9.8 5.5 9.6 6.2 9.8 6.9L11.2 12H12.9L14.2 6.9C14.4 6.2 14.2 5.5 13.8 4.9C13.4 4.3 12.7 4 12 4C11.3 4 10.6 4.3 10.2 4.9ZM18.5 14C18.5 13.7 18.3 13.5 18 13.5H6C5.7 13.5 5.5 13.7 5.5 14V17H18.5V14ZM2.5 22V20.5H21.5V22H2.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_233">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
