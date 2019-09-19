import React from 'react';
import './Display.scss';
import { connect } from 'react-redux';

const Display = ({ sum }) => {
  console.log();
  return <div className='display'>{sum}</div>;
};

const mapStateToProps = state => ({
  sum: state.calcReducer.sum
});
export default connect(mapStateToProps)(Display);
