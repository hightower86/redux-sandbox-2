import { combineReducers } from 'redux';
import { counterReducer } from './counter/counter-reducer';

export const rootReducer = combineReducers({
  cR: counterReducer
});
