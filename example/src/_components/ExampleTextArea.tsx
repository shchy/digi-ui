import { Row, Col, Head, Text, TextArea } from '../../../src';
import { useState } from 'react';

export const ExampleTextArea = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Head level="H1">TextArea</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col large={3}>
          <TextArea
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            supportText="電話番号"
            maxLength={100}
            rows={10}
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">必須なし</Text>
        </Col>
        <Col large={3}>
          <TextArea
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            supportText="電話番号"
            maxLength={100}
          />
        </Col>
      </Row>

      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col large={3}>
          <TextArea
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            supportText="電話番号"
            errorText="数字で入力してください。"
            maxLength={100}
          />
        </Col>
      </Row>

      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={3}>
          <TextArea
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            disabled
            supportText="電話番号"
            maxLength={100}
          />
        </Col>
      </Row>
    </div>
  );
};
