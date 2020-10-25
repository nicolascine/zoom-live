import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';
import { Layout } from './components/layout';
import Routes from './routes';
import { ApplicationState } from './store';

interface AppProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<AppProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Routes />
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
