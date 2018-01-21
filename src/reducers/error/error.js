const error = (state, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_FAILURE':
      return true;
    default:
      return false;
  }
};

export default error;
