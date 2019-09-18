import React from 'react';
import ReactDom from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import './index.scss';

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: (state.counter += 1) };
    case 'DEC':
      return { ...state, counter: (state.counter -= 1) };
    case 'RND':
      return { ...state, counter: (state.counter += action.payload) };

    default:
      return state;
  }
};

const calcReducer = (state = { sum: 0 }, action) => {
  switch (action.type) {
    case 'SUM':
      return { ...state, sum: 1 };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  calcReducer
});
const store = createStore(rootReducer);
console.log(store.getState());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
