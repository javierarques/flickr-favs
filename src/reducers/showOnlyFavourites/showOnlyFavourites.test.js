import showOnlyFavourites from './showOnlyFavourites';

describe('showOnlyFavourites reducer', () => {
  test('by default is disabled', () => {
    expect(showOnlyFavourites(undefined, {})).toEqual(false);
  });

  test('returns the opposite it has', () => {
    expect(
      showOnlyFavourites(false, { type: 'TOGGLE_SHOW_FAVOURITES' })
    ).toEqual(true);
  });
});
