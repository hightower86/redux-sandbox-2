import React from 'react';
import ReactDom from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import './index.scss';

const counterReducer = (state = { counter: 0 }, action) => {
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
const showDisplay = (sum, str) => {
  console.log(sum, str);
  if (typeof +str === 'number') {
    return sum + str;
  } else if (str == 'del') {
    console.log('del');
    return sum.slice(0, sum.length - 1);
  }
};

const calcReducer = (state = { sum: 0 }, action) => {
  switch (action.type) {
    case 'SUM':
      return {
        ...state,
        sum: (state.sum = showDisplay(state.sum, action.payload))
        //state.sum === 0 ? action.payload : state.sum + action.payload)
      };
    // case 'DEL':
    //   return { ...state, sum: state.sum.slice(0, state.sum.length - 1) };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
  calcReducer
});
const store = createStore(rootReducer);
//console.log(store.getState());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
