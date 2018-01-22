import imagesReducer from './images';
import deepFreeze from 'deep-freeze';

describe('images reducer', () => {
  test('stores images in the store when FETCH_IMAGES_SUCCESS', () => {
    expect(
      imagesReducer(undefined, {
        type: 'FETCH_IMAGES_SUCCESS',
        images: { byId: {}, ids: [] }
      })
    ).toEqual({ byId: {}, ids: [] });
  });

  test('set image to favourited when TOGGLE_FAVOURITE', () => {
    const state = {
      byId: {
        123: {
          title: 'A title'
        }
      },
      ids: ['123']
    };
    deepFreeze(state);

    expect(
      imagesReducer(state, { type: 'TOGGLE_FAVOURITE', id: '123' })
    ).toEqual({
      byId: {
        123: {
          title: 'A title',
          isFavourite: true
        }
      },
      ids: ['123']
    });
  });

  test('set image to not favourite if already favourited', () => {
    const state = {
      byId: {
        123: {
          title: 'A title',
          isFavourite: true
        }
      },
      ids: ['123']
    };
    deepFreeze(state);

    expect(
      imagesReducer(state, { type: 'TOGGLE_FAVOURITE', id: '123' })
    ).toEqual({
      byId: {
        123: {
          title: 'A title',
          isFavourite: false
        }
      },
      ids: ['123']
    });
  });

  test('it should merge the images with the favourites', () => {
    const state = {
      byId: {
        123: {
          title: 'A title',
          categoryId: 'category'
        }
      },
      ids: ['123']
    };
    deepFreeze(state);

    const favourites = {
      byId: {
        123: {
          title: 'A title',
          categoryId: 'category',
          isFavourite: true
        },
        456: {
          title: 'A title',
          categoryId: 'category',
          isFavourite: true
        },
        789: {
          title: 'A title',
          categoryId: 'otherCategory',
          isFavourite: true
        }
      },
      ids: ['123', '456', '789']
    };

    expect(
      imagesReducer(state, {
        type: 'SHOW_FAVOURITES',
        categoryId: 'category',
        favourites
      })
    ).toEqual({
      byId: {
        123: {
          title: 'A title',
          isFavourite: true,
          categoryId: 'category'
        },
        456: {
          title: 'A title',
          categoryId: 'category',
          isFavourite: true
        }
      },
      ids: ['123', '456']
    });
  });
});
