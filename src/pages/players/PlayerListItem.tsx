import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { usePlayerStats } from 'shared/hooks';
import { getOrdinals } from 'shared/utils/functions';
import ListAvatar from 'components/avatars/ListAvatar.component';
import ListValueText from 'components/typography/ListValueText';
import { IPlayerWithStats } from 'types';

interface Props {
  player: IPlayerWithStats;
  index: number;
}

const useStyles = makeStyles((theme) => ({
  highlightedText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

const PlayerListItem: React.FC<Props> = ({ player, index }) => {
  const classes = useStyles();
  const {
    numberOfGamesPlayed,
    numberOfBuyBacks,
    averageFinalPosition,
  } = usePlayerStats(player);

  const position = isNaN(averageFinalPosition as any)
    ? null
    : averageFinalPosition;

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
      <ListValueText>{position}</ListValueText>
    </ListItem>
  );
};

export default PlayerListItem;
