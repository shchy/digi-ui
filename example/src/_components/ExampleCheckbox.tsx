import { Row, Col, Text, Checkbox, Head } from '../../../src';
import { useSelectedList } from '../../../src/utils';

export const ExampleCheckbox = () => {
  type enums = 'A' | 'B';

  const [selected, updateSelected] = useSelectedList<enums>([]);

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
            onChange={(e) => updateSelected('A', e.target.checked)}
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
            onChange={(e) => updateSelected('B', e.target.checked)}
            disabled
          >
            選択肢1
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};
