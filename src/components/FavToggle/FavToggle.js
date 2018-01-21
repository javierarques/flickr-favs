import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowFavourites } from '../../actions';
import FavIcon from '../FavIcon';
import './FavToggle.css';

export const FavToggle = ({ showOnlyFavourites, toggleShowFavourites }) => {
  const handleClick = () => {
    toggleShowFavourites();
  };

  const className = showOnlyFavourites ? 'FavToggle is-active' : 'FavToggle';

  return (
    <button className={className} onClick={handleClick}>
      <span className="FavToggle-icon">
        <FavIcon />
      </span>
      <span className="FavToggle-text">
        <span className="FavToggle-ShowText">Show</span> only favourites
      </span>
    </button>
  );
};

FavToggle.propTypes = {
  showOnlyFavourites: PropTypes.bool.isRequired,
  toggleShowFavourites: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showOnlyFavourites: state.showOnlyFavourites
});

const mapDispatchToProps = dispatch => ({
  toggleShowFavourites: () => dispatch(toggleShowFavourites())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavToggle);
