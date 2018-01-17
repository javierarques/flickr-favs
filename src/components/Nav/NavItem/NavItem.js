import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.css';

export const NavItem = ({ name, id, tags }) => (
  <a href={`#${id}`} role="button" title={name} className="NavItem">
    {name}
  </a>
);

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
};

export default NavItem;
