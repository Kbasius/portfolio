import React from 'react';
import Navigation from './Navigation';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <Navigation/>
    </footer>
  );
};

export default Footer;