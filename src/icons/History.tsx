import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const History: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_63)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7016 2.80012C16.2016 2.90012 18.5016 4.10012 20.1016 5.90012C23.5016 9.70012 23.1016 15.6001 19.2016 18.9001C17.5016 20.4001 15.4016 21.2001 13.1016 21.2001C10.5016 21.2001 8.00156 20.1001 6.20156 18.1001L6.00156 17.9001L7.50156 16.6001L7.70156 16.8001C10.3016 19.8001 14.9016 20.0001 17.9016 17.4001C20.9016 14.8001 21.1016 10.2001 18.5016 7.20012C15.9016 4.20012 11.3016 4.00012 8.30156 6.60012C6.90156 7.80012 6.10156 9.50012 5.90156 11.4001L7.80156 9.50012L9.30156 10.9001L4.90156 15.2001L0.601562 10.9001L2.00156 9.50012L3.90156 11.4001C4.10156 9.00012 5.20156 6.70012 7.00156 5.10012C8.90156 3.40012 11.2016 2.60012 13.7016 2.80012ZM11.7031 12.7998V7.2998H13.7031V11.9998L17.1031 15.2998L15.7031 16.6998L11.7031 12.7998Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_63">
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
      <g clipPath="url(#clip0_320_58)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.2 5.20031C10.9 1.90031 16.6 2.30031 19.9 6.00031C23.2 9.80031 22.8 15.5003 19.2 18.7003C17.4 20.3003 15.3 21.0003 13.2 21.0003C10.7 21.0003 8.2 20.0003 6.4 18.0003L7.5 17.0003C10.3 20.1003 15 20.4003 18.1 17.6003C21.2 14.8003 21.5 10.1003 18.8 7.00031C16 3.90031 11.3 3.60031 8.2 6.40031C6.6 7.80031 5.7 9.90031 5.7 12.0003L7.8 9.80031L8.9 10.9003L4.9 14.9003L1 10.9003L2 9.90031L4.2 11.9003C4.2 9.40031 5.3 6.90031 7.2 5.20031ZM12 12.7V7.5H13.5V12.1L16.7 15.3L15.7 16.4L12 12.7Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_58">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
