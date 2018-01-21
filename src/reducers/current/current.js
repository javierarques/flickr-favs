const current = (state = 'all', action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return action.categoryId;
    default:
      return state;
  }
};

export default current;
