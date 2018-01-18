import images from './images';

describe('images reducer', () => {
  test('stores images in the store when FETCH_IMAGES_SUCCESS', () => {
    expect(
      images(undefined, {
        type: 'FETCH_IMAGES_SUCCESS',
        images: { byId: {}, ids: [] }
      })
    ).toEqual({ byId: {}, ids: [] });
  });
});
