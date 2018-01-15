const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
    default:
      return {
        all: {
          title: 'All',
          tags: 'madrid, barcelone, seville, valencia, bilbao'
        },
        madrid: {
          title: 'Madrid',
          tags: 'madrid'
        },
        barcelona: {
          title: 'Bacelone',
          tags: 'barcelone'
        },
        seville: {
          title: 'Seville',
          tags: 'seville'
        },
        valencia: {
          title: 'Valencia',
          tags: 'valencia'
        },
        bilbao: {
          title: 'bilbao',
          tags: 'bilbao'
        }
      };
  }
};

export default categories;
