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
            <a href='#counter'>Counter</a>
          </li>
          <li>
            <a href='#calculator'>Calculator</a>
          </li>
          <li>
            <a href='#game'>Game</a>
          </li>
          <li>
            <a href='#home'>Home</a>
          </li>
        </ul>
      </nav>
      {/* <h2>Header Component</h2> */}
    </div>
  );
};

export default Header;
