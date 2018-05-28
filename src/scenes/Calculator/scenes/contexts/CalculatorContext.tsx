import * as React from 'react';

export interface ICalculatorContext {
  concatenatedCharacters: string;
  result: number | string;
  clearCalculator: Function;
  concatenateCharacters: Function;
}

export const CalculatorContext = React.createContext<ICalculatorContext>({
  concatenatedCharacters: '',
  result: '',
  clearCalculator: () => ({}),
  concatenateCharacters: () => ({}),
});