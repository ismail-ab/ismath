import * as React from 'react';
import { Calculator } from './scenes';
import {
  MuiThemeProvider,
  createMuiTheme,
  colors
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.blueGrey[800] },
    secondary: { main: colors.lightGreen[700] }
  },
});

const App: React.SFC = () => (
  <MuiThemeProvider theme={theme}>
    <Calculator />
  </MuiThemeProvider>
);

export default App;
