import * as React from 'react';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

interface IClearOwnProps {
  clearCalculator: Function;
}

const Clear: React.SFC<IClearOwnProps> = ({ clearCalculator }) => (
  <Button
    variant="fab"
    color="secondary"
    mini
    onClick={() => clearCalculator()}
  >
    <Delete />
  </Button>
);

export default Clear;