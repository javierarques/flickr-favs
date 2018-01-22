import React from 'react';
import { connect } from 'react-redux';
import FavIcon from '../FavIcon';
import { toggleFavourite } from '../../actions';
import './FavButton.css';

const FavButton = ({ toggleFavourite, image }) => {
  const { id, isFavourite } = image;

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavourite(id, image);
  };

  const className = isFavourite ? 'FavButton is-active' : 'FavButton';
  return (
    <button onClick={handleClick} className={className}>
      <FavIcon />
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFavourite: (id, image) =>
    dispatch(toggleFavourite(id, { ...image, isFavourite: true }))
});

export default connect(undefined, mapDispatchToProps)(FavButton);
