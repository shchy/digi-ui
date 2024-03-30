import React, { FC } from 'react';
import { Container, Header, HeaderProps } from '.';

interface Props {
  header?: HeaderProps;
  footer?: React.ReactNode;
}

export const Scaffold: FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <Container>
      {props.header && (
        <header>
          <Header {...props.header} />
        </header>
      )}
      <main>{props.children}</main>
      {props.footer && <footer>{props.footer}</footer>}
    </Container>
  );
};
