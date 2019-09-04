import React from 'react';

import './Counter.scss';

const Counter = () => {
  return (
    <div className='counter'>
      <h2>0</h2>
      <div className='buttons'>
        <button>INC</button>
        <button>DEC</button>
        <button>RND</button>
      </div>
    </div>
  );
};

export default Counter;
