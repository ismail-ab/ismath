import * as React from 'react';
import { Typography } from '@material-ui/core';
import { CalculatorContext } from '../../../contexts';

const Screen: React.SFC = () => (
  <CalculatorContext.Consumer>
    {({ concatenatedCharacters, result }) => (
      <>
        <Typography
          color="primary"
          variant="headline"
          component="h2"
          align="right"
          style={{ height: '40px' }}
        >
          {result}
        </Typography>
        <Typography
          color="secondary"
          component="h2"
          align="right"
          noWrap={true}
          style={{
            height: '25px',
            fontSize: '1.2em'
          }}
        >
          {concatenatedCharacters}
        </Typography>
      </>
    )}
  </CalculatorContext.Consumer>
);

export default Screen;