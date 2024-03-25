import React from 'react';
import { NamedIconProps, Svg } from './types';

export const Update: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_171)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3984 13.2998L22.0984 11.5998L23.5984 12.9998L19.4984 17.0998L15.3984 12.9998L16.7984 11.5998L18.4984 13.2998V11.9998C18.4984 8.1998 15.5984 5.1998 11.9984 5.1998C11.2984 5.1998 10.4984 5.2998 9.79844 5.5998L9.59844 5.6998L8.89844 3.8998L9.09844 3.7998C10.0984 3.4998 10.9984 3.2998 11.9984 3.2998C16.5984 3.2998 20.3984 7.1998 20.3984 11.9998V13.2998ZM11.9984 18.8C12.6984 18.8 13.4984 18.7 14.1984 18.4L14.2984 18.3L14.9984 20.1L14.7984 20.2C13.7984 20.5 12.8984 20.7 11.8984 20.7C7.29844 20.7 3.49844 16.8 3.49844 12V11.3L1.79844 13L0.398438 11.6L4.49844 7.5L8.59844 11.5L7.19844 12.9L5.49844 11.2V12C5.49844 15.8 8.39844 18.8 11.9984 18.8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_171">
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
      <g clipPath="url(#clip0_320_166)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.5 13.7L22.5 11.7L23.5 12.7L19.7 16.5L15.9 12.7L17 11.6L19 13.6V11.7C19 7.7 15.9 4.4 12.1 4.4C11.3 4.4 10.5 4.6 9.7 4.9L9.2 3.5C10.2 3.2 11.1 3 12.1 3C16.8 3 20.5 6.9 20.5 11.8V13.7ZM5.1 11.7C5.1 15.7 8.2 19 12 19C12.5333 19 13.0667 18.9111 13.6 18.8222C13.8667 18.7778 14.1333 18.7333 14.4 18.7L14.9 20.1C13.9 20.4 13 20.6 12 20.6C7.4 20.6 3.6 16.6 3.6 11.8V10.4L1.6 12.4L0.5 11.3L4.3 7.5L8.2 11.2L7.1 12.3L5.1 10.3V11.7Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_166">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
