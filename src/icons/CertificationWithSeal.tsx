import React from 'react';
import { NamedIconProps, Svg } from './types';

export const CertificationWithSeal: React.FC<NamedIconProps> = ({
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
      <g clipPath="url(#clip0_320_229)">
        <path
          d="M16.7 2H4V22H20V5.2L16.7 2ZM11.5 15.6H7V14.3H11.5V15.6ZM15 20C13.9 20 13 19.1 13 18C13 16.9 13.9 16 15 16C16.1 16 17 16.9 17 18C17 19.1 16.1 20 15 20ZM17 12.7H7V11.4H17V12.7ZM17 9.6H7V8.3H17V9.6ZM15.9 6.3V3.3L18.9 6.3H15.9Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_229">
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
      <g clipPath="url(#clip0_320_221)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7 2H4V22H20V5.2L16.7 2ZM5.5 20.5V3.5H16V6H18.5V20.5H5.5ZM16.5 7.5H7.5V9H16.5V7.5ZM7.5 10.5H16.5V12H7.5V10.5ZM12 13.5H7.5V15H12V13.5ZM17 17C17 18.1046 16.1046 19 15 19C13.8954 19 13 18.1046 13 17C13 15.8954 13.8954 15 15 15C16.1046 15 17 15.8954 17 17Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_221">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
