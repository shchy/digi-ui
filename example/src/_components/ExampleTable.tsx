import {
  Row,
  Col,
  Head,
  Checkbox,
  Text,
  Table,
  TableColumnInfo,
} from '../../../src';
// import { Icon } from 'digi-ui/icons';
import { useState } from 'react';

export const ExampleTable = () => {
  interface Data {
    id: string;
    name: string;
    age: number;
    date: string;
    isAdmin: boolean;
  }
  const now = new Date();
  const [list] = useState<Data[]>(
    [...Array(35).keys()].map((i) => ({
      id: `id_${i}`,
      name: `name_${i}`,
      date: new Date(new Date(now).setDate(now.getDate() + i)).toISOString(),
      age: 20 + i,
      isAdmin: i % 2 == 0,
    }))
  );
  const [selected, setSelected] = useState<Data[]>([]);
  const update = (v: Data, checked: boolean) => {
    if (checked && !selected.includes(v)) {
      setSelected([...selected, v]);
    } else if (selected.includes(v)) {
      setSelected(selected.filter((x) => x !== v));
    }
  };
  const columns: TableColumnInfo<Data>[] = [
    {
      header: '',
      width: 0,
      data: (x) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Checkbox
            isSimple
            value={x.id}
            checked={selected.includes(x)}
            onChange={(e) => update(x, e.target.checked)}
          />
        </div>
      ),
    },
    { header: 'ID', data: (x) => x.id },
    { header: 'Name', data: (x) => x.name },
    { header: 'Age', data: (x) => x.age.toString(), align: 'right' },
    { header: 'Date', data: (x) => x.date },
    { header: 'IsAdmin', data: (x) => (x.isAdmin ? 'Admin' : 'None') },
    {
      header: 'Status',
      data: (x) => (
        <Text style={{ backgroundColor: x.age < 25 ? 'red' : 'green' }} $block>
          {x.age}
        </Text>
      ),
    },
  ];

  return (
    <div>
      <Head level="H1">Table</Head>
      <Row>
        <Col large={1}>
          <Table
            caption="table caption"
            list={list}
            columns={columns}
            style={{ borderLine: 'horizontal' }}
            inPageSize={5}
            compactPager
          />
        </Col>
      </Row>
    </div>
  );
};
