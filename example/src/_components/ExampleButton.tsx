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
            type="Primary"
            size="Medium"
            label="ラベル"
            onClick={() => console.log('click')}
            beforeIcon={{ name: 'Add' }}
          />
        </Col>
        <Col large={1}>
          <Button
            type="Secondary"
            size="Medium"
            label="ラベル"
            onClick={() => console.log('click')}
            afterIcon={{ name: 'Work' }}
          />
        </Col>
        <Col large={1}>
          <Button
            type="Tertiary"
            size="Medium"
            label="ラベル"
            onClick={() => console.log('click')}
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={1}>
          <Button
            type="Primary"
            size="Medium"
            label="ラベル"
            disabled
            onClick={() => console.log('click')}
          />
        </Col>
        <Col large={1}>
          <Button
            type="Secondary"
            size="Medium"
            label="ラベル"
            disabled
            onClick={() => console.log('click')}
          />
        </Col>
        <Col large={1}>
          <Button
            type="Tertiary"
            size="Medium"
            label="ラベル"
            disabled
            onClick={() => console.log('click')}
          />
        </Col>
      </Row>
    </div>
  );
};
