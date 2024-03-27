import { Row, Col, Text, RadioButtonList, Head } from 'digi-ui';
import { useState } from 'react';

export const ExampleRadioButtonList = () => {
  const selectList = ['A', 'B', 'C'];
  const [selected, setSelected] = useState<string | undefined>(selectList[0]);

  return (
    <div>
      <Head level="H1">RadioButtonList</Head>
      <Row>
        <Col desktop={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col desktop={3}>
          <RadioButtonList
            label="Radio1"
            name="Radio1"
            list={selectList}
            selectKey={(x) => x}
            selectedItem={selected}
            selectDisplay={(x) => `Radio選択肢1-${x}`}
            onChange={(e) => {
              setSelected(selectList.find((x) => x === e.target.value));
            }}
            requiredLabel={true}
            supportText="電話番号"
          />
        </Col>
      </Row>
      <Row>
        <Col desktop={1}>
          <Text $type="Headline/XS">必須なし</Text>
        </Col>
        <Col desktop={3}>
          <RadioButtonList
            label="Radio2"
            name="Radio2"
            list={selectList}
            selectKey={(x) => x}
            selectDisplay={(x) => `Radio選択肢2-${x}`}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            supportText="電話番号"
            istile="true"
            selectDescribe={(x) => `補足説明-${x}`}
          />
        </Col>
      </Row>
      <Row>
        <Col desktop={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col desktop={3}>
          <RadioButtonList
            label="Radio3"
            name="Radio3"
            list={selectList}
            selectKey={(x) => x}
            selectDisplay={(x) => `Radio選択肢3-${x}`}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            requiredLabel={true}
            supportText="電話番号"
            errorText="数字で入力してください。"
          />
        </Col>
      </Row>
      <Row>
        <Col desktop={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col desktop={3}>
          <RadioButtonList
            label="Radio4"
            name="Radio4"
            list={selectList}
            selectKey={(x) => x}
            selectDisplay={(x) => `Radio選択肢4-${x}`}
            selectedItem={selected}
            onChange={(e) =>
              setSelected(selectList.find((x) => x === e.target.value))
            }
            requiredLabel={true}
            disabled
            istile="true"
            supportText="電話番号"
          />
        </Col>
      </Row>
    </div>
  );
};
