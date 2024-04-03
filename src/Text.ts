import styled, { css } from 'styled-components';
import { colorType, textType, useTypography } from './styles';

export const Text = styled.label<{
  $type?: textType;
  $color?: colorType;
  $block?: boolean;
  $noWrap?: boolean;
}>`
  ${(props) => useTypography(props.$type ?? 'Body/L', props.$color)}
  ${(props) => {
    return css`
      display: ${props.$block ? 'block' : 'inline'};
      white-space: ${props.$noWrap ? 'nowrap' : 'normal'};
    `;
  }};
`;
