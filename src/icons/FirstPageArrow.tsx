import React from 'react';
import { Svg } from './types';

export const FirstPageArrow: React.FC = ({ ...rest }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18.33 19L19 18.33L12.67 12L19 5.67L18.33 5L11.33 12L18.33 19Z"
        fill="currentColor"
      />
      <rect
        width="1"
        height="14"
        transform="matrix(1 8.74228e-08 8.74228e-08 -1 6 19)"
        fill="currentColor"
      />
    </Svg>
  );
};
