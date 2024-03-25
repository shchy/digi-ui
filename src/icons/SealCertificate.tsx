import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const SealCertificate: React.FC<NamedIconProps> = ({
  type,
  ...rest
}) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_253)">
        <path
          d="M19 4.5H2V19.5H22V7.5C20.8 6.3 20.2 5.7 19 4.5ZM11.5 8.1H16.5V9.4H11.5V8.1ZM7.4 8.1C8.4 8.1 9.2 8.9 9.2 10C9.2 11 8.4 11.8 7.4 11.8C6.4 11.8 5.5 11 5.5 10C5.5 8.9 6.3 8.1 7.4 8.1ZM18.1 15.9H5.5V14.6H18.1V15.9ZM18.1 12.6H11.5V11.3H18.1V12.6ZM18 8.5V6L20.5 8.5H18Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_253">
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
      <g clipPath="url(#clip0_320_245)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 4H1.5V20H22.5V7L19.5 4ZM3 18.5V5.5H18.5V8H21V18.5H3ZM7.5 12.5C8.60457 12.5 9.5 11.6046 9.5 10.5C9.5 9.39543 8.60457 8.5 7.5 8.5C6.39543 8.5 5.5 9.39543 5.5 10.5C5.5 11.6046 6.39543 12.5 7.5 12.5ZM11.5 8H17V9.5H11.5V8ZM18.6 14.5H5.5V16H18.6V14.5ZM11.5 11.1997H18.6V12.6997H11.5V11.1997Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_245">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
