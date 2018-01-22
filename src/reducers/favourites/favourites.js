const favourites = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      const { byId, ids } = state;
      const { image, id } = action;

      const removeFromById = id => {
        let newById = {};
        Object.keys(byId).forEach(key => {
          if (key !== id) newById[key] = byId[key];
        });

        return newById;
      };

      const removeFromIds = id => ids.filter(item => item !== id);

      if (ids.includes(id)) {
        return {
          byId: { ...removeFromById(id) },
          ids: removeFromIds(id)
        };
      } else {
        return {
          byId: { ...byId, ...{ [id]: { ...image } } },
          ids: [...ids, id]
        };
      }
    default:
      return state;
  }
};

export default favourites;
