import { combineReducers } from 'redux';

import categories from './categories';
import current from './current';
import error from './error';
import favourites from './favourites';
import images from './images';
import isLoading from './isLoading';
import showOnlyFavourites from './showOnlyFavourites';

const rootReducer = combineReducers({
  categories,
  current,
  error,
  favourites,
  images,
  isLoading,
  showOnlyFavourites
});

export default rootReducer;
