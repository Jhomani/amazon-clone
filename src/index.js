import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import reducer from './store/reducers';
import { state } from './store/state';
import App from './router/App';
import * as serviceWorker from './serviceWorker';

import './assets/sass/index.scss';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;

const store = createStore(reducer, state, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
