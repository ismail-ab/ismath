import * as React from 'react';
import { range } from 'lodash';
import { CharacterButton } from '../../components';

interface IDigitsOwnProps {
  concatenateCharacters: Function;
}

const Digits: React.SFC<IDigitsOwnProps> = ({ concatenateCharacters }) => {
  const digitsArray: number[] = range(10).reverse();

  const createDigitsButton = () => digitsArray.map(digit => (
    <CharacterButton
      key={digit}
      characterForCalculate={digit.toString()}
      characterToDisplay={digit.toString()}
      onClickAction={concatenateCharacters}
    />
  ));

  return (
    <>
      {createDigitsButton()}
    </>
  );
};

export default Digits;