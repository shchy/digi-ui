import React from 'react';
import { NamedIconProps, Svg } from './types';
import { Add } from './Add';

export const Close: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return <Add type={type} {...rest} style={{ transform: 'rotate(45deg)' }} />;
};
