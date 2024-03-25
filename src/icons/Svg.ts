import styled from 'styled-components';
import { useTypography } from '../styles';
import { SVGProps } from './types';

export const Svg = styled.svg<SVGProps>`
  ${(props) => useTypography(props.$textType ?? 'Body/L', props.$color, true)}
`;
