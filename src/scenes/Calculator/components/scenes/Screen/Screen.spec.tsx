import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Screen from './Screen';

describe('Screen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Screen />);

    expect(wrapper).toMatchSnapshot();
  });
});
