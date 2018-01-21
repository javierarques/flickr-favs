const showOnlyFavourites = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_FAVOURITES':
      return !state;
    default:
      return state;
  }
};

export default showOnlyFavourites;
