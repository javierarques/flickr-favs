const images = (state = { byId: {}, ids: [] }, action) => {
  const { byId, ids } = state;

  switch (action.type) {
    case 'FETCH_IMAGES_SUCCESS':
      return action.images;
    case 'TOGGLE_FAVOURITE':
      return {
        ids: [...ids],
        byId: {
          ...byId,
          ...{
            [action.id]: {
              ...byId[action.id],
              isFavourite: !!!byId[action.id].isFavourite
            }
          }
        }
      };

    default:
      return state;
  }
};

export default images;
