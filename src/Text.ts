import styled from 'styled-components';
import { colorType, textType, useTypography } from './styles';

export const Text = styled.label<{
  $type?: textType;
  $color?: colorType;
}>`
  ${(props) => useTypography(props.$type ?? 'Body/L', props.$color)}
`;
