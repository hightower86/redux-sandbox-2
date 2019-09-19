import React from 'react';
import { connect } from 'react-redux';

import Display from '../Display';
import './Calculator.scss';
//import CalcButton from '../CalcButton';

// const addBtn = () => {
//   const btn = document.createElement('button');
//   btn.classList.add('btn');
// };

const btns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+-', '0', 'del'];
const onBtnClick = btn => {
  console.log('click', btn);
};
const Calculator = ({ sum, press, del }) => {
  const buttons = btns.map(btn => {
    return (
      <button key={btn} className='btn' onClick={() => press(btn)}>
        {btn}
      </button>
    );
  });

  return (
    <div className='calculator'>
      {/* <h2>Calculator</h2> */}
      <div className='box'>
        {/* <div className='display'>456789.0</div> */}
        <Display />
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

const mapStateToProps = state => ({
  sum: state.calcReducer.sum
});

const mapDispatchToProps = dispatch => ({
  press: num => dispatch({ type: 'SUM', payload: num }),
  del: () => dispatch({ type: 'DEL' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
