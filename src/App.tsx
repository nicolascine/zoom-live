import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Layout } from './components/layout';
import { Home, SingleSession } from './components/pages';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/session/:id" component={SingleSession} />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
