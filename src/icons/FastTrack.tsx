import React from 'react';
import { NamedIconProps, Svg } from './types';

export const FastTrack: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_326)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1992 3.7998C16.1992 4.90437 15.3038 5.7998 14.1992 5.7998C13.0946 5.7998 12.1992 4.90437 12.1992 3.7998C12.1992 2.69524 13.0946 1.7998 14.1992 1.7998C15.3038 1.7998 16.1992 2.69524 16.1992 3.7998ZM9.19922 5.5H1.69922V7.5H9.19922V5.5ZM18.4 13.0997L18.2 12.9997C17.5 12.6997 16.8 12.3997 16.4 11.9997V12.9997C18.6 15.9997 19.2 19.1997 18.5 22.6997L16.6 22.3997C16.5 19.9997 16.1 18.4997 15 16.8997C14.3 18.2997 12.6 20.4997 10 22.3997L8.7 20.9997C10.3 19.2997 11.6 16.6997 12.7 13.5997V9.89971C12.1 10.0997 11.6 10.3997 11.2 10.7997C10.8 11.1997 10.4 11.7997 10.2 12.4997L10.1 12.7997L8.5 12.1997V11.9997C8.6 11.2997 8.9 10.4997 9.3 9.79971C9.9 8.79971 10.7 7.99971 11.7 7.39971C12.4 6.89971 13.4 6.69971 14.3 6.69971C15.2 6.69971 15.9 7.19971 16.4 8.29971C16.9 9.59971 17.9 10.3997 19.1 11.1997L18.4 13.0997ZM19.1289 13.3545L20.3476 10.0736L22.5036 10.8745L21.2849 14.1554L19.1289 13.3545ZM1.69922 8.69971H7.19922V10.6997H1.69922V8.69971ZM5.19922 12H1.69922V14H5.19922V12Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_326">
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
      <g clipPath="url(#clip0_320_317)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9984 3.8C15.9984 4.79411 15.1926 5.6 14.1984 5.6C13.2043 5.6 12.3984 4.79411 12.3984 3.8C12.3984 2.80589 13.2043 2 14.1984 2C15.1926 2 15.9984 2.80589 15.9984 3.8ZM9 6H2V7.5H9V6ZM18.0502 10.2756C18.2969 10.4761 18.5254 10.6618 18.8016 10.7999L18.3016 12.1999V12.2999C17.5016 11.8999 16.7016 11.4999 16.0016 10.9999V12.7999C18.0016 15.4999 18.9016 18.5999 18.2016 22.0999L16.8016 21.8999C16.7016 19.0999 16.2016 17.7999 14.9016 16.0999C14.1016 17.7999 12.6016 19.7999 9.90156 21.7999L8.90156 20.6999C10.5016 18.8999 11.9016 16.0999 12.8016 13.2999V9.1999C12.1016 9.2999 11.4016 9.6999 10.9016 10.1999C10.4016 10.6999 10.0016 11.2999 9.80156 11.9999L8.60156 11.5999C8.80156 10.7999 9.00156 10.0999 9.40156 9.3999C10.0016 8.3999 10.7016 7.6999 11.7016 7.0999C12.7016 6.4999 13.3016 6.3999 14.2016 6.3999C15.0016 6.3999 15.6016 6.8999 16.1016 7.8999C16.5016 8.6999 17.0016 9.3999 17.7016 9.9999C17.8254 10.0928 17.9396 10.1856 18.0502 10.2755L18.0502 10.2756ZM19.2227 12.5293L20.267 9.7168L21.9545 10.3434L20.9102 13.1559L19.2227 12.5293ZM2 9H7V10.5H2V9ZM5 12H2V13.5H5V12Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_317">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
