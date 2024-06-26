import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Menu: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_137)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.1992 5.2998H2.69922V7.2998H21.1992V5.2998ZM21.1992 11H2.69922V13H21.1992V11ZM2.69922 16.6997H21.1992V18.6997H2.69922V16.6997Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_137">
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
      <g clipPath="url(#clip0_320_131)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_131">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
