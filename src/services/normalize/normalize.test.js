import normalize from './normalize';

describe('normalize', () => {
  test('normalize the result', () => {
    const items = [
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
      },
      {
        title: 'ESGL\u00c9SIA DE SANT JAUME',
        link: 'http://www.flickr.com/photos/yeagovc/39747978051/',
        media: {
          m: 'http://farm5.staticflickr.com/4659/39747978051_7d0a1999a0_m.jpg'
        },
        dateTaken: '2018-01-17T13:14:08-08:00',
        description: '',
        published: '2018-01-17T19:21:45Z',
        author: 'nobody@flickr.com ("Yeagov_Cat")',
        authorId: '91044419@N08',
        tags:
          '2018 barcelona catalunya carrerferran carrerdeferran esgl\u00e9sia esgl\u00e9siadesantjaume santjaume parroquia parroquiadesantjaume 1394 g\u00f2tic esgl\u00e9siadelatrinitat call'
      }
    ];

    const expected = {
      byId: {
        39716233922: {
          id: '39716233922',
          src:
            'http://farm5.staticflickr.com/4606/39716233922_b14b3ca85b_m.jpg',
          title: 'ESGL\u00c9SIA DE SANT JAUME',
          link: 'http://www.flickr.com/photos/yeagovc/39716233922/',
          categoryId: 'cat'
        },
        39747978051: {
          id: '39747978051',
          src:
            'http://farm5.staticflickr.com/4659/39747978051_7d0a1999a0_m.jpg',
          title: 'ESGL\u00c9SIA DE SANT JAUME',
          link: 'http://www.flickr.com/photos/yeagovc/39747978051/',
          categoryId: 'cat'
        }
      },
      ids: ['39716233922', '39747978051']
    };

    expect(normalize(items, 'cat')).toEqual(expected);
  });
});
