import localStore from 'store';

const saveFavourites = store => next => action => {
  let result = next(action);

  if (action.type === 'TOGGLE_FAVOURITE') {
    localStore.set('flickr-favs', store.getState().favourites);
  }

  return result;
};

export default saveFavourites;
