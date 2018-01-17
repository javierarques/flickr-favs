const isLoading = (state, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_REQUEST':
      return true;
    default:
      return false;
  }
};

export default isLoading;
