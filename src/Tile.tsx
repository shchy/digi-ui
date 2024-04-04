import React, { FC } from 'react';
import styled from 'styled-components';
import { colorType, getColor, radius, spaces, useTypography } from './styles';
import { prevent } from './utils';

interface Props {
  title: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;

  color?: colorType;
  borderWidth?: string;
  height?: 'fill' | 'fit-content';
  noPadding?: boolean;

  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Tile: FC<Props> = ({
  title,
  body,
  footer,
  borderWidth,
  color,
  height,
  noPadding,
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
    <Frame
      $v={{
        borderWidth: borderWidth,
        color: color,
        height: height,
        noPadding: noPadding,
      }}
    >
      <div>{title}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </Frame>
  );
};

const Frame = styled.div<{
  $v: {
    color?: colorType;
    borderWidth?: string;
    height?: 'fill' | 'fit-content';
    noPadding?: boolean;
  };
}>`
  padding: ${({ $v: { noPadding } }) => (noPadding ? '0' : spaces.M)};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  gap: ${spaces.XS};

  height: ${({ $v: { height, noPadding } }) => {
    const pad = noPadding ? '' : ` - ${spaces.M} - ${spaces.M}`;
    return height === 'fill' ? `calc(100% ${pad})` : 'fit-content';
  }};

  ${({ $v }) => useTypography('Body/L', $v.color)}
  border: ${({ $v }) =>
    `${$v.borderWidth ?? '1px'} solid ${getColor(
      $v.color ?? 'neutral-solid-grey-900'
    )}`};
  border-radius: ${radius.M};
  background-color: ${getColor('neutral-white')};

  * {
    overflow-wrap: break-word;
  }
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
