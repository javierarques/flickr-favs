import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';
import GalleryItem from '../GalleryItem';

describe('<Gallery />', () => {
  test('render one <GalleryItem /> per image', () => {
    const images = [
      { title: 'Image 1', id: 'id1', isFavourite: true },
      { title: 'Image 2', id: 'id2', isFavourite: false }
    ];

    const wrapper = shallow(<Gallery images={images} />);

    expect(wrapper.find(GalleryItem)).toHaveLength(2);
  });
});
