import flickrFeed from './flickrFeed';
import responseMock from './responseMock';
import fetchJsonp from 'fetch-jsonp';

jest.mock('fetch-jsonp');

fetchJsonp.mockImplementation(() =>
  Promise.resolve({ json: () => responseMock })
);

describe('api service', () => {
  test('searches images in flickr feed API by tags', async () => {
    const images = await flickrFeed.getImagesByTags('madrid');

    expect(fetchJsonp).toHaveBeenCalledWith(
      'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any&tags=madrid',
      { jsonpCallback: 'jsoncallback', timeout: 3000 }
    );

    expect(images).toHaveLength(20);
  });

  test('response is camelized', async () => {
    const images = await flickrFeed.getImagesByTags('madrid');

    expect(images[0].hasOwnProperty('dateTaken')).toBeTruthy();
  });
});
