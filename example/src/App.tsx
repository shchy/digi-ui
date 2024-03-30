import { Text, MenuItem, UtilityLink, Scaffold, HeaderProps } from 'digi-ui';
import { ExampleButton } from './_components/ExampleButton';
import { ExampleTextField } from './_components/ExampleTextField';
import { ExampleTextArea } from './_components/ExampleTextArea';
import { ExampleSelector } from './_components/ExampleSelector';
import { ExampleCheckbox } from './_components/ExampleCheckbox';
import { ExampleCheckboxList } from './_components/ExampleCheckboxList';
import { ExampleRadioButton } from './_components/ExampleRadioButton';
import { ExampleRadioButtonList } from './_components/ExampleRadioButtonList';
import { ExampleIcons } from './_components/ExampleIcons';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useMenus } from './_layout/menus';
import { CatalogLayout } from './_layout/CatalogLayout';
import { useEffect, useState } from 'react';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);
  const { catalogMenuItems } = useMenus();

  const navigate = useNavigate();
  const logo = (
    <Text
      onClick={() => navigate('/')}
      $type="Headline/XXS"
      style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}
    >
      デジタル庁
    </Text>
  );
  const globalMenu = [
    { label: 'カタログ', type: 'dropdown', menuItems: catalogMenuItems },
  ] as MenuItem[];
  const items = [
    <UtilityLink
      beforeIcon={{ name: 'Child' }}
      afterIcon={{ name: 'NewWindow' }}
      href="https://www.google.com"
      target="_blank"
    >
      Google
    </UtilityLink>,
  ];

  const headerInfo = {
    logo: logo,
    globalMenus: globalMenu,
    items: items,
    drawerPosition: 'full',
    isDrawerOpen: isDrawerOpen,
    onChangeOpenDrawer(isOpen) {
      setIsDrawerOpen(isOpen);
    },
  } as HeaderProps;

  return (
    <Scaffold header={headerInfo}>
      <Routes>
        <Route
          path="/"
          element={
            <CatalogLayout>
              <ExampleButton />
            </CatalogLayout>
          }
        />
        <Route
          path="/textfield"
          element={
            <CatalogLayout>
              <ExampleTextField />
            </CatalogLayout>
          }
        />
        <Route
          path="/textarea"
          element={
            <CatalogLayout>
              <ExampleTextArea />
            </CatalogLayout>
          }
        />
        <Route
          path="/selector"
          element={
            <CatalogLayout>
              <ExampleSelector />
            </CatalogLayout>
          }
        />
        <Route
          path="/checkbox"
          element={
            <CatalogLayout>
              <ExampleCheckbox />
            </CatalogLayout>
          }
        />
        <Route
          path="/checkboxs"
          element={
            <CatalogLayout>
              <ExampleCheckboxList />
            </CatalogLayout>
          }
        />
        <Route
          path="/radiobutton"
          element={
            <CatalogLayout>
              <ExampleRadioButton />
            </CatalogLayout>
          }
        />
        <Route
          path="/radiobuttons"
          element={
            <CatalogLayout>
              <ExampleRadioButtonList />
            </CatalogLayout>
          }
        />
        <Route
          path="/icons"
          element={
            <CatalogLayout>
              <ExampleIcons />
            </CatalogLayout>
          }
        />
      </Routes>
    </Scaffold>
  );
}

export default App;
