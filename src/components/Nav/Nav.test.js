import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';
import NavItem from './NavItem';

describe('<Nav />', () => {
  test('renders a <NavItem /> with each category', () => {
    const categories = [
      {
        name: 'Category 1',
        id: 'cat1',
        tags: 'cat1'
      },
      {
        name: 'Category 2',
        id: 'cat2',
        tags: 'cat2'
      }
    ];

    const wrapper = shallow(<Nav categories={categories} />);

    expect(wrapper.find(NavItem)).toHaveLength(2);
  });
});
