import { Row, Col, Text, CheckboxList, Head } from 'digi-ui';
import { useState } from 'react';

export const ExampleCheckboxList = () => {
  const list = ['A', 'B', 'C'];
  const [selectedItems, setSelected] = useState<string[]>([]);
  const update = (v: string, checked: boolean) => {
    if (checked && !selectedItems.includes(v)) {
      setSelected([...selectedItems, v]);
    } else if (selectedItems.includes(v)) {
      setSelected(selectedItems.filter((x) => x !== v));
    }
  };

  return (
    <div>
      <Head level="H1">CheckboxList</Head>
      <Row>
        <Col desktop={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col desktop={3}>
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            selectDisplay={(x) => `選択肢${x}`}
            onChange={(e) => update(e.target.value, e.target.checked)}
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
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            onChange={(e) => update(e.target.value, e.target.checked)}
            supportText="電話番号"
          />
        </Col>
      </Row>
      <Row>
        <Col desktop={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col desktop={3}>
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            onChange={(e) => update(e.target.value, e.target.checked)}
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
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            onChange={(e) => update(e.target.value, e.target.checked)}
            requiredLabel={true}
            disabled
            supportText="電話番号"
          />
        </Col>
      </Row>
    </div>
  );
};
