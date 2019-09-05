import React from 'react';
import { connect } from 'react-redux';
import './Counter.scss';

const Counter = ({ counter, inc, dec }) => {
  return (
    <div className='counter'>
      <h2>counter: {counter}</h2>
      <div className='buttons'>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button>RND</button>
      </div>
    </div>
  );
};

const actions = {
  inc: { type: 'INC' },
  dec: { type: 'DEC' }
};

const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(actions.inc),
    dec: () => dispatch(actions.dec)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
