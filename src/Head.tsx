import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { colorType, spaces, useTypography } from './styles';

export const Head: FC<{
  level: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
  color?: colorType;
  children: ReactNode;
}> = (props) => {
  switch (props.level) {
    case 'H1':
      return <H1 $color={props.color}>{props.children}</H1>;
    case 'H2':
      return <H2 $color={props.color}>{props.children}</H2>;
    case 'H3':
      return <H3 $color={props.color}>{props.children}</H3>;
    case 'H4':
      return <H4 $color={props.color}>{props.children}</H4>;
    case 'H5':
    default:
      return <H5 $color={props.color}>{props.children}</H5>;
  }
};

const H1 = styled.h1<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/L', props.$color)}
  margin-top: ${(props) => spaces.XL};
  margin-bottom: ${(props) => spaces.M};
`;
const H2 = styled.h1<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/M', props.$color)}
  margin-top: ${(props) => spaces.XL};
  margin-bottom: ${(props) => spaces.M};
`;
const H3 = styled.h1<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/S', props.$color)}
  margin-top: ${(props) => spaces.L};
  margin-bottom: ${(props) => spaces.M};
`;
const H4 = styled.h1<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/XS', props.$color)}
  margin-top: ${(props) => spaces.L};
  margin-bottom: ${(props) => spaces.S};
`;
const H5 = styled.h1<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/XXS', props.$color)}
  margin-top: ${(props) => spaces.L};
  margin-bottom: ${(props) => spaces.S};
`;
