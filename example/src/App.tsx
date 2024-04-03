import { ExampleButton } from './_components/ExampleButton';
import { ExampleTextField } from './_components/ExampleTextField';
import { ExampleTextArea } from './_components/ExampleTextArea';
import { ExampleSelector } from './_components/ExampleSelector';
import { ExampleCheckbox } from './_components/ExampleCheckbox';
import { ExampleCheckboxList } from './_components/ExampleCheckboxList';
import { ExampleRadioButton } from './_components/ExampleRadioButton';
import { ExampleRadioButtonList } from './_components/ExampleRadioButtonList';
import { ExampleIcons } from './_components/ExampleIcons';
import { ExampleTile } from './_components/ExampleTile';
import { Routes, Route } from 'react-router-dom';
import { CatalogLayout } from './_layout/CatalogLayout';
import { ExampleDropdown } from './_components/ExampleDropdown';
import { ExampleTable } from './_components/ExampleTable';

function App() {
  return (
    <>
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
        <Route
          path="/tiles"
          element={
            <CatalogLayout>
              <ExampleTile />
            </CatalogLayout>
          }
        />
        <Route
          path="/dropdown"
          element={
            <CatalogLayout>
              <ExampleDropdown />
            </CatalogLayout>
          }
        />
        <Route
          path="/tables"
          element={
            <CatalogLayout>
              <ExampleTable />
            </CatalogLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
