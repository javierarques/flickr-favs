const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
    default:
      return [
        {
          name: 'All',
          id: 'all',
          tags: 'madrid, barcelone, seville, valencia, bilbao'
        },
        {
          name: 'Madrid',
          id: 'madrid',
          tags: 'madrid'
        },
        {
          name: 'Barcelone',
          id: 'barcelone',
          tags: 'barcelone'
        },
        {
          name: 'Seville',
          id: 'seville',
          tags: 'seville'
        },
        {
          name: 'Valencia',
          id: 'valencia',
          tags: 'valencia'
        },
        {
          name: 'bilbao',
          id: 'bilbao',
          tags: 'bilbao'
        }
      ];
  }
};

export default categories;
