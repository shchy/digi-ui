import React, { FC } from 'react';
import styled from 'styled-components';
import { colorType, getColor, radius, spaces, useTypography } from './styles';
import { prevent } from './utils';

interface Props {
  title: React.ReactNode;
  body: React.ReactNode;
  color?: colorType;
  borderWidth?: string;

  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Tile: FC<Props> = ({
  title,
  body,
  borderWidth,
  color,
  ...rest
}) => {
  const isLink = !!rest.href || !!rest.onClick;
  return isLink ? (
    <FrameLink
      $v={{ borderWidth: borderWidth, color: color }}
      {...rest}
      {...(!rest.href && rest.onClick ? { href: '#' } : {})}
      onClick={rest.onClick && prevent(rest.onClick)}
    >
      {title}
      {body}
    </FrameLink>
  ) : (
    <Frame $v={{ borderWidth: borderWidth, color: color }}>
      {title}
      {body}
    </Frame>
  );
};

const Frame = styled.div<{ $v: { color?: colorType; borderWidth?: string } }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: ${spaces.M};
  gap: ${spaces.XS};

  ${({ $v }) => useTypography('Body/L', $v.color)}
  border: ${({ $v }) =>
    `${$v.borderWidth ?? '1px'} solid ${getColor(
      $v.color ?? 'neutral-solid-grey-900'
    )}`};
  border-radius: ${radius.M};
  background-color: ${getColor('neutral-white')};
`;

const FrameLink = styled.a<{ $v: { color?: colorType; borderWidth?: string } }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: ${spaces.M};
  gap: ${spaces.XS};

  ${({ $v }) => useTypography('Body/L', $v.color)}
  border: ${({ $v }) =>
    `${$v.borderWidth ?? '1px'} solid ${getColor(
      $v.color ?? 'neutral-solid-grey-900'
    )}`};
  border-radius: ${radius.M};
  background-color: ${getColor('neutral-white')};
  text-decoration: none;

  &:focus {
    color: ${getColor('primitive-blue-900')};
    border: ${({ $v }) =>
      `${$v.borderWidth ?? '1px'} solid ${getColor('focus-yellow')}`};
  }
  &:visited {
    color: ${({ $v }) => getColor($v.color ?? 'neutral-solid-grey-900')};
  }
  &:hover,
  &:active {
    color: ${getColor('primitive-blue-900')};
    border: ${({ $v }) =>
      `${$v.borderWidth ?? '1px'} solid ${getColor('primitive-blue-900')}`};
  }
`;
