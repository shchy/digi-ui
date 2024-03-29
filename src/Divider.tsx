import styled, { css } from 'styled-components';
import { getColor, spaces } from './styles';

type dividerType = 'solid' | 'dashed';
type dividerColor = 'normal' | 'bold' | 'force';

export const Divider = styled.hr<{
  $type?: dividerType;
  $size?: string;
  $color?: dividerColor;
}>`
  height: 0;
  margin: ${spaces.S} 0;
  padding: 0;
  border: 0;

  ${({ $type, $size, $color }) => {
    const color =
      $color === 'force'
        ? getColor('neutral-opacity-grey-536')
        : $color === 'bold'
        ? getColor('neutral-black')
        : getColor('neutral-opacity-grey-420');
    return css`
      border-top: ${$size ?? '1px'} ${$type ?? 'solid'} ${color};
    `;
  }}
`;
