import { Row, Col, Head, Dropdown, MenuItem } from 'digi-ui';

export const ExampleDropdown = () => {
  const menus: MenuItem[] = [
    { label: 'Sample00', type: 'simple' },
    { label: 'Sample02', type: 'simple' },
  ];
  return (
    <div>
      <Head level="H1">Tile</Head>
      <Row>
        <Col large={1}>
          <Dropdown label="Left" direction="left" menuItems={menus} />
        </Col>
        <Col large={1}>
          <Dropdown label="Up" direction="top" menuItems={menus} />
        </Col>
        <Col large={1}>
          <Dropdown label="Right" direction="right" menuItems={menus} />
        </Col>
        <Col large={1}>
          <Dropdown label="Down" direction="bottom" menuItems={menus} />
        </Col>
      </Row>
    </div>
  );
};
