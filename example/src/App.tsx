import { ExampleButton } from './_components/ExampleButton';
import { ExampleTextField } from './_components/ExampleTextField';
import { ExampleTextArea } from './_components/ExampleTextArea';
import { ExampleSelector } from './_components/ExampleSelector';
import { ExampleCheckbox } from './_components/ExampleCheckbox';
import { ExampleCheckboxList } from './_components/ExampleCheckboxList';
import { ExampleRadioButton } from './_components/ExampleRadioButton';
import { ExampleRadioButtonList } from './_components/ExampleRadioButtonList';
import { ExampleIcons } from './_components/ExampleIcons';
import { Routes, Route } from 'react-router-dom';
import { CatalogLayout } from './_layout/CatalogLayout';

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
      </Routes>
    </>
  );
}

export default App;
