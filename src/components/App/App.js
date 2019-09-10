import React from 'react';
import Counter from '../Counter';
import Header from '../Header';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <h2>App Component</h2>
      <Counter />
    </div>
  );
};

export default App;
