import React from 'react';
import FavToggle from '../FavToggle';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <header className="Header">
    <div className="Header-wrapper">
      <a href="/" title="flickr favs" className="Header-logo">
        <img src={logo} alt="flickr favs" className="Header-logoImage" />
      </a>
      <div className="Header-actions">
        <FavToggle />
      </div>
    </div>
  </header>
);

export default Header;
