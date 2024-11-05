import React from 'react';
import Navigation from './Navigation';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <h1>Enter clever Title here.</h1>
      <Navigation/>
    </header>
  );
};

export default Header;