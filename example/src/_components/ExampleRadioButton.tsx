import { Row, Col, Text, RadioButton, Head } from 'digi-ui';
import { useState } from 'react';

export const ExampleRadioButton = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Head level="H1">RadioButton</Head>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col weight={1}>
          <RadioButton
            label="Radio選択肢1"
            value="aaa"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Col>
        <Col weight={2}></Col>
      </Row>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Tile</Text>
        </Col>
        <Col weight={1}>
          <RadioButton
            label="Radio選択肢2"
            istile="true"
            value="aaa"
            describe="説明用テキスト"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Col>
        <Col weight={2}></Col>
      </Row>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col weight={1}>
          <RadioButton
            label="Radio選択肢3"
            value="aaa"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            disabled
          />
        </Col>
        <Col weight={2}></Col>
      </Row>
    </div>
  );
};
