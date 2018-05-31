import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Operators from './Operators';

describe('Operators', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Operators />);

    expect(wrapper).toMatchSnapshot();
  });
});
