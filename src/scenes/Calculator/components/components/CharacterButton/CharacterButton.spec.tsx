import { } from 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import { PropTypes } from '@material-ui/core';
import CharacterButton from './CharacterButton';

describe('CharacterButton', () => {
  it('renders correctly', () => {
    const color: PropTypes.Color = 'primary';
    const minProps = {
      characterToDisplay: '=',
      color
    };
    const wrapper = shallow(<CharacterButton {...minProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
