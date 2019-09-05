import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { store } from './redux/store';

import './index.scss';
import App from './components/App/App';

// const initialState = {
//   counter: 10
// };

// const reducer = (state = initialState, action) => {
//   const newState = { ...state };
//   switch (action.type) {
//     case 'INC':
//       newState.counter += 1;
//       return newState;
//     case 'DEC':
//       newState.counter -= 1;
//       return newState;
//     case 'RND':
//       newState.counter += action.payload;
//       return newState;

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
