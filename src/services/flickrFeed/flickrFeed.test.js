import flickrFeed from './flickrFeed';
import responseMock from './responseMock';

describe('api service', () => {
  flickrFeed.fetch = jest.fn();
  flickrFeed.fetch.mockReturnValue(responseMock);

  test('searches images in flickr feed API by tags', async () => {
    const images = await flickrFeed.searchByTags('madrid');

    expect(flickrFeed.fetch).toHaveBeenCalledWith(
      'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any&tags=madrid'
    );
    expect(images).toHaveLength(20);
  });

  test('response is camelized', async () => {
    const images = await flickrFeed.searchByTags('madrid');

    expect(images[0].hasOwnProperty('dateTaken')).toBeTruthy();
  });
});
