import * as React from 'react';
import { CharacterButton } from '../../components';
import { CalculatorContext } from '../../../Calculator/Calculator';

const Comma: React.SFC = () => (
  <CalculatorContext.Consumer>
    {({ concatenateCharacters }) => (
      <CharacterButton
        characterToDisplay="."
        color="primary"
      />
    )}
  </CalculatorContext.Consumer>
);

export default Comma;