import React from 'react';

import './Counter.scss';

const Counter = () => {
  return (
    <div className='counter'>
      <h3 className='title'>Counter Component</h3>
      <div className='buttons'>
        <button className='button'>PLUS</button>
        <button className='button'>MINUS</button>
        <button className='button'>RANDOM</button>
      </div>
    </div>
  );
};

export default Counter;
