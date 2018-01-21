export const getImages = state => {
  const { showOnlyFavourites, images } = state;

  const filterByFavouritesIfNeeded = id => {
    const image = images.byId[id];
    const { isFavourite } = image;

    if (showOnlyFavourites && !isFavourite) return false;

    return true;
  };

  return images.ids
    .filter(filterByFavouritesIfNeeded)
    .map(id => images.byId[id]);
};
