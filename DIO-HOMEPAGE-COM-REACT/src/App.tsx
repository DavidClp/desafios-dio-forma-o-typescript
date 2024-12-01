
import { Layout } from './components/Layout';
import { FormCard } from './components/FormCard';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Layout>
        
      <FormCard/>

      </Layout>
    </Provider>
  );
}

export default App;
