import {
  Button,
  Grid
} from "@material-ui/core";
import { range } from 'lodash';
import * as React from "react";

interface ICalculatorContainer {
  calculatorButtons: Array<string | number>;
  characterToCalculate: string;
  result: number;
}

class CalculatorContainer extends React.Component<{}, ICalculatorContainer> {
  constructor(props: {}) {
    super(props);

    this.state = {
      calculatorButtons: [...range(10).reverse(), '+', '−', '*', '/', '.', 'C', '🐵'],
      characterToCalculate: '',
      result: 0
    }

    this.calculate = this.calculate.bind(this);
  }

  public componentDidCatch() {
    alert('Error');
  }

  public res(str: string) {
    function calc(strr: string) {
      try {
        return new Function('return ' + strr)()
      } catch {
        return 0;
      }
    }

    this.setState({
      result: calc(str)
    });
  }

  public calculate(char: string | number) {
    this.setState((prevState) => {
      return {
        characterToCalculate: prevState.characterToCalculate + char.toString(),
      }
    });
  }

  public render() {
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
          {
            this.state.calculatorButtons.map(value => (
              <Grid
                item={true}
                key={value}
                xs={4}
              >
                <Button
                  color="primary"
                  variant="raised"
                  onClick={this.calculate.bind(this, value)}
                >
                  {value}
                </Button>
              </Grid>
            ))
          }

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
    )
  }
};

export default CalculatorContainer;
