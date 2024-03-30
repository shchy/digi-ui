import { Col, MenuItem, MenuList, Row, media } from 'digi-ui';
import { FC } from 'react';
import { useMenus } from './menus';

export const CatalogLayout: FC<React.PropsWithChildren> = ({ children }) => {
  const { catalogMenuItems } = useMenus();

  const sideMenus = [
    { type: 'section-header', label: 'カタログ' } as MenuItem,
    ...catalogMenuItems,
  ];

  const isMobile = media.isLessThan('small');
  return isMobile ? (
    <Row>
      <Col>{children}</Col>
    </Row>
  ) : (
    <Row>
      <Col large={1} medium={1} small={2}>
        <MenuList
          items={sideMenus}
          direction="column"
          dropdownDirection="right"
        />
      </Col>
      <Col large={7} medium={5} small={6}>
        {children}
      </Col>
    </Row>
  );
};
