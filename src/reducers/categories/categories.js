import categoriesData from './categoriesData';

const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
    default:
      return categoriesData;
  }
};

export default categories;
