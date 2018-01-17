import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import { connect } from 'react-redux';
import './Nav.css';

export const Nav = ({ categories }) => {
  const navItems = categories.map(({ name, id, tags }) => (
    <NavItem key={id} name={name} tags={tags} id={id} />
  ));

  return (
    <nav className="Nav">
      <div className="Nav-wrapper">{navItems}</div>
    </nav>
  );
};

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(Nav);
