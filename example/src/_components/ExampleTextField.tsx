import { Row, Col, Head, Text, TextField } from '../../../src';
import { useState } from 'react';

export const ExampleTextField = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Head level="H1">TextField</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col large={3}>
          <TextField
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            supportText="電話番号"
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">必須なし</Text>
        </Col>
        <Col large={3}>
          <TextField
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            supportText="電話番号"
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col large={3}>
          <TextField
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            supportText="電話番号"
            errorText="数字で入力してください。"
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={3}>
          <TextField
            label="電話番号"
            value={text}
            onChange={(e) => setText(e.target.value)}
            requiredLabel={true}
            disabled
            supportText="電話番号"
          />
        </Col>
      </Row>
    </div>
  );
};
