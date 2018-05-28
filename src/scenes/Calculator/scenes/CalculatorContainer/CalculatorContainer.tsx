import * as React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import {
  Clear,
  Comma,
  Digits,
  Equal,
  Operators
} from '../components';

interface ICalculatorContainerState {
  concatenatedCharacters: string;
  result: number | string;
}

class CalculatorContainer extends React.Component<{}, ICalculatorContainerState> {
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
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'absolute',
        }}
      >
        <Grid
          container={true}
          direction="column"
          justify="center"
        >
          <Grid
            container={true}
            justify="center"
          >
            <Card style={{ width: '348px' }}>
              <CardContent>
                <Typography
                  color="primary"
                  variant="headline"
                  component="h2"
                  align="right"
                  style={{ height: '40px' }}
                >
                  {this.state.result}
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
                  {this.state.concatenatedCharacters}
                </Typography>
                <Clear clearCalculator={this.clearCalculator} />
              </CardContent>
            </Card>
          </Grid>
          <Grid
            container={true}
            direction="row-reverse"
            justify="center"
          >
            <Operators concatenateCharacters={this.concatenateCharacters} />
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
      </div >
    );
  }
}

export default CalculatorContainer;
