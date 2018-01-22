export const toggleFavourite = (id, image) => ({
  type: 'TOGGLE_FAVOURITE',
  id,
  image
});

export const toggleShowFavourites = () => ({
  type: 'TOGGLE_SHOW_FAVOURITES'
});
