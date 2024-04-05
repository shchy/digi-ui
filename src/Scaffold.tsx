import React, { FC } from 'react';
import { Container, Header, HeaderProps, zIndex } from '.';
import styled from 'styled-components';

interface Props {
  header?: HeaderProps;
  footer?: React.ReactNode;
}

export const Scaffold: FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Container>
      {props.header && (
        <StickyHeader>
          <Header {...props.header} />
        </StickyHeader>
      )}
      <main>{props.children}</main>
      {props.footer && <footer>{props.footer}</footer>}
    </Container>
  );
};

const StickyHeader = styled.header`
  position: sticky;
  z-index: ${zIndex.drawer};
  top: 0;
  background-color: rgba(255, 255, 255, 0.88);
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem);
    z-index: -1;
  }
`;
