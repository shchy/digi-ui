import React from 'react';
import { NamedIconProps } from './types';

export const Itinerary: React.FC<NamedIconProps> = (props) => {
  return props.type === 'fill' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_341)">
        <path
          d="M15.2017 21.7002C15.3017 21.0002 15.0017 20.3002 14.4017 19.9002L13.2017 19.1002C13.4017 17.0002 13.6017 14.8002 13.7017 13.3002L22.3017 16.2002C22.3017 15.0002 22.4017 13.5002 21.6017 13.0002C20.4017 12.3002 13.9017 8.4002 13.9017 8.4002C14.2017 4.2002 13.1017 2.2002 12.1017 2.2002C11.0017 2.2002 10.0017 4.2002 10.3017 8.4002C10.3017 8.4002 3.80175 12.3002 2.60175 13.0002C1.70175 13.5002 1.90175 15.0002 1.90175 16.2002L10.5017 13.3002C10.6017 14.8002 10.8017 17.0002 11.0017 19.1002L9.60175 20.0002C9.00175 20.3002 8.70175 21.0002 8.80175 21.7002H15.2017Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_341">
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
      <g clip-path="url(#clip0_320_336)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0967 19.3622L9.7 20.2002C9.3 20.5002 9 21.0002 9 21.5002H15C15 21.0002 14.7 20.5002 14.3 20.2002L12.9115 19.3671C13.1077 17.1006 13.3019 14.5732 13.4 13.2001L22 16.0001V14.5001C22 14.0001 21.7 13.5001 21.3 13.2001L13.6 8.6001V6.3001C13.6 4.9001 13.2 3.7001 12.8 3.0001C12.4 2.3001 11.7 2.3001 11.2 3.0001C10.8 3.7001 10.4 4.9001 10.4 6.3001V8.6001L2.7 13.2001C2.3 13.5001 2 14.0001 2 14.5001V16.0001L10.6 13.1001C10.6995 14.4924 10.8978 17.0716 11.0967 19.3622Z"
          fill="#1A1A1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_336">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
