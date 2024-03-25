import React from 'react';
import { NamedIconProps } from './types';

export const Expenditure: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_436)">
        <path
          d="M6 8V6.5H19.5V5.3C19.5 4.3 18.7 3.5 17.7 3.5H3.7C2.8 3.5 2 4.3 2 5.3V18.8C2 19.8 2.8 20.6 3.8 20.6H20.3C21.3 20.6 22.1 19.8 22.1 18.8V9.8C22.1 8.8 21.3 8 20.3 8H6ZM14.5 13.5V14.5H12.5V15.5H14.5V16.5H12.5V18H11.5V16.5H9.5V15.5H11.5V14.5H9.5V13.5H10.9L9.2 10.5H10.3L11.9 13.4L13.5 10.5H14.6L12.9 13.5H14.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_436">
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
      <g clip-path="url(#clip0_320_431)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5 7H20.2C21.2 7 22 7.8 22.1 8.7V15.4V18.8C22.1 19.8 21.3 20.6 20.3 20.6H3.8C2.8 20.6 2 19.8 2 18.8V5.3C2 4.3 2.8 3.5 3.7 3.5H17.7C18.7 3.5 19.5 4.3 19.5 5.3V7ZM17.7 5H3.5V19H20.5V8.5H6V7H18V5H17.7ZM11.9992 12.9L13.5992 10H14.7992L13.0992 13H14.4992V14H12.4992V15H14.4992V16H12.4992V17.5H11.4992V16H9.49922V15H11.4992V14H9.49922V13H10.8992L9.19922 10H10.3992L11.9992 12.9Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_431">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
