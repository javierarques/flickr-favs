import fetchJsonp from 'fetch-jsonp';
import { camelizeKeys } from 'humps';

const FLICKR_FEED_API =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any';

const camelizeJSON = json =>
  camelizeKeys(json, (key, convert) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
  });

const flickrFeed = {
  fetchJson: endpoint =>
    fetchJsonp(endpoint, {
      jsonpCallback: 'jsoncallback',
      timeout: 3000
    }).then(response => response.json()),

  getImagesByTags: async tags => {
    const endpoint = `${FLICKR_FEED_API}&tags=${tags}`;

    try {
      const result = await flickrFeed.fetchJson(endpoint);
      return camelizeJSON(result.items);
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default flickrFeed;
