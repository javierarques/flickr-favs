import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <header className="Header">
    <div className="Header-wrapper">
      <a href="/" title="flickr favs" className="Header-logo">
        <img src={logo} alt="flickr favs" className="Header-logoImage" />
      </a>
    </div>
  </header>
);

export default Header;
