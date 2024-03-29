import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { colorType, spaces, useTypography } from './styles';

interface Props extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'ref'> {
  level: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
  color?: colorType;
  children: ReactNode;
}

export const Head: FC<Props> = ({ level, color, children, ...rest }) => {
  switch (level) {
    case 'H1':
      return (
        <H1 $color={color} {...rest}>
          {children}
        </H1>
      );
    case 'H2':
      return (
        <H2 $color={color} {...rest}>
          {children}
        </H2>
      );
    case 'H3':
      return (
        <H3 $color={color} {...rest}>
          {children}
        </H3>
      );
    case 'H4':
      return (
        <H4 $color={color} {...rest}>
          {children}
        </H4>
      );
    case 'H5':
    default:
      return (
        <H5 $color={color} {...rest}>
          {children}
        </H5>
      );
  }
};

const H1 = styled.h1<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/L', props.$color)}
  margin-top: ${spaces.XL};
  margin-bottom: ${spaces.M};
`;
const H2 = styled.h2<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/M', props.$color)}
  margin-top: ${spaces.XL};
  margin-bottom: ${spaces.M};
`;
const H3 = styled.h3<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/S', props.$color)}
  margin-top: ${spaces.L};
  margin-bottom: ${spaces.M};
`;
const H4 = styled.h4<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/XS', props.$color)}
  margin-top: ${spaces.L};
  margin-bottom: ${spaces.S};
`;
const H5 = styled.h5<{ $color?: colorType }>`
  ${(props) => useTypography('Headline/XXS', props.$color)}
  margin-top: ${spaces.L};
  margin-bottom: ${spaces.S};
`;
