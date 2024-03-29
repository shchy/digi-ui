import React from 'react';
import { NamedIconProps, Svg } from './types';
import { Add } from './Add';
import styled from 'styled-components';

export const Close: React.FC<NamedIconProps> = ({ type, ...rest }) => {
  return <CloseSVG type={type} {...rest} ref={undefined} />;
};

const CloseSVG = styled(Add)`
  transform: rotate(45deg);
`;
