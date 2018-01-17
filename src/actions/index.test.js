import * as actions from './index';

describe('actions', () => {
  test('selectCategory should create a SELECT_CATEGORY action', () => {
    expect(actions.selectCategory('catId')).toEqual({
      type: 'SELECT_CATEGORY',
      categoryId: 'catId'
    });
  });
});
