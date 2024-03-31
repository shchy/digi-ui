import React, { FC, useState } from 'react';
import { Col, Drawer, IconButton, MenuItem, MenuList, Row, media } from '.';

// TODO mobileの時はGlobalMenuのDrawerにページメニューを表示してることを直感的に分からせたい
interface Props {
  menus: MenuItem[];
}
export const SideMenuPage: FC<React.PropsWithChildren<Props>> = (props) => {
  const isMobile = media.isLessThan('small');
  return isMobile ? (
    <>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </>
  ) : (
    <Row>
      <Col large={1} medium={1} small={2}>
        <MenuList
          items={props.menus}
          direction="column"
          dropdownDirection="right"
        />
      </Col>
      <Col large={7} medium={5} small={6}>
        {props.children}
      </Col>
    </Row>
  );
};
