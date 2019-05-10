import React, {Component} from 'react';

const NavBar = props => {
  return (
    <nav className='navbar'>
      <a className='navbar-brand'>Chatty</a>
      <p className='user-number'>Number of Users {props.numberOfUser}</p>
    </nav>
  );
}

export default NavBar;