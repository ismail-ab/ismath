import * as React from 'react';
import {
  Button,
  Grid,
  PropTypes
} from '@material-ui/core';
import { CalculatorContext } from '../../../contexts';

interface ICharacterButtonOwnProps {
  characterToDisplay: string;
  color?: PropTypes.Color;
}

const CharacterButton: React.SFC<ICharacterButtonOwnProps> = (props) => {
  const {
    characterToDisplay,
    color = 'primary'
  } = props;

  const handleClick = (concatenateCharacters: Function, _character: string) => {
    concatenateCharacters(_character);
  };

  return (
    <CalculatorContext.Consumer>
      {({ concatenateCharacters }) => (
        <Grid
          item={true}
          xs={4}
        >
          <Button
            color={color}
            variant="raised"
            onClick={() => handleClick(concatenateCharacters, characterToDisplay)}
            style={{
              height: '4em',
              borderRadius: '0',
              fontSize: '1.2em'
            }}
          >
            {characterToDisplay}
          </Button>
        </Grid>
      )}
    </CalculatorContext.Consumer>
  );
};

export default CharacterButton;