import { Row, Col, Button, Text, Head } from '../../../src';

export const ExampleButton = () => {
  return (
    <div>
      <Head level="H1">Button</Head>
      <Head level="H2">Primary</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col large={7}>
          <Button
            buttonType="Primary"
            buttonSize="Medium"
            onClick={() => console.log('click')}
            beforeIcon={{ name: 'Add' }}
          >
            ラベル
          </Button>
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={7}>
          <Button
            buttonType="Primary"
            buttonSize="Medium"
            disabled
            onClick={() => console.log('click')}
          >
            ラベル
          </Button>
        </Col>
      </Row>
      <Head level="H2">Secondary</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col large={7}>
          <Button
            buttonType="Secondary"
            buttonSize="Medium"
            onClick={() => console.log('click')}
            afterIcon={{ name: 'Work' }}
          >
            ラベル
          </Button>
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={7}>
          <Button
            buttonType="Secondary"
            buttonSize="Medium"
            disabled
            onClick={() => console.log('click')}
          >
            ラベル
          </Button>
        </Col>
      </Row>
      <Head level="H2">Tertiary</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col large={7}>
          <Button
            buttonType="Tertiary"
            buttonSize="Medium"
            onClick={() => console.log('click')}
          >
            ラベル
          </Button>
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={7}>
          <Button
            buttonType="Tertiary"
            buttonSize="Medium"
            disabled
            onClick={() => console.log('click')}
          >
            ラベル
          </Button>
        </Col>
      </Row>
    </div>
  );
};
