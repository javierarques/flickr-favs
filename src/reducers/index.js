import { combineReducers } from 'redux';
import categories from './categories';
import current from './current';

const rootReducer = combineReducers({
  categories,
  current
});

export default rootReducer;
