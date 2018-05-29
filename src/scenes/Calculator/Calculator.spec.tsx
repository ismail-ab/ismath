import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Calculator />);

    expect(wrapper).toMatchSnapshot();
  });
});
