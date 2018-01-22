import normalize from '../../services/normalize';

const selectCategory = categoryId => ({
  type: 'SELECT_CATEGORY',
  categoryId
});

const fetchImagesRequest = () => ({
  type: 'FETCH_IMAGES_REQUEST'
});

const fetchImagesSuccess = images => ({
  type: 'FETCH_IMAGES_SUCCESS',
  images
});

const fetchImagesFailure = error => ({
  type: 'FETCH_IMAGES_FAILURE',
  error
});

const showFavourites = (categoryId, favourites) => ({
  type: 'SHOW_FAVOURITES',
  categoryId,
  favourites
});

export const getCategoryImages = (categoryId, tags) => (
  dispatch,
  getState,
  flickrFeed
) => {
  dispatch(selectCategory(categoryId));
  dispatch(fetchImagesRequest());

  return flickrFeed
    .getImagesByTags(tags)
    .then(images => {
      dispatch(fetchImagesSuccess(normalize(images, categoryId)));
      dispatch(showFavourites(categoryId, getState().favourites));
    })
    .catch(error => {
      dispatch(showFavourites(categoryId, getState().favourites));
      dispatch(fetchImagesFailure(error));
    });
};
