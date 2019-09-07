import React from 'react';

import './Counter.scss';

const Counter = ({ count }) => {
  return (
    <div className='counter'>
      <h2>counter: {count}</h2>
      <div className='buttons'>
        <button className='button'>PLUS</button>
        <button className='button'>MINUS</button>
        <button className='button'>RANDOM</button>
      </div>
    </div>
  );
};

export default Counter;
