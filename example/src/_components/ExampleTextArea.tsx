import { Row, Col, Head, Text, TextArea } from 'digi-ui';
import { useState } from 'react';

export const ExampleTextArea = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Head level="H1">TextArea</Head>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col weight={1}>
          <TextArea
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            supportText="電話番号"
            maxLength={100}
          />
        </Col>
        <Col weight={2}></Col>
      </Row>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">必須なし</Text>
        </Col>
        <Col weight={1}>
          <TextArea
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            supportText="電話番号"
            maxLength={100}
          />
        </Col>
        <Col weight={2}></Col>
      </Row>

      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col weight={1}>
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
        <Col weight={2}></Col>
      </Row>

      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col weight={1}>
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
        <Col weight={2}></Col>
      </Row>
    </div>
  );
};
