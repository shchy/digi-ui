import styled from 'styled-components';
import { colorType, textType, useTypography } from './styles';

export const Text = styled.label<{
  $type?: textType;
  $color?: colorType;
  $block?: boolean;
}>`
  ${(props) => useTypography(props.$type ?? 'Body/L', props.$color)}
  display: ${(props) => (props.$block ? 'block' : 'inline')};
`;
