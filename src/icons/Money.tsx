import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Money: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_495)">
        <path
          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16 11.6V12.6H12.7V14.4H16V15.4H12.7V18H11.4V15.4H8V14.4H11.3V12.6H8V11.6H10.6L7.8 7H9.3L12 11.4L14.7 7H16.2L13.4 11.6H16Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_495">
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
      <g clipPath="url(#clip0_320_490)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12ZM3.5 12C3.5 7.3 7.3 3.5 12 3.5C16.7 3.5 20.5 7.3 20.5 12C20.5 16.7 16.7 20.5 12 20.5C7.3 20.5 3.5 16.7 3.5 12ZM12.0016 11.7L14.7016 7H16.4016L13.6016 12H16.0016V13H12.7016V14.5H16.0016V15.5H12.7016V18H11.2016V15.5H8.00156V14.5H11.2016V13H8.00156V12H10.4016L7.60156 7H9.30156L12.0016 11.7Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_490">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
