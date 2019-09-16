import React from 'react';
import './Calculator.scss';

const Calculator = () => {
  return (
    <div className='calculator'>
      {/* <h2>Calculator</h2> */}
      <div className='box'>
        <div className='display'>456789.0</div>
        <div className='keyboard'>
          <div className='digits'>
            <button className='btn'>1</button>
            <button className='btn'>2</button>
            <button className='btn'>3</button>
            <button className='btn'>4</button>
            <button className='btn'>5</button>
            <button className='btn'>6</button>
            <button className='btn'>7</button>
            <button className='btn'>8</button>
            <button className='btn'>9</button>
            <button className='btn'>+-</button>
            <button className='btn'>0</button>
            <button className='btn'>,</button>
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
