import React from 'react';
import { connect } from 'react-redux';
import FavIcon from '../FavIcon';
import { toggleFavourite } from '../../actions';
import './FavButton.css';

const FavButton = ({ toggleFavourite, image: { id, isFavourite } }) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavourite(id);
  };

  const className = isFavourite ? 'FavButton is-active' : 'FavButton';
  return (
    <button onClick={handleClick} className={className}>
      <FavIcon />
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFavourite: id => dispatch(toggleFavourite(id))
});

export default connect(undefined, mapDispatchToProps)(FavButton);
