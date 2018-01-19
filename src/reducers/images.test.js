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
});
