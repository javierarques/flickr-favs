import { toggleFavourite, toggleShowFavourites } from './favourites';

describe('favourites', () => {
  it('should create an action to toggle a favourite', () => {
    const expectedAction = {
      type: 'TOGGLE_FAVOURITE',
      id: 'id',
      image: { id: 'id1' }
    };

    expect(toggleFavourite('id', { id: 'id1' })).toEqual(expectedAction);
  });

  it('should create an action to filter by favourited images', () => {
    const expectedAction = {
      type: 'TOGGLE_SHOW_FAVOURITES'
    };

    expect(toggleShowFavourites()).toEqual(expectedAction);
  });
});
