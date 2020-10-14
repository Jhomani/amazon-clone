import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './router/App';

import * as serviceWorker from './serviceWorker';

import './assets/sass/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
