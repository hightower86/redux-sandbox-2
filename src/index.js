import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';
import App from './components/App/App';

const reducer = (state = { counter: 0 }, action) => {
  console.log(state);
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

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
