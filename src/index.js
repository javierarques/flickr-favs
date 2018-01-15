import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import './index.css';
import App from './App';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });
  middlewares = [...middlewares, logger];
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
