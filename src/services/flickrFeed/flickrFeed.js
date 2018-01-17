import fetchJsonp from 'fetch-jsonp';
import { camelizeKeys } from 'humps';

const FLICKR_FEED_API =
  'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any';

const camelizeJSON = json =>
  camelizeKeys(json, (key, convert) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
  });

const flickrFeed = {
  fetch: endpoint =>
    fetchJsonp(endpoint, {
      jsonpCallback: 'jsoncallback',
      timeout: 3000
    }).then(response => response.json()),

  searchByTags: async tags => {
    const endpoint = `${FLICKR_FEED_API}&tags=${tags}`;

    try {
      const result = await flickrFeed.fetch(endpoint);
      return camelizeJSON(result.items);
    } catch (error) {
      return error;
    }
  }
};

export default flickrFeed;
