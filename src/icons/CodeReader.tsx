import React from 'react';
import { NamedIconProps } from './types';

export const CodeReader: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_629)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 21V3H21V21H3ZM6 18H11V13H6V18ZM6 11H11V6H6V11ZM18 6H13V11H18V6ZM13 18H18V13H13V18ZM14.1992 7.2002H16.6992V9.7002H14.1992V7.2002ZM7.19922 14.2002H9.69922V16.7002H7.19922V14.2002ZM9.69922 7.2002H7.19922V9.7002H9.69922V7.2002Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_629">
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
      <g clip-path="url(#clip0_320_618)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.5 7.5H4V4H7.5V2.5H2.5V7.5ZM2.5 21.5H7.5V20H4V16.5H2.5V21.5ZM21.5 21.5H16.5V20H20V16.5H21.5V21.5ZM20 7.5H21.5V2.5H16.5V4H20V7.5ZM9.5 7.5V9.5H7.5V7.5H9.5ZM11 6H6V11H11V6ZM16.5 9.5V7.5H14.5V9.5H16.5ZM13 6H18V11H13V6ZM9.5 14.5V16.5H7.5V14.5H9.5ZM11 13H6V18H11V13ZM13 13H18V18H13V13Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_618">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
