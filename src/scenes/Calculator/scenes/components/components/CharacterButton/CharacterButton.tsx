import * as React from 'react';
import {
  Button,
  Grid
} from '@material-ui/core';

interface ICharacterButtonOwnProps {
  character: string;
  concatCharacters: Function;
}

const CharacterButton: React.SFC<ICharacterButtonOwnProps> = ({ character, concatCharacters }) => {
  const handleClick = (_character: string) => {
    concatCharacters(_character);
  };

  return (
    <Grid
      item={true}
      xs={4}
    >
      <Button
        color="primary"
        variant="raised"
        onClick={() => handleClick(character)}
      >
        {character}
      </Button>
    </Grid>
  );
};

export default CharacterButton;