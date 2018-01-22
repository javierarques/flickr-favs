import union from 'lodash/union';

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
    case 'SHOW_FAVOURITES':
      let favouriteImages = {};
      let favouriteIds = [];
      const { favourites, categoryId } = action;

      favourites.ids.forEach(id => {
        if (favourites.byId[id].categoryId === categoryId) {
          favouriteImages[id] = favourites.byId[id];
          favouriteIds.push(id);
        }
      });

      return {
        ids: union(state.ids, favouriteIds),
        byId: { ...state.byId, ...favouriteImages }
      };

    default:
      return state;
  }
};

export default images;
