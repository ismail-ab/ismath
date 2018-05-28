import * as React from 'react';
import {
  Button,
  Grid
} from '@material-ui/core';
import { Digits } from '../components';

interface ICalculatorContainerState {
  calculatorButtons: Array<string | number>;
  characterToCalculate: string;
  result: number;
}

class CalculatorContainer extends React.Component<{}, ICalculatorContainerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      calculatorButtons: ['+', '−', '*', '/', '.', 'C', '🐵'],
      characterToCalculate: '',
      result: 0
    };

    this.concatCharacters = this.concatCharacters.bind(this);
  }

  res(str: string) {
    function calc(strr: string) {
      try {
        return new Function('return ' + strr)();
      } catch {
        return 0;
      }
    }

    this.setState({
      result: calc(str)
    });
  }

  concatCharacters(character: string) {
    this.setState((prevState) => {
      return {
        ...prevState,
        characterToCalculate: prevState.characterToCalculate + character,
      };
    });
  }

  render() {
    return (
      <div>
        <div>Res: {this.state.result}</div>
        <div>Formula: {this.state.characterToCalculate}</div>
        <Grid
          container={true}
          justify="center"
          alignItems="center"
          direction="row-reverse"
          spacing={0}
          style={{ width: '250px' }}
        >
          <Digits concatCharacters={this.concatCharacters} />

          <Grid
            item={true}
            xs={4}
          >
            <Button
              color="primary"
              variant="raised"
              onClick={this.res.bind(this, this.state.characterToCalculate)}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default CalculatorContainer;
