import * as React from 'react';
import { CharacterButton } from '../../components';

interface IEqualOwnProps {
  computeConcatenatedCharacters: Function;
}

const Equal: React.SFC<IEqualOwnProps> = ({ computeConcatenatedCharacters }) => (
  <CharacterButton
    characterForCalculate="="
    characterToDisplay="="
    onClickAction={computeConcatenatedCharacters}
    color="secondary"
  />
);

export default Equal;