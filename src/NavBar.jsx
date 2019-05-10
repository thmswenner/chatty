import React, {Component} from 'react';

const NavBar = props => {
  return (
    <nav className='navbar'>
      <a className='navbar-brand'>Chatty</a>
      <p>{props.numberOfUser}</p>
    </nav>
  );
}

export default NavBar;