import React from 'react';
import './Calculator.scss';
import CalcButton from '../CalcButton';

const addBtn = () => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
};

const btns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+-', '0', ','];

const Calculator = () => {
  onBtnClick = ()
  const buttons = btns.map(btn => {
    return <button className='btn'>{btn}</button>;
  });

  return (
    <div className='calculator'>
      {/* <h2>Calculator</h2> */}
      <div className='box'>
        <div className='display'>456789.0</div>
        <div className='keyboard'>
          <div className='digits'>{buttons}</div>
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
