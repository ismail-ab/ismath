import * as React from 'react';
import { range } from 'lodash';
import { CharacterButton } from '../../components';

const Digits: React.SFC = () => {
  const digitsArray: number[] = range(10).reverse();

  const createDigitsButtons = () => digitsArray.map(digit => (
    <CharacterButton
      key={digit}
      characterToDisplay={digit.toString()}
    />
  ));

  return (
    <>
      {createDigitsButtons()}
    </>
  );
};

export default Digits;