import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/Project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;