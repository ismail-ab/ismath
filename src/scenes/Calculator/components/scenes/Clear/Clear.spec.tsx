import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Clear from './Clear';

describe('Clear', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Clear />);

    expect(wrapper).toMatchSnapshot();
  });
});
