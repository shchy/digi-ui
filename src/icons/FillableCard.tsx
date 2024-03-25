import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const FillableCard: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_310)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 8.2V4.5H1.5V16.5H13.7L22 8.2ZM10 9.2L6.5 12.7L4 10.3L5 9.4L6.5 10.9L9 8.3L10 9.2ZM15.5 12.9H12V11.6H15.5V12.9ZM18 9.4H12V8.1H18V9.4ZM19.6 12L12.5 19.1V20.5H13.9L21 13.4L19.6 12ZM23.1008 11.2999L21.7008 12.6999L20.3008 11.2999L21.7008 9.8999L23.1008 11.2999Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_310">
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
      <g clipPath="url(#clip0_320_301)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 16.5H11.5V15H2.5V6H20V8H21.5V4.5H1V16.5ZM11.5 8H18.5V9.5H11.5V8ZM16 11.5H11.5V13H16V11.5ZM4 10.4002L6.5 12.9002L10.1 9.3002L9 8.2002L6.5 10.8002L5.1 9.3002L4 10.4002ZM20.5 13.4L13.4 20.5H12V19.1L19.1 12L20.5 13.4ZM19.7695 11.2861L21.1837 9.87193L22.5979 11.2861L21.1837 12.7003L19.7695 11.2861Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_301">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
