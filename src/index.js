import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import localStore from 'store';
import rootReducer from './reducers';
import flickrFeed from './services/flickrFeed';
import saveFavourites from './middlewares/saveFavourites';
import App from './components/App';
import './styles/index.css';

const persistedFavs = localStore.get('flickr-favs');
const initialState = { favourites: persistedFavs }  || {};

let middlewares = [thunk.withExtraArgument(flickrFeed), saveFavourites];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });
  middlewares = [...middlewares, logger];
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.Root')
);
