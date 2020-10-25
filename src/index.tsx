import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';

const history = createBrowserHistory();

const initialState = (window as any).INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);

reportWebVitals();
