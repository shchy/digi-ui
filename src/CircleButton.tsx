import React, { FC } from 'react';
import { css, styled } from 'styled-components';
import { Text, getColor, radius, spaces, textType } from '.';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  compact?: boolean;
}

export const CircleButton: FC<Props> = ({ compact, children, ...rest }) => {
  return (
    <Root
      $v={{
        compact: compact,
      }}
      {...rest}
    >
      {children}
    </Root>
  );
};

const Root = styled.button<{
  $v: { compact?: boolean };
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spaces.XXS};
  border-radius: ${radius.Full};

  border: 1px solid ${getColor('primitive-blue-1000')};
  color: ${getColor('primitive-blue-900')};
  background-color: ${getColor('neutral-white')};

  &:focus {
    text-decoration: underline;
    outline: 2px solid ${getColor('focus-yellow')};
    outline-offset: 2px;
  }
  &:hover {
    text-decoration: underline;
    background-color: ${getColor('primitive-blue-200')};
    outline: none;
  }
  &:active {
    text-decoration: underline;
    background-color: ${getColor('primitive-blue-300')};
    border: 1px solid ${getColor('primitive-blue-1200')};
    outline: none;
  }
  &:disabled {
    border: 1px solid ${getColor('neutral-solid-grey-420')};
    text-decoration: none;
    color: ${getColor('neutral-solid-grey-420')};
    background-color: ${getColor('neutral-white')};
  }

  ${({ $v: { compact } }) => {
    switch (compact) {
      case true:
        return css`
          width: calc(${spaces.XS} + ${spaces.XS} + ${spaces.M});
          height: calc(${spaces.XS} + ${spaces.XS} + ${spaces.M});
          padding: ${spaces.XS};
        `;
      default:
        return css`
          width: calc(${spaces.S} + ${spaces.S} + ${spaces.M});
          height: calc(${spaces.S} + ${spaces.S} + ${spaces.M});
          padding: ${spaces.S};
        `;
    }
  }}
`;
