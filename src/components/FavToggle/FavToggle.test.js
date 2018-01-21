import React from 'react';
import { shallow } from 'enzyme';
import { FavToggle } from './FavToggle';

describe('<FavToggle />', () => {
  const toggleShowFavourites = jest.fn();

  test('FavToggle calls toggleShowFavourites on click', () => {
    const wrapper = shallow(
      <FavToggle
        toggleShowFavourites={toggleShowFavourites}
        showOnlyFavourites={false}
      />
    );

    wrapper.simulate('click');
    expect(toggleShowFavourites).toHaveBeenCalled();
  });

  test('the class `is-active` is added if showOnlyFavourites is enabled', () => {
    const toggleShowFavourites = jest.fn();
    const wrapper = shallow(
      <FavToggle
        toggleShowFavourites={toggleShowFavourites}
        showOnlyFavourites={true}
      />
    );

    expect(wrapper.find('.is-active')).toHaveLength(1);
  });
});
