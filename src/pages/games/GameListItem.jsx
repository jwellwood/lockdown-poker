import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { parseDate } from 'shared/utils';
import ListAvatar from 'components/avatars/ListAvatar.component';
import ListValueText from 'components/typography/ListValueText';

const useStyles = makeStyles((theme) => ({
  highlightedText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));
const GameListItem = ({ game, index }) => {
  const classes = useStyles();
  const { buyIn, participants } = game;
  const secondaryText = (
    <>
      <Typography variant='caption'>PLAYERS: </Typography>
      <Typography component='span' className={classes.highlightedText}>
        {game.participants && game.participants.length}{' '}
      </Typography>
      |{' '}
      <Typography component='span' className={classes.highlightedText}>
        {`€${game.buyIn}`}
      </Typography>
    </>
  );

  const totalBuyIns = participants
    .map((player) => player.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);

  // TODO write an algorithm to calc these properly
  const totalCash = totalBuyIns * buyIn;

  return (
    <ListItem key={game.id} button component={Link} to={`/games/${game.id}`}>
      <ListAvatar>{index + 1}</ListAvatar>
      <ListItemText primary={parseDate(game.date)} secondary={secondaryText} />
      <ListValueText>{`€${totalCash}`}</ListValueText>
    </ListItem>
  );
};

export default GameListItem;
