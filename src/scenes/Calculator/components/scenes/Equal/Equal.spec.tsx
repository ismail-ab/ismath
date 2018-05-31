import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Equal from './Equal';

describe('Equal', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Equal />);

    expect(wrapper).toMatchSnapshot();
  });
});
