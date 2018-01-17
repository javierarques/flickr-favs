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

export const getCategoryImages = (categoryId, tags) => (
  dispatch,
  getState,
  flickrFeed
) => {
  dispatch(selectCategory(categoryId));
  dispatch(fetchImagesRequest());

  return flickrFeed
    .searchByTags(tags)
    .then(images => dispatch(fetchImagesSuccess(images)))
    .catch(error => dispatch(fetchImagesFailure(error)));
};
