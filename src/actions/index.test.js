import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCategoryImages } from './index';

const flickrFeed = {
  searchByTags: jest.fn()
};

flickrFeed.searchByTags.mockReturnValue(
  Promise.resolve([{ title: 'Image Title' }])
);

const middlewares = [thunk.withExtraArgument(flickrFeed)];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('creates FETCH_IMAGES_SUCCESS when fetching images has been done', async () => {
    const expectedActions = [
      { type: 'SELECT_CATEGORY', categoryId: 'cat' },
      { type: 'FETCH_IMAGES_REQUEST' },
      { type: 'FETCH_IMAGES_SUCCESS', images: [{ title: 'Image Title' }] }
    ];

    const store = mockStore({ images: [] });
    const response = await store.dispatch(getCategoryImages('cat', 'tags'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
