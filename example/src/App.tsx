import {
  Layout,
  Row,
  Col,
  Text,
  MenuList,
  MenuItem,
  MenuItemSimple,
  Header,
  Link,
} from 'digi-ui';
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
  type MenuItemWithPath = { path?: string } & MenuItem;
  const selectMenu = (item: MenuItemWithPath) => {
    if (!item.path) return;
    navigate(item.path);
  };

  const menuItems: MenuItemWithPath[] = [
    { type: 'section-header', label: 'カテゴリ' },
    {
      type: 'simple',
      label: 'ボタン',
      path: '/',
    },
    {
      type: 'simple',
      label: 'テキストフィールド',
      path: '/textfield',
    },
    {
      type: 'simple',
      label: 'テキストエリア',
      path: '/textarea',
    },
    {
      type: 'simple',
      label: 'セレクタ',
      path: '/selector',
    },
    {
      type: 'simple',
      label: 'Checkbox',
      path: '/checkbox',
    },
    {
      type: 'simple',
      label: 'CheckboxList',
      path: '/checkboxs',
    },
    {
      type: 'simple',
      label: 'RadioButton',
      path: '/radiobutton',
    },
    {
      type: 'simple',
      label: 'RadioButtonList',
      path: '/radiobuttons',
    },
    {
      type: 'simple',
      label: 'Icons',
      path: '/icons',
    },
    {
      type: 'simple',
      label: 'DisableTest',
      disabled: true,
    },
  ];

  for (const item of menuItems) {
    if (!Object.keys(item).includes('path')) continue;
    const selectableMenu = item as MenuItemSimple;
    selectableMenu.onClick = () => selectMenu(selectableMenu);
    selectableMenu.selected =
      (selectableMenu as MenuItemWithPath).path === location.pathname;
  }

  const dropdownMenu = {
    type: 'dropdown',
    label: 'コンポーネント',
    menuItems: menuItems,
  } as MenuItem;
  const headerMenus: MenuItem[] = [
    dropdownMenu,
    dropdownMenu,
    dropdownMenu,
    dropdownMenu,
  ];

  const sideMenus = [
    ...menuItems,
    {
      type: 'dropdown',
      label: 'DropdownTest',
      align: 'end',
      menuItems: menuItems,
    } as MenuItemWithPath,
  ];

  return (
    <Layout>
      <Header
        logo={<Text $type="Headline/L">Logo</Text>}
        items={[
          <Link href="https://www.google.com" target="_blank">
            Google
          </Link>,
          <Link href="https://www.yahoo.com" target="_blank">
            Yahoo
          </Link>,
        ]}
        globalMenus={headerMenus}
      ></Header>

      <Row>
        <Col large={1} medium={1} small={2}>
          <MenuList
            items={sideMenus}
            direction="column"
            dropdownDirection="right"
          />
        </Col>
        <Col large={7} medium={3} small={6}>
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
