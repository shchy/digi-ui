import { ExampleButton } from './_components/ExampleButton';
import { ExampleTextField } from './_components/ExampleTextField';
import { ExampleTextArea } from './_components/ExampleTextArea';
import { ExampleSelector } from './_components/ExampleSelector';
import { ExampleCheckbox } from './_components/ExampleCheckbox';
import { ExampleCheckboxList } from './_components/ExampleCheckboxList';
import { ExampleRadioButton } from './_components/ExampleRadioButton';
import { ExampleRadioButtonList } from './_components/ExampleRadioButtonList';
import { Layout } from 'digi-ui';

function App() {
  return (
    <Layout>
      <ExampleButton />
      <ExampleTextField />
      <ExampleTextArea />
      <ExampleSelector />
      <ExampleCheckbox />
      <ExampleCheckboxList />
      <ExampleRadioButton />
      <ExampleRadioButtonList />
    </Layout>
  );
}

export default App;
