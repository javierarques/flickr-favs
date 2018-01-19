export const addFavourite = id => ({
  type: 'TOGGLE_FAVOURITE',
  id
});

export const removeFavourite = id => ({
  type: 'REMOVE_FAVOURITE',
  id
});
