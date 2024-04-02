import { Row, Col, Tile, Text, Head } from 'digi-ui';
import { Icon } from '../../../dist/icons';

export const ExampleTile = () => {
  return (
    <div>
      <Head level="H1">Tile</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS"></Text>
        </Col>
        <Col large={3}>
          <Tile
            title={<Text $type="Button">Title</Text>}
            body={<Text $type="Body/M">説明を書くところです</Text>}
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS"></Text>
        </Col>
        <Col large={3}>
          <Tile
            title={
              <>
                <Text $type="Button">
                  Title
                  <Icon name="NewWindow" $textType="Caption/L" />
                </Text>
              </>
            }
            body={<Text $type="Body/M">説明を書くところです</Text>}
            borderWidth="1px"
            href="https://www.google.com"
            target="_blank"
          />
        </Col>
      </Row>
    </div>
  );
};
