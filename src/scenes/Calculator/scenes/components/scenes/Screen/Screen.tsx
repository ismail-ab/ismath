import * as React from 'react';
import { Typography } from '@material-ui/core';

interface IScreenOwnProps {
  concatenatedCharacters: string;
  result: number | string;
}

const Screen: React.SFC<IScreenOwnProps> = ({ concatenatedCharacters, result }) => (
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
);

export default Screen;