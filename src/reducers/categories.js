import { categoriesData } from '../constants';

const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
    default:
      const allCategories = {
        id: 'all',
        name: 'All',
        tags: categoriesData.map(cat => cat.tags).join(',')
      };
      return [allCategories, ...categoriesData];
  }
};

export default categories;
