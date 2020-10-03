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
import { IGame, IPlayerWithStats } from 'types';

interface Props {
  player: IPlayerWithStats;
  index: number;
  games: IGame[];
}

const useStyles = makeStyles((theme) => ({
  highlightedText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#1565c0',
    fontWeight: 'bold',
  },
  avgText: {
    color: '#00838f',
    fontWeight: 'bold',
  },
}));

const PlayerListItem: React.FC<Props> = ({ player, games, index }) => {
  const classes = useStyles();
  const {
    numberOfGamesPlayed,
    numberOfBuyBacks,
    averageFinalPosition,
    ranking,
  } = usePlayerStats(player);

  const position = isNaN(ranking as any) ? null : ranking?.toFixed(3);

  const secondaryText = (
    <span>
      <Typography variant='caption' className={classes.highlightedText}>
        {numberOfGamesPlayed}
      </Typography>{' '}
      |{' '}
      <Typography variant='caption' className={classes.blueText}>
        {numberOfBuyBacks}
      </Typography>{' '}
      |{' '}
      <Typography variant='caption' className={classes.avgText}>
        {+averageFinalPosition || '-'}
      </Typography>
    </span>
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
