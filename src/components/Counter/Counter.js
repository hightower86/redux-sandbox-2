import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/counter/actions';
import './Counter.scss';
//import { counterReducer } from '../../redux/counter/counter-reducer';

const Counter = ({ counter, inc, dec, rnd }) => {
  const styleRed = {
    color: 'red'
  };
  const styleBlue = {
    color: 'blue'
  };
  const style = counter > 0 ? styleBlue : styleRed;
  return (
    <div className='counter'>
      <h2 className='title' style={style}>
        {counter}
      </h2>
      <div className='buttons'>
        <button id='inc' className='button' onClick={inc}>
          PLUS
        </button>
        <button id='dec' className='button' onClick={dec}>
          MINUS
        </button>
        <button id='rnd' className='button' onClick={rnd}>
          RUNDOM
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.cR.counter
});

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(actions.inc),
  dec: () => dispatch(actions.dec),
  rnd: () => dispatch(actions.rnd)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
