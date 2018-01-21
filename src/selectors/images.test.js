import { getImages } from './images';

describe('images selectors', () => {
  test('getImages', () => {
    const state = {
      showOnlyFavourites: true,
      images: {
        byId: {
          id1: {
            id: 'id1',
            title: 'Image 1',
            isFavourite: true
          },
          id2: {
            id: 'id2',
            title: 'Image 2',
            isFavourite: false
          }
        },
        ids: ['id1', 'id2']
      }
    };

    const expectedResult = [{ id: 'id1', title: 'Image 1', isFavourite: true }];

    expect(getImages(state)).toEqual(expectedResult);
  });
});
