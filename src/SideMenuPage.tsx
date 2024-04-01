import React, { FC } from 'react';
import { Col, MenuItem, MenuList, Row, media } from '.';

// TODO mobileの時はGlobalMenuのDrawerにページメニューを表示してることを直感的に分からせたい
interface Props {
  menus?: MenuItem[];
}
export const SideMenuPage: FC<React.PropsWithChildren<Props>> = (props) => {
  const isMobile = media.isLessThan('small');
  return isMobile || !props.menus ? (
    <>{props.children}</>
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
