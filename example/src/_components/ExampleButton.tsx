import { Row, Col, Button, Text, Head } from 'digi-ui';

export const ExampleButton = () => {
  return (
    <div>
      <Head level="H1">Button</Head>
      <Row>
        <Col weight={1}></Col>
        <Col weight={1}>
          <Text $type="Headline/S">Primary</Text>
        </Col>
        <Col weight={1}>
          <Text $type="Headline/S">Secondary</Text>
        </Col>
        <Col weight={1}>
          <Text $type="Headline/S">Tertiary</Text>
        </Col>
      </Row>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col weight={1}>
          <Button
            type="Primary"
            size="Large"
            label="ラベル"
            onClick={() => console.log('click')}
          />
        </Col>
        <Col weight={1}>
          <Button
            type="Secondary"
            size="Large"
            label="ラベル"
            onClick={() => console.log('click')}
          />
        </Col>
        <Col weight={1}>
          <Button
            type="Tertiary"
            size="Large"
            label="ラベル"
            onClick={() => console.log('click')}
          />
        </Col>
      </Row>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col weight={1}>
          <Button
            type="Primary"
            size="Large"
            label="ラベル"
            disabled
            onClick={() => console.log('click')}
          />
        </Col>
        <Col weight={1}>
          <Button
            type="Secondary"
            size="Large"
            label="ラベル"
            disabled
            onClick={() => console.log('click')}
          />
        </Col>
        <Col weight={1}>
          <Button
            type="Tertiary"
            size="Large"
            label="ラベル"
            disabled
            onClick={() => console.log('click')}
          />
        </Col>
      </Row>
    </div>
  );
};
