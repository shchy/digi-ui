import { Layout, Row, Col, MenuLabel, Menu } from 'digi-ui';
import { ExampleButton } from './_components/ExampleButton';
import { ExampleTextField } from './_components/ExampleTextField';
import { ExampleTextArea } from './_components/ExampleTextArea';
import { ExampleSelector } from './_components/ExampleSelector';
import { ExampleCheckbox } from './_components/ExampleCheckbox';
import { ExampleCheckboxList } from './_components/ExampleCheckboxList';
import { ExampleRadioButton } from './_components/ExampleRadioButton';
import { ExampleRadioButtonList } from './_components/ExampleRadioButtonList';
import { ExampleIcons } from './_components/ExampleIcons';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout>
      <Row>
        <Col desktop={2} tablet={2}>
          <MenuLabel label="カテゴリ" />
          {/* <Menu label="Language" onClick={() => console.log('click')} /> */}
          <Menu
            label="ボタン"
            onClick={() => navigate('/')}
            selected={location.pathname === '/'}
          />
          <Menu
            label="テキストフィールド"
            onClick={() => navigate('/textfield')}
            selected={location.pathname === '/textfield'}
          />
          <Menu
            label="テキストエリア"
            onClick={() => navigate('/textarea')}
            selected={location.pathname === '/textarea'}
          />
          <Menu
            label="セレクタ"
            onClick={() => navigate('/selector')}
            selected={location.pathname === '/selector'}
          />
          <Menu
            label="Checkbox"
            onClick={() => navigate('/checkbox')}
            selected={location.pathname === '/checkbox'}
          />
          <Menu
            label="CheckboxList"
            onClick={() => navigate('/checkboxs')}
            selected={location.pathname === '/checkboxs'}
          />
          <Menu
            label="RadioButton"
            onClick={() => navigate('/radiobutton')}
            selected={location.pathname === '/radiobutton'}
          />
          <Menu
            label="RadioButtonList"
            onClick={() => navigate('/radiobuttons')}
            selected={location.pathname === '/radiobuttons'}
          />
          <Menu
            label="Icons"
            onClick={() => navigate('/icons')}
            selected={location.pathname === '/icons'}
          />
        </Col>
        <Col desktop={10} tablet={6}>
          <Routes>
            <Route path="/" element={<ExampleButton />} />
            <Route path="/textfield" element={<ExampleTextField />} />
            <Route path="/textarea" element={<ExampleTextArea />} />
            <Route path="/selector" element={<ExampleSelector />} />
            <Route path="/checkbox" element={<ExampleCheckbox />} />
            <Route path="/checkboxs" element={<ExampleCheckboxList />} />
            <Route path="/radiobutton" element={<ExampleRadioButton />} />
            <Route path="/radiobuttons" element={<ExampleRadioButtonList />} />
            <Route path="/icons" element={<ExampleIcons />} />
          </Routes>
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
