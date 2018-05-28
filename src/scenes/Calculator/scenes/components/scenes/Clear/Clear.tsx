import * as React from 'react';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { CalculatorContext } from '../../../Calculator/Calculator';

const Clear: React.SFC = () => (
  <CalculatorContext.Consumer>
    {({ clearCalculator }) => (
      <Button
        variant="fab"
        color="secondary"
        mini
        onClick={() => clearCalculator()}
      >
        <Delete />
      </Button>
    )}
  </CalculatorContext.Consumer>
);

export default Clear;