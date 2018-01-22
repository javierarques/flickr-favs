# flickr favs
[flickr-favs](http://flickr-favs.netlify.com/) is a simple React project to select your favourite flickr images from some categories (right now, some Spanish cities 🇪🇸). The images are fetched from the flickr feed public feed api. You can filter and see only your favourite images in every category. The favourites are persisted in localStorage, so you can reload the page and still see them. To create the project I used the super handy [create-react-app](https://github.com/facebook/create-react-app) and [redux](https://github.com/reactjs/redux).

## Scripts to run the project

In the project directory, you can run:

### `npm install`
This will install all the dependencies to run the project locally.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

# Development process

Contents:

* [UI Design](#ui-design)
* [Categories](#categories)
* [Fetching flickr feed images](#fetching-flickr-feed-images)
* [Normalizing data](#normalizing-data)
* [Redux](#redux)
* [Persist data](#persist-data)

## UI Design
I tried to do it as simple as possible, focused on mobile design and where you can clearly see the main actions (change category, add a photo to your favourites and filter by favourites).

The layout is composed of:
* A header with the logo and the favourites filter.
* A navigation menu with the main categories. This menu has an horizontal scroll to see all the links for the mobile version. It's a common and simple pattern in a lot of mobile apps. I have added a shadow to the right of the menu to emphasize that there are more links.
* A gallery with 3-2-1 columns (depending on the device size). Each image can have a different height. It's similar to a [Masonry](https://masonry.desandro.com/) grid, but just with CSS.
* Each gallery item has the image (with poor quality by the way...), the title and the "Add to favourites" button.
* The "Add to favourites" button has a simple animation (like a pulse) to make this action "sexier".

## Categories
The categories for the main navigation, with the tags that will be fetched from the flickr API are set in this [config file](https://github.com/javierarques/flickr-favs/blob/master/src/reducers/categories/categoriesData.js). There can be added new ones or edit the current ones.

A category follow this format:
```javascript
{
  name: 'Madrid', // the name of the link
  id: 'madrid',   // the internal id
  tags: 'madrid'  // that tags for the API request
}
```

## Fetching flickr feed images
The images in the project are provided by the [flickr public feed api](https://www.flickr.com/services/feeds/docs/photos_public/). This API returns a list of public content matching some criteria, tags in our case.
This API works with [JSONP](https://en.wikipedia.org/wiki/JSONP) instead of CORS. So the data is fetched using [fetch-jsonp](https://github.com/camsong/fetch-jsonp) library, which allows you to make JSONP request like `window.fetch`.

### Testing the API
To test the api service the `fetchJsonp` library has to be mocked. This has been really easy thanks to the mocking functions that [Jest](https://facebook.github.io/jest/docs/en/mock-function-api.html) provides:

```javascript

import responseMock from './responseMock';
import fetchJsonp from 'fetch-jsonp';

jest.mock('fetch-jsonp');

fetchJsonp.mockImplementation(() =>
  Promise.resolve({ json: () => responseMock })
);

```

## Normalizing data
Many APIs, public or not, return JSON data that has deeply nested objects. Using data in this kind of structure is often very difficult for JavaScript applications, especially those using Flux or Redux.

That's why the data that is fetched from flickr is converted to a more easily accessible data. Only the really required fields are added. Plus, an `id` field is created from the `link` field.

Having this source:

```javascript
const images = [
  {
    title: 'ESGL\u00c9SIA DE SANT JAUME',
    link: 'http://www.flickr.com/photos/yeagovc/39716233922/',
    media: {
      m: 'http://farm5.staticflickr.com/4606/39716233922_b14b3ca85b_m.jpg'
    },
    dateTaken: '2018-01-17T13:14:16-08:00',
    description: '',
    published: '2018-01-17T19:21:46Z',
    author: 'nobody@flickr.com ("Yeagov_Cat")',
    authorIdd: '91044419@N08',
    tags:
      '2018 barcelona catalunya carrerferran carrerdeferran esgl\u00e9sia esgl\u00e9siadesantjaume santjaume parroquia parroquiadesantjaume 1394 g\u00f2tic esgl\u00e9siadelatrinitat call'
  }
];
```

Is converted to this format, easily accessible and iterable:

```javascript

const images = {
  byId: {
    39716233922: {
      id: '39716233922',
      src:
        'http://farm5.staticflickr.com/4606/39716233922_b14b3ca85b_m.jpg',
      title: 'ESGL\u00c9SIA DE SANT JAUME',
      link: 'http://www.flickr.com/photos/yeagovc/39716233922/'
    }
  },
  ids: ['39716233922']
};

```

## Redux
Redux is used in the application to handle the state and its different changes.

Explanation of redux:
> The whole state of your app is stored in an object tree inside a single store.
> The only way to change the state tree is to emit an action, an object describing what happened.
> To specify how the actions transform the state tree, you write pure reducers.

### Reducers
Those are the different reducers that transform the state:

* `categories`: to store the categories of the app.
* `current`: set the current category/section.
* `error`: says if an error ocurred fetchnig the API.
* `favourites`: save the current favourite images.
* `images`: store the images being showed in current section.
* `isLoading`: activated while the images are being fetched from the API.
* `showOnlyFavourites`: used to filter or not the images by favourites in a category.

### Actions
Actions emited to change the state:

* `toggleFavourite`: to change the `isFavourite` flag of one image.
* `toggleShowFavourites`: wether or not filter by favourites.
* `getCategoryImages`: This is a special action because it dispatchs multiple actions. This is achieved thanks to [react-thunk](https://github.com/gaearon/redux-thunk). So when this action is called, those actions can be called:
  - `selectCategory`: to set current category.
  - `fetchImagesRequest`: indicates that a new API request has started. Usefull to handle `isLoading` state.
  - `fetchImagesSuccess`: this actions is emited when the API fetch has finished.
  - `fetchImagesFailure`: triggered when there's an error fetching the API.
  - `showFavourites`: to show the favourites images saved in localStorage.

### Selectors
Selectors are useful to filter data from the state. They can compute derived data, allowing Redux to store the minimal possible state.

Selectors in the project:
* `getImages`: get the images to show in a category filtered by favourites or not depending on the global flag `showOnlyFavourites`.


## Persist data
The favourites you have in the app are always persisted in localStorage so that if the page is reloaded you keep your selection. To handle the data serialization the library [store.js](https://github.com/marcuswestin/store.js/) is used, this library  provides cross-browser storage for all use cases.

To connect the localStorage with the redux store a [middleware](https://redux.js.org/docs/advanced/Middleware.html) it's been used. This middlewares are executed whenever a new action is emited. So, when the action `TOGGLE_FAVOURITE` is triggered, the new favourites state is persisted to later recover them when the state is initialised.

```javascript

const persistedFavs = localStore.get('flickr-favs');
const initialState = { favourites: persistedFavs }  || {};
const middlewares = [saveFavourites];

const saveFavourites = store => next => action => {
  let result = next(action);

  if (action.type === 'TOGGLE_FAVOURITE') {
    localStore.set('flickr-favs', store.getState().favourites);
  }

  return result;
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

```
