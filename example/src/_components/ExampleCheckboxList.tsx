import { useState } from 'react';
import { Row, Col, Text, CheckboxList, Head } from '../../../src';
import {
  createChangeCheckedHandler,
  useSelectedList,
} from '../../../src/utils';

export const ExampleCheckboxList = () => {
  const [list] = useState(['A', 'B', 'C']);
  const [selectedItems, update] = useSelectedList<string>([]);
  const onChangeHandler = createChangeCheckedHandler(list, (x) => x, update);

  return (
    <div>
      <Head level="H1">CheckboxList</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">必須あり</Text>
        </Col>
        <Col large={3}>
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            selectDisplay={(x) => `選択肢${x}`}
            onChange={onChangeHandler}
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
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            onChange={onChangeHandler}
            supportText="電話番号"
          />
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">エラーあり</Text>
        </Col>
        <Col large={3}>
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            onChange={onChangeHandler}
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
          <CheckboxList
            label="電話番号"
            list={list}
            selectKey={(x) => x}
            selectedItems={selectedItems}
            onChange={onChangeHandler}
            requiredLabel={true}
            disabled
            supportText="電話番号"
          />
        </Col>
      </Row>
    </div>
  );
};
