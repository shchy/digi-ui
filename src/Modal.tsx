import React, { FC, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { getColor, media, radius, spaces, zIndex } from './styles';
import { Col, Row } from './Grid';

// TODO focus trap
interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<React.PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const frame = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      const firstChild = frame.current?.querySelector('button');
      firstChild && (firstChild as HTMLElement).focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose && onClose();
    }
  };
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    if (
      target &&
      target !== frame.current &&
      frame.current?.contains(target as Element)
    ) {
      return;
    }
    onClose && onClose();
  };
  return (
    <Frame
      ref={frame}
      $v={{ isOpen }}
      tabIndex={-1}
      onClick={onClickHandler}
      onKeyUp={onKeyDownHandler}
    >
      <Dialog>{children}</Dialog>
    </Frame>
  );
};

const Frame = styled.div<{ $v: { isOpen: boolean } }>`
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
  overflow: hidden;
  position: fixed;
  z-index: ${zIndex.modal};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${getColor('neutral-opacity-grey-200')};
`;

const Dialog = styled.div`
  ${media.lessThan('small')`
    width: calc(100% - ${spaces.M} - ${spaces.M});
    margin: auto auto;
    padding: ${spaces.S};
  `}
  ${media.between('small', 'large')`
    min-width: calc(100% * 0.25);
    min-height: calc(100% * 0.25);
    max-width: calc(100% * 0.5);
    max-height: calc(100% * 0.75);
    margin: auto auto;
    padding: ${spaces.L} calc(${spaces.XL} - ${spaces.XS});
  `}
  ${media.greaterThan('large')`
    min-width: calc(100% * 0.25);
    min-height: calc(100% * 0.25);
    max-width: calc(100% * 0.5);
    max-height: calc(100% * 0.75);
    margin: auto auto;
    padding: ${spaces.L} calc(${spaces.XL} - ${spaces.XS});
  `}
  background-color: ${getColor('neutral-white')};
  border-radius: ${radius.Card_M};
  overflow-y: auto;
`;
