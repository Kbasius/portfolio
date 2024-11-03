import React from 'react';
import Navigation from './Navigation';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <Navigation />
    </footer>
  );
};

export default Footer;