import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const PublicOffering: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_260)">
        <path d="M5 22H3.5V2.5L22 9.5L5 16.5V22Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_320_260">
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
      <g clipPath="url(#clip0_320_257)">
        <path
          d="M5 22H3.5V2.5L22 9.5L5 16.5V22ZM5 4.7V14.9L17.9 9.6L5 4.7Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_257">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
