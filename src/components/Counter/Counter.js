import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/counter/actions';
import './Counter.scss';
//import { counterReducer } from '../../redux/counter/counter-reducer';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className='counter'>
      <h2 className='title'>{counter}</h2>
      <div className='buttons'>
        <button className='button' onClick={inc}>
          PLUS
        </button>
        <button className='button' onClick={dec}>
          MINUS
        </button>
        <button className='button' onClick={rnd}>
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
