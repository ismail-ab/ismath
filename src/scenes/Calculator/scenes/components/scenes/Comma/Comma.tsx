import * as React from 'react';
import { CharacterButton } from '../../components';

interface ICommaOwnProps {
  concatenateCharacters: Function;
}

const Clear: React.SFC<ICommaOwnProps> = ({ concatenateCharacters }) => (
  <CharacterButton
    characterForCalculate="."
    characterToDisplay="."
    onClickAction={concatenateCharacters}
    color="primary"
  />
);

export default Clear;