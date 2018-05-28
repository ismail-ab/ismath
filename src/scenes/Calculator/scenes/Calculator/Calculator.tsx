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
} from '../components';

interface ICalculatorContainerState {
  concatenatedCharacters: string;
  result: number | string;
}

class Calculator extends React.Component<{}, ICalculatorContainerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      concatenatedCharacters: '',
      result: ''
    };

    this.clearCalculator = this.clearCalculator.bind(this);
    this.concatenateCharacters = this.concatenateCharacters.bind(this);
    this.computeConcatenatedCharacters = this.computeConcatenatedCharacters.bind(this);
  }

  clearCalculator() {
    this.setState({
      concatenatedCharacters: '',
      result: ''
    });
  }

  concatenateCharacters(character: string) {
    this.setState((prevState) => {
      return {
        ...prevState,
        concatenatedCharacters: prevState.concatenatedCharacters + character,
      };
    });
  }

  computeConcatenatedCharacters() {
    function evaluate(_concatenatedCharacters: string) {
      try {
        return new Function('return ' + _concatenatedCharacters)();
      } catch {
        return 'Expression error';
      }
    }

    this.setState({
      result: evaluate(this.state.concatenatedCharacters)
    });
  }

  render() {
    return (
      <Grid
        container={true}
        direction="column"
        justify="center"
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
      >
        <Grid
          container={true}
          justify="center"
        >
          <Card style={{ width: '348px' }}>
            <CardContent>
              <Screen {...this.state} />
              <Clear clearCalculator={this.clearCalculator} />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container={true}
          direction="row-reverse"
          justify="center"
        >
          <Grid>
            <Operators concatenateCharacters={this.concatenateCharacters} />
          </Grid>
          <Grid
            container={true}
            justify="center"
            alignItems="center"
            direction="row-reverse"
            spacing={0}
            style={{ width: '260px' }}
          >
            <Digits concatenateCharacters={this.concatenateCharacters} />
            <Comma concatenateCharacters={this.concatenateCharacters} />
            <Equal computeConcatenatedCharacters={this.computeConcatenatedCharacters} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Calculator;
