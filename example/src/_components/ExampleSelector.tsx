import { Row, Col, Text, Selector, Head } from 'digi-ui';
import { useState } from 'react';

export const ExampleSelector = () => {
  const selectList = ['A', 'B', 'C'];
  const [selected, setSelected] = useState<string | undefined>(selectList[0]);

  return (
    <div>
      <Head level="H1">Selector</Head>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col weight={1}>
          <Selector
            label="電話番号"
            list={selectList}
            selectKey={(x) => x}
            selectDisplay={(x) => `選択肢${x}`}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            requiredLabel={true}
            supportText="電話番号"
          />
        </Col>
        <Col weight={2}></Col>
      </Row>

      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">必須なし</Text>
        </Col>
        <Col weight={1}>
          <Selector
            label="電話番号"
            list={selectList}
            selectKey={(x) => x}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            supportText="電話番号"
          />
        </Col>
        <Col weight={2}></Col>
      </Row>
      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col weight={1}>
          <Selector
            label="電話番号"
            list={selectList}
            selectKey={(x) => x}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            requiredLabel={true}
            supportText="電話番号"
            errorText="数字で入力してください。"
          />
        </Col>
        <Col weight={2}></Col>
      </Row>

      <Row>
        <Col weight={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col weight={1}>
          <Selector
            label="電話番号"
            list={selectList}
            selectKey={(x) => x}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            requiredLabel={true}
            disabled
            supportText="電話番号"
          />
        </Col>
        <Col weight={2}></Col>
      </Row>
    </div>
  );
};
