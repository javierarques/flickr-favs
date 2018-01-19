import { addFavourite, removeFavourite } from './favourites';

describe('favourites', () => {
  it('should create an action to add a favourite', () => {
    const expectedAction = {
      type: 'TOGGLE_FAVOURITE',
      id: 'id'
    };
    expect(addFavourite('id')).toEqual(expectedAction);
  });

  it('should create an action to remove a favourite', () => {
    const expectedAction = {
      type: 'REMOVE_FAVOURITE',
      id: 'id'
    };
    expect(removeFavourite('id')).toEqual(expectedAction);
  });
});
