import React from 'react';

import './Counter.scss';

const Counter = () => {
  return (
    <div className='counter'>
      <h2 className='title'>Counter</h2>
      <div className='buttons'>
        <button className='button'>PLUS</button>
        <button className='button'>MINUS</button>
        <button className='button'>RND</button>
      </div>
    </div>
  );
};

export default Counter;
