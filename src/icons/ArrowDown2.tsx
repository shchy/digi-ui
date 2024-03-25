import React from 'react';
import { NamedIconProps } from './types';
import { Svg } from './Svg';

export const ArrowDown2: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return type === 'fill' ? (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_320_208)">
        <path
          d="M20.0016 6.6001L12.0016 14.6001L4.00156 6.6001L2.60156 8.0001L12.0016 17.4001L21.4016 8.0001L20.0016 6.6001Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_208">
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
      <g clipPath="url(#clip0_320_205)">
        <path
          d="M12 17.1L3 8L4 7L12 15L20 7L21 8L12 17.1Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_205">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
