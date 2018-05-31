import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Comma from './Comma';

describe('Comma', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Comma />);

    expect(wrapper).toMatchSnapshot();
  });
});
