import { Row, Col, Text, Checkbox, Head } from 'digi-ui';
import { useState } from 'react';

export const ExampleCheckbox = () => {
  type enums = 'A' | 'B';
  const [selected, setSelected] = useState<enums[]>([]);
  const update = (v: enums, checked: boolean) => {
    if (checked && !selected.includes(v)) {
      setSelected([...selected, v]);
    } else if (selected.includes(v)) {
      setSelected(selected.filter((x) => x !== v));
    }
  };

  return (
    <div>
      <Head level="H1">Checkbox</Head>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Normal</Text>
        </Col>
        <Col large={3}>
          <Checkbox
            name="asdf"
            value={'A'}
            checked={selected.includes('A')}
            onChange={(e) => update('A', e.target.checked)}
          >
            選択肢1
          </Checkbox>
        </Col>
      </Row>
      <Row>
        <Col large={1}>
          <Text $type="Headline/XS">Disabled</Text>
        </Col>
        <Col large={3}>
          <Checkbox
            name="asdf"
            value={'B'}
            checked={selected.includes('B')}
            onChange={(e) => update('B', e.target.checked)}
            disabled
          >
            選択肢1
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};
