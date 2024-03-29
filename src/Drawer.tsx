import React, { FC, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { getColor, zIndex } from './styles';
import { Container } from './Container';

interface Props {
  position?: 'full' | 'left' | 'right';
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Drawer: FC<Props> = (props) => {
  const frame = useRef<HTMLDivElement>(null);
  const blurHandler = (e: React.FocusEvent<HTMLDivElement>) => {
    const target = e.relatedTarget;
    if (target && frame.current?.contains(target)) {
      return;
    }
    props.onClose && props.onClose();
  };
  useEffect(() => {
    if (props.isOpen) {
      frame.current?.focus();
    }
  }, [props.isOpen]);
  return (
    <Frame ref={frame} $v={props} tabIndex={0} onBlur={blurHandler}>
      {props.position === 'full' ? (
        <Container>{props.children}</Container>
      ) : (
        <>{props.children}</>
      )}
    </Frame>
  );
};

const Frame = styled.div<{ $v: Props }>`
  ${({ $v: { isOpen } }) => {
    if (isOpen) {
      return css`
        display: flex;
        flex-direction: column;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};

  position: absolute;
  z-index: ${zIndex.drawer};
  background-color: ${getColor('neutral-white')};
  outline: none;

  ${({ $v: { position } }) => {
    switch (position ?? 'full') {
      case 'left':
        return css`
          top: 0;
          left: 0;
          width: fit-content;
          height: 100vh;
          box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1);
        `;
      case 'right':
        return css`
          top: 0;
          right: 0;
          width: fit-content;
          height: 100vh;
          box-shadow: -2px 0px 6px rgba(0, 0, 0, 0.1);
        `;
      case 'full':
      default:
        return css`
          top: 100%;
          left: 0;
          width: 100%;
          height: calc(100vh - 100%);
        `;
    }
  }}
`;
