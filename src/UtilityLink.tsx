import styled from 'styled-components';
import { getColor, spaces } from './styles';
import { FC } from 'react';
import { Link } from './Link';
import { Icon, IconProps } from './icons';
import { prevent } from './utils';

interface Props extends Omit<React.HTMLProps<HTMLAnchorElement>, 'ref'> {
  beforeIcon?: IconProps;
  afterIcon?: IconProps;
  onClick?: () => void;
}

export const UtilityLink: FC<Props> = ({
  beforeIcon,
  afterIcon,
  onClick,
  children,
  ...rest
}) => {
  return (
    <Frame onClick={onClick && prevent(onClick)}>
      {beforeIcon && <Icon {...beforeIcon} $textType="Body/M" />}
      <OverrideLink $type="Body/M" {...rest}>
        {children}
      </OverrideLink>
      {afterIcon && <Icon {...afterIcon} $textType="Caption/L" />}
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spaces.XXS};
  height: 1em;

  &:focus-within {
    outline: ${`2px solid ${getColor('focus-yellow')}`};
    border-radius: 2px;
  }
  &:hover {
    background-color: ${getColor('neutral-solid-grey-50')};
  }
`;

const OverrideLink = styled(Link)`
  &:focus {
    color: ${getColor('neutral-solid-grey-900')};
    outline: none;
  }
  &:visited {
    color: ${getColor('neutral-solid-grey-900')};
  }
  &:hover {
    color: ${getColor('neutral-solid-grey-900')};
  }
  &:active {
    color: ${getColor('neutral-solid-grey-900')};
  }
`;
