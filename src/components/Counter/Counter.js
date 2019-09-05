import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/counter/counter-actions';
import './Counter.scss';

const Counter = ({ counter, inc, dec, rnd }) => {
  console.log(counter);
  return (
    <div className='counter'>
      <h2>{counter}</h2>
      <div className='buttons'>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={rnd}>RND</button>
      </div>
    </div>
  );
};

// const actions = {
//   inc: { type: 'INC' },
//   dec: { type: 'DEC' },
//   rnd: { type: 'RND', payload: Math.floor(Math.random() * 10) }
// };

const mapStateToProps = state => {
  console.log(state);
  return { counter: state.cR.counter };
};

const mapDispatchToProps = dispatch => {
  const { inc, dec, rnd } = actions;
  return {
    inc: () => dispatch(inc),
    dec: () => dispatch(dec),
    rnd: () => dispatch(rnd)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
