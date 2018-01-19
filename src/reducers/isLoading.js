const isLoading = (state, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_REQUEST':
      return true;
    case 'FETCH_IMAGES_SUCCESS':
      return false;
    default:
      return false;
  }
};

export default isLoading;
