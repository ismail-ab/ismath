import * as React from 'react';
import {
  Card,
  CardContent,
  Grid
} from '@material-ui/core';
import {
  Clear,
  Comma,
  Digits,
  Equal,
  Operators,
  Screen
} from './components';
import { compute } from './helpers';
import {
  CalculatorContext,
  ICalculatorContext
} from './contexts';

interface ICalculatorState extends ICalculatorContext { }

class Calculator extends React.Component<{}, ICalculatorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      concatenatedCharacters: '',
      result: '',
      clearCalculator: this.clearCalculator.bind(this),
      concatenateCharactersOrCompute: this.concatenateCharactersOrCompute.bind(this),
    };
  }

  clearCalculator() {
    this.setState({
      concatenatedCharacters: '',
      result: ''
    });
  }

  concatenateCharactersOrCompute(character: string) {
    this.setState((prevState) => {
      if (character !== '=') {
        return {
          ...prevState,
          concatenatedCharacters: prevState.concatenatedCharacters + character,
        };
      } else {
        return {
          ...prevState,
          result: compute(this.state.concatenatedCharacters)
        };
      }
    });
  }

  render() {
    return (
      <CalculatorContext.Provider value={this.state}>
        <Grid
          container={true}
          direction="column"
          justify="center"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute'
          }}
        >
          <Grid
            container={true}
            justify="center"
          >
            <Card style={{ width: '348px' }}>
              <CardContent>
                <Screen />
                <Clear />
              </CardContent>
            </Card>
          </Grid>
          <Grid
            container={true}
            direction="row-reverse"
            justify="center"
          >
            <Grid>
              <Operators />
            </Grid>
            <Grid
              container={true}
              justify="center"
              alignItems="center"
              direction="row-reverse"
              spacing={0}
              style={{ width: '260px' }}
            >
              <Digits />
              <Comma />
              <Equal />
            </Grid>
          </Grid>
        </Grid>
      </CalculatorContext.Provider>
    );
  }
}

export default Calculator;
