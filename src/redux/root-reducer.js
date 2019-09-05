import { combineReducers } from 'redux';

import { counterReducer } from '../redux/counter/counter-reducer';

export const rootReducer = combineReducers({
  cR: counterReducer
});
