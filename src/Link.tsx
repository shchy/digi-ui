import styled from 'styled-components';
import { colorType, getColor, textType, useTypography } from './styles';
import { FC } from 'react';
import { prevent } from './utils';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'ref'> {
  $type?: textType;
  $color?: colorType;
}

export const Link: FC<Props> = (props) => {
  return (
    <StyledLink
      {...props}
      {...(!props.href && props.onClick ? { href: '#' } : {})}
      onClick={props.onClick && prevent(props.onClick)}
    />
  );
};

const StyledLink = styled.a<{
  $type?: textType;
  $color?: colorType;
}>`
  ${(props) =>
    useTypography(
      props.$type ?? 'Body/L',
      props.$color ?? 'primitive-blue-1000'
    )}

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
