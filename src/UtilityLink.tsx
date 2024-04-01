import styled from 'styled-components';
import { getColor, spaces } from './styles';
import { FC } from 'react';
import { Link } from './Link';
import { Icon, IconProps } from './icons';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'ref'> {
  beforeIcon?: IconProps;
  afterIcon?: IconProps;
}

export const UtilityLink: FC<Props> = ({
  beforeIcon,
  afterIcon,
  children,
  ...rest
}) => {
  return (
    <OverrideLink
      $type="Body/M"
      $color="neutral-solid-grey-900"
      {...rest}
      {...(!rest.href && rest.onClick ? { href: '#' } : {})}
    >
      {beforeIcon && (
        <Icon
          {...beforeIcon}
          $textType="Caption/L"
          $color="neutral-solid-grey-900"
        />
      )}
      {children}
      {afterIcon && (
        <Icon
          {...afterIcon}
          $textType="Caption/M"
          $color="neutral-solid-grey-900"
        />
      )}
    </OverrideLink>
  );
};

const OverrideLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spaces.XXS};
  height: 1em;

  &:hover {
    background-color: ${getColor('neutral-solid-grey-50')};
  }
  &:focus {
    color: ${getColor('neutral-solid-grey-900')};
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
