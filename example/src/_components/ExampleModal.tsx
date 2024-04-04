import { Row, Col, Head, ModalDialog, Button } from '../../../src';
import { useState } from 'react';

export const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState(false);
  return (
    <div>
      <Head level="H1">Table</Head>
      <Row>
        <Col large={1}>
          {result ? 'true' : 'false'}
          <Button onClick={() => setIsOpen(true)}>Open</Button>
          <ModalDialog
            isOpen={isOpen}
            title="タイトル"
            text="OKかCancelを選択してください"
            onResult={(res) => {
              setIsOpen(false);
              setResult(res);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
