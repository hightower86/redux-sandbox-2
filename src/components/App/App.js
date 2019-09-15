import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../Counter';
import Header from '../Header';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Route path='/' exact render={() => <h2>Home</h2>} />
        <Route path='/counter' component={Counter} />
        <Route path='/calculator' component={Counter} />
      </Router>
      {/* <h2>App Component</h2> */}
    </div>
  );
};

export default App;
