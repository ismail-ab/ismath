import * as React from 'react';
import {
  Button,
  Grid,
  PropTypes
} from '@material-ui/core';

interface ICharacterButtonOwnProps {
  characterForCalculate: string;
  characterToDisplay: string;
  onClickAction: Function;
  color?: PropTypes.Color;
}

const CharacterButton: React.SFC<ICharacterButtonOwnProps> = (props) => {
  const {
    characterForCalculate,
    characterToDisplay,
    onClickAction,
    color = 'primary'
  } = props;

  const handleClick = (_character: string) => {
    onClickAction(_character);
  };

  return (
    <Grid
      item={true}
      xs={4}
    >
      <Button
        color={color}
        variant="raised"
        onClick={() => handleClick(characterForCalculate)}
        style={{ 
          height: '4em',
          borderRadius: '0',
          fontSize: '1.2em'
        }}
      >
        {characterToDisplay}
      </Button>
    </Grid>
  );
};

export default CharacterButton;