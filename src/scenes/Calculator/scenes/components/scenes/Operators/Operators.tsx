import * as React from 'react';
import { CharacterButton } from '../../components';

interface IOperator {
  operatorForCalculate: string;
  operatorToDisplay: string;
}

const Operators: React.SFC = () => {
  const operatorsArray: IOperator[] = [
    {
      operatorForCalculate: '+',
      operatorToDisplay: '+'
    },
    {
      operatorForCalculate: '-',
      operatorToDisplay: '−'
    },
    {
      operatorForCalculate: '*',
      operatorToDisplay: '×'
    },
    {
      operatorForCalculate: '/',
      operatorToDisplay: '÷'
    }
  ];

  const createOperatorsButton = () => operatorsArray.map(operator => (
    <CharacterButton
      key={operator.operatorForCalculate}
      characterForCalculate={operator.operatorForCalculate}
      characterToDisplay={operator.operatorToDisplay}
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