import * as React from 'react';
import { range } from 'lodash';
import { CharacterButton } from '../../components';

interface IDigitsOwnProps {
  concatCharacters: Function;
}

const Digits: React.SFC<IDigitsOwnProps> = ({ concatCharacters }) => {
  const digitsArray = range(10).reverse();

  const createDigitsButton = () => digitsArray.map(digit => (
    <CharacterButton
      key={digit}
      character={digit.toString()}
      concatCharacters={concatCharacters}
    />
  ));

  return (
    <>
      {createDigitsButton()}
    </>
  );
};

export default Digits;