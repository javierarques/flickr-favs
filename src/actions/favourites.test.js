import { toggleFavourite, toggleShowFavourites } from './favourites';

describe('favourites', () => {
  it('should create an action to toggle a favourite', () => {
    const expectedAction = {
      type: 'TOGGLE_FAVOURITE',
      id: 'id'
    };

    expect(toggleFavourite('id')).toEqual(expectedAction);
  });

  it('should create an action to filter by favourited images', () => {
    const expectedAction = {
      type: 'TOGGLE_SHOW_FAVOURITES'
    };

    expect(toggleShowFavourites()).toEqual(expectedAction);
  });
});
