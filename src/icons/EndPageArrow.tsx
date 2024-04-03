import React from 'react';
import { Svg } from './types';

export const EndPageArrow: React.FC = ({ ...rest }) => {
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
        d="M5.67 19L5 18.33L11.33 12L5 5.67L5.67 5L12.67 12L5.67 19Z"
        fill="currentColor"
      />
      <rect
        x="18"
        y="19"
        width="1"
        height="14"
        transform="rotate(180 18 19)"
        fill="currentColor"
      />
    </Svg>
  );
};
