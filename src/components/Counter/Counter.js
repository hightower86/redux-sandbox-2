import React from 'react';
import { connect } from 'react-redux';

import './Counter.scss';

const Counter = ({ counter, inc, dec, rnd }) => {
  //console.log(inc);
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
          RND
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
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
