import React from 'react';
import { connect } from 'react-redux';

import './Counter.scss';

const actions = {
  inc: { type: 'INC' },
  dec: { type: 'DEC' },
  rnd: { type: 'RND', payload: Math.floor(Math.random() * 10) }
};

const Counter = ({ counter, inc, dec, rnd }) => {
  //const { counter, inc } = actions;
  console.log(counter);
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
          RANDOM
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
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
