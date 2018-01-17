const images = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_SUCCESS':
      return action.images;
    default:
      return state;
  }
};

export default images;