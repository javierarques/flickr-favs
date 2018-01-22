import deepFreeze from 'deep-freeze';
import favouritesReducer from './favourites';

describe('favourites reducer', () => {
  const initialState = {
    byId: {
      id1: { id: 'id1' },
      id2: { id: 'id2' }
    },
    ids: ['id1', 'id2']
  };
  deepFreeze(initialState);

  test('add a new image to favourites if is not alredy included', () => {
    const expectedState = {
      byId: {
        id1: { id: 'id1' },
        id2: { id: 'id2' },
        id3: { id: 'id3' }
      },
      ids: ['id1', 'id2', 'id3']
    };

    expect(
      favouritesReducer(initialState, {
        type: 'TOGGLE_FAVOURITE',
        id: 'id3',
        image: {
          id: 'id3'
        }
      })
    ).toEqual(expectedState);
  });

  test('removes a favourite if already exists', () => {
    expect(
      favouritesReducer(initialState, {
        type: 'TOGGLE_FAVOURITE',
        id: 'id1',
        image: {
          id: 'id1'
        }
      })
    ).toEqual({ byId: { id2: { id: 'id2' } }, ids: ['id2'] });
  });
});
