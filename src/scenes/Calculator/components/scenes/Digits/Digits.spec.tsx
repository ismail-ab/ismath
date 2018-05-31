import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Digits from './Digits';

describe('Digits', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Digits />);

    expect(wrapper).toMatchSnapshot();
  });
});
