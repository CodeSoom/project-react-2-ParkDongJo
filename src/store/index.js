import { combineReducers } from 'redux';

import authorSlice from './authorSlice';
import bookSlice from './bookSlice';

export default combineReducers({
  author: authorSlice,
  book: bookSlice,
});
