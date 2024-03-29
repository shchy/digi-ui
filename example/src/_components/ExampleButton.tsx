import { Row, Col, Button, Text, Head } from 'digi-ui';

export const ExampleButton = () => {
  return (
    <div>
      <Head level="H1">Button</Head>
      <Row>
        <Col large={1}></Col>
        <Col large={1}>
          <Text $type="Headline/S">Primary</Text>
        </Col>
        <Col large={1}>
          <Text $type="Headline/S">Secondary</Text>
        </Col>
        <Col large={1}>
          <Text $type="Headline/S">Tertiary</Text>
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col large={1}>
          <Button
            buttonType="Primary"
            buttonSize="Medium"
            onClick={() => console.log('click')}
            beforeIcon={{ name: 'Add' }}
          >
            ラベル
          </Button>
        </Col>
        <Col large={1}>
          <Button
            buttonType="Secondary"
            buttonSize="Medium"
            onClick={() => console.log('click')}
            afterIcon={{ name: 'Work' }}
          >
            ラベル
          </Button>
        </Col>
        <Col large={1}>
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
        <Col large={1}>
          <Button
            buttonType="Primary"
            buttonSize="Medium"
            disabled
            onClick={() => console.log('click')}
          >
            ラベル
          </Button>
        </Col>
        <Col large={1}>
          <Button
            buttonType="Secondary"
            buttonSize="Medium"
            disabled
            onClick={() => console.log('click')}
          >
            ラベル
          </Button>
        </Col>
        <Col large={1}>
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
