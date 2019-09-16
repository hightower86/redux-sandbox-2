import React from 'react';
import './Calculator.scss';

const Calculator = () => {
  return (
    <div className='calculator'>
      {/* <h2>Calculator</h2> */}
      <div className='box'>
        <div className='display'></div>
        <div className='keyboard'>
          <div className='digits'>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
            <button className='btn'></button>
          </div>
          <div className='actions'>
            <button className='act'></button>
            <button className='act'></button>
            <button className='act'></button>
            <button className='act'></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
