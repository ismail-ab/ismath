import * as React from 'react';
import { CharacterButton } from '../../components';
import { Grid } from '@material-ui/core';

interface IOperatorsOwnProps {
  concatenateCharacters: Function;
}

interface IOperator {
  operatorForCalculate: string;
  operatorToDisplay: string;
}

const Operators: React.SFC<IOperatorsOwnProps> = ({ concatenateCharacters }) => {
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
      onClickAction={concatenateCharacters}
      color="secondary"
    />
  ));

  return (
    <Grid>
      {createOperatorsButton()}
    </Grid>
  );
};

export default Operators;