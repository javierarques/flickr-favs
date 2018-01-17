import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategoryImages } from '../../../actions';
import './NavItem.css';

export const NavItem = ({ currentId, id, name, onClickNavItem, tags }) => {
  const className = currentId === id ? 'NavItem is-active' : 'NavItem';

  return (
    <a
      href={`#${id}`}
      role="button"
      title={name}
      className={className}
      onClick={() => onClickNavItem(id, tags)}
    >
      {name}
    </a>
  );
};

NavItem.propTypes = {
  currentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickNavItem: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  onClickNavItem: (id, tags) => {
    dispatch(getCategoryImages(id, tags));
  }
});

const mapStateToProps = state => ({
  currentId: state.current
});

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
