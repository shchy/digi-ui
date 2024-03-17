import styled from 'styled-components';
import { colorType, getColor, textType, useTypography } from './styles';

export const Link = styled.a<{
  $type?: textType;
  $color?: colorType;
}>`
  ${(props) => useTypography(props.$type ?? 'Body/L', props.$color)}
  color: ${getColor('primitive-blue-1000')};

  &:focus {
    color: ${getColor('primitive-blue-900')};
    outline: ${`2px solid ${getColor('focus-yellow')}`};
    border-radius: 4px;
  }
  &:visited {
    color: ${getColor('primitive-magenta-900')};
  }
  &:hover {
    color: ${getColor('primitive-blue-900')};
  }
  &:active {
    color: ${getColor('primitive-orange-700')};
  }
`;
