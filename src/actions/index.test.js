import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCategoryImages } from './index';

const flickrFeed = {
  getImagesByTags: jest.fn()
};

flickrFeed.getImagesByTags.mockReturnValue(
  Promise.resolve([
    {
      title: 'ESGL\u00c9SIA DE SANT JAUME',
      link: 'http://www.flickr.com/photos/yeagovc/39716233922/',
      media: {
        m: 'http://farm5.staticflickr.com/4606/39716233922_b14b3ca85b_m.jpg'
      }
    }
  ])
);

const normalizedImages = {
  byId: {
    39716233922: {
      id: '39716233922',
      title: 'ESGL\u00c9SIA DE SANT JAUME',
      link: 'http://www.flickr.com/photos/yeagovc/39716233922/',
      src: 'http://farm5.staticflickr.com/4606/39716233922_b14b3ca85b_m.jpg',
      categoryId: 'cat'
    }
  },
  ids: ['39716233922']
};

const middlewares = [thunk.withExtraArgument(flickrFeed)];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('creates FETCH_IMAGES_SUCCESS when fetching images has been done', async () => {
    const expectedActions = [
      { type: 'SELECT_CATEGORY', categoryId: 'cat' },
      { type: 'FETCH_IMAGES_REQUEST' },
      { type: 'FETCH_IMAGES_SUCCESS', images: normalizedImages }
    ];

    const store = mockStore({ images: [] });
    const response = await store.dispatch(getCategoryImages('cat', 'tags'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
