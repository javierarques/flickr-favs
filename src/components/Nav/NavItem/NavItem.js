import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCategory } from '../../../actions';
import './NavItem.css';

export const NavItem = ({ currentId, id, name, onClickNavItem, tags }) => {
  const className = currentId === id ? 'NavItem is-active' : 'NavItem';

  return (
    <a
      href={`#${id}`}
      role="button"
      title={name}
      className={className}
      onClick={() => onClickNavItem(id)}
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
  onClickNavItem: id => {
    dispatch(selectCategory(id));
  }
});

const mapStateToProps = state => ({
  currentId: state.current
});

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
