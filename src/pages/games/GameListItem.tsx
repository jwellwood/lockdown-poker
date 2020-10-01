import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { parseDate } from 'shared/utils/functions';
import ListAvatar from 'components/avatars/ListAvatar.component';
import ListValueText from 'components/typography/ListValueText';
import { IGame } from 'types';

interface Props {
  game: IGame;
  index: number;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    highlightedText: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  })
);
const GameListItem: React.FC<Props> = ({ game, index }) => {
  const classes = useStyles();
  const { buyIn, participants } = game;
  const secondaryText = (
    <>
      <Typography variant='caption'>PLAYERS: </Typography>
      <Typography component='span' className={classes.highlightedText}>
        {game.participants && game.participants.length}{' '}
      </Typography>{' '}
      <Typography component='span' className={classes.highlightedText}>
        {`€${game.buyIn}`}
      </Typography>
    </>
  );

  const totalBuyIns = participants
    .map((player) => player.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);

  // TODO write an algorithm to calc these properly
  const totalCash = totalBuyIns * +buyIn;

  return (
    <ListItem key={game.id} button component={Link} to={`/games/${game.id}`}>
      <ListAvatar>{index + 1}</ListAvatar>
      <ListItemText primary={parseDate(game.date)} secondary={secondaryText} />
      <ListValueText>{`€${totalCash}`}</ListValueText>
    </ListItem>
  );
};

export default GameListItem;
