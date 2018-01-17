import React from 'react';
import { NavItem } from './NavItem';
import { shallow } from 'enzyme';

describe('<NavItem>', () => {
  test('NavItem is selected is current category is the same id', () => {
    const props = {
      id: 'ID',
      currentId: 'ID',
      name: 'cat',
      onClickNavItem: () => {},
      tags: 'tag'
    };

    const wrapper = shallow(<NavItem {...props} />);

    expect(wrapper.find('.is-active')).toHaveLength(1);
  });
});
