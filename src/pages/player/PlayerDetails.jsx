import React from 'react';
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
// ICONS
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { usePlayerStats, usePlayerStatsArray } from 'shared/hooks';
import { getOrdinals } from 'shared/utils';
import PlayerGraphs from './PlayerGraphs';

const PlayerDetails = ({ player, games }) => {
  const { name } = player[0];
  const { playersWithGames } = usePlayerStatsArray(player, games);
  const playerWithStats = playersWithGames[0];
  const {
    numberOfGamesPlayed,
    numberOfBuyIns,
    numberOfBuyBacks,
    arrOfFinalPositions,
    averageFinalPosition,
    bestFinish,
    worstFinish,
    numberOfBest,
    numberOfWorst,
  } = usePlayerStats(playerWithStats);
  const playedPercentage = ((numberOfGamesPlayed * 100) / games.length).toFixed(
    0
  );

  const printFinish = (type) => (
    <Typography variant='h6'>
      {type}
      <Typography component='span' variant='caption'>
        {getOrdinals(type)}
      </Typography>
    </Typography>
  );

  const printValue = (value) => <Typography variant='h6'>{value}</Typography>;

  const data = [
    {
      icon: <PlaylistPlayIcon />,
      primary: 'Games Played',
      value: printValue(numberOfGamesPlayed),
      secondary: `${playedPercentage}% of ${games.length} games`,
    },
    {
      icon: <EqualizerIcon />,
      primary: 'Average Finish',
      secondary: '',
      value: printValue(averageFinalPosition),
    },
    {
      icon: <MonetizationOnIcon />,
      primary: 'Buy Backs',
      value: printValue(numberOfBuyBacks),
      secondary: `${numberOfBuyIns} buy ins total`,
    },
    {
      icon: <ArrowUpwardIcon />,
      primary: 'Best Finish',
      value: printFinish(bestFinish),
      secondary: `x${numberOfBest}`,
    },
    {
      icon: <ArrowDownwardIcon />,
      primary: 'Worst Finish',
      value: printFinish(worstFinish),
      secondary: `x${numberOfWorst}`,
    },
  ];

  return numberOfGamesPlayed ? (
    <>
      <h1>{name}</h1>
      <Container maxWidth='sm'>
        <List dense>
          {data.map(({ primary, secondary, value, icon }, i) => (
            <ListItem key={primary + i}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={primary} secondary={secondary} />
              <ListItemSecondaryAction>{value}</ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
      <PlayerGraphs data={arrOfFinalPositions} games={games} />
    </>
  ) : (
    <Typography>No games played yet</Typography>
  );
};

export default PlayerDetails;
