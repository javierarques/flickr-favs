import { combineReducers } from 'redux';
import categories from './categories';
import current from './current';
import images from './images';
import isLoading from './isLoading';

const rootReducer = combineReducers({
  categories,
  current,
  images,
  isLoading
});

export default rootReducer;
