import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Bayoudh.</div>
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/architecture" className="nav-link">Architecture</NavLink>
        <NavLink to="/interior-design" className="nav-link">Interior Design</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
