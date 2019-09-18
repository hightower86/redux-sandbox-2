import React from 'react';

import { connect } from 'react-redux';

import './Counter.scss';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className='counter'>
      <h3 className='title'>{counter}</h3>
      <div className='buttons'>
        <button className='button' onClick={inc}>
          PLUS
        </button>
        <button className='button' onClick={dec}>
          MINUS
        </button>
        <button className='button' onClick={rnd}>
          RANDOM
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.reducer.counter
});

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch({ type: 'INC' }),
  dec: () => dispatch({ type: 'DEC' }),
  rnd: () => dispatch({ type: 'RND', payload: Math.floor(Math.random() * 10) })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
