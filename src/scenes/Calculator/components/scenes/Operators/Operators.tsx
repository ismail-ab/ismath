import * as React from 'react';
import { CharacterButton } from '../../components';

const Operators: React.SFC = () => {
  const operators: string[] = ['+', '−', '×', '÷'];

  const createOperatorsButton = () => operators.map(operator => (
    <CharacterButton
      key={operator}
      characterToDisplay={operator}
      color="secondary"
    />
  ));

  return (
    <>
      {createOperatorsButton()}
    </>
  );
};

export default Operators;