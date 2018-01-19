import React from 'react';
import { connect } from 'react-redux';
import FavButtonIcon from './FavButtonIcon';
import { addFavourite } from '../../actions';
import './FavButton.css';

const FavButton = ({ addFavourite, image: { id, isFavourite } }) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();

    addFavourite(id);
  };

  const className = isFavourite ? 'FavButton is-active' : 'FavButton';
  return (
    <button onClick={handleClick} className={className}>
      {FavButtonIcon}
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavourite: id => dispatch(addFavourite(id))
});

export default connect(undefined, mapDispatchToProps)(FavButton);
