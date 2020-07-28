import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { usePlayerStats } from 'shared/hooks';
import ListAvatar from 'components/avatars/ListAvatar.component';
import { getOrdinals } from 'shared/utils';

const useStyles = makeStyles((theme) => ({
  highlightedText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

const PlayerListItem = ({ player, index }) => {
  const classes = useStyles();
  const {
    numberOfGamesPlayed,
    numberOfBuyBacks,
    averageFinalPosition,
  } = usePlayerStats(player);

  const secondaryText = (
    <>
      <Typography variant='caption'>PL: </Typography>
      <Typography component='span' className={classes.highlightedText}>
        {numberOfGamesPlayed}{' '}
      </Typography>
      |<Typography variant='caption'> BB: </Typography>
      <Typography component='span' className={classes.highlightedText}>
        {numberOfBuyBacks}
      </Typography>
    </>
  );

  const valueText = (
    <>
      <Typography variant='caption'>AVG </Typography>
      <Typography component='span' variant='h6'>
        {averageFinalPosition}
      </Typography>
    </>
  );

  return (
    <ListItem
      key={player.id}
      button
      component={Link}
      to={`/players/${player.id}`}
    >
      <ListAvatar>
        {index + 1}
        <Typography variant='caption'>{getOrdinals(index + 1)}</Typography>
      </ListAvatar>
      <ListItemText primary={player.name} secondary={secondaryText} />
      <ListItemSecondaryAction>{valueText}</ListItemSecondaryAction>
    </ListItem>
  );
};

export default PlayerListItem;
