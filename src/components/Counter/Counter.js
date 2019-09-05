import React from 'react';
import { connect } from 'react-redux';

import './Counter.scss';

const Counter = () => {
  return (
    <div className='counter'>
      <h2 className='title'>Counter</h2>
      <div className='buttons'>
        <button className='button'>PLUS</button>
        <button className='button'>MINUS</button>
        <button className='button'>RUNDOM</button>
      </div>
    </div>
  );
};

export default Counter;
