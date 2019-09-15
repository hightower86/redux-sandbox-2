import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='logo'>LOGO</div>
        <ul className='nav'>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link to='/game'>Game</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      {/* <h2>Header Component</h2> */}
    </div>
  );
};

export default Header;
