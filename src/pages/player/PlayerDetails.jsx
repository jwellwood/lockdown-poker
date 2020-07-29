import React from 'react';
// ICONS
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Typography, ListItem, ListItemText } from '@material-ui/core';
import { usePlayerStats, usePlayerStatsArray } from 'shared/hooks';
import { getOrdinals } from 'shared/utils';
import ListAvatar from 'components/avatars/ListAvatar.component';
import ListValueText from 'components/typography/ListValueText';
import PlayerGraphs from './PlayerGraphs';
import { ListContainer } from 'shared/layout';

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
    <>
      {type}
      <Typography component='span' variant='caption'>
        {getOrdinals(type)}
      </Typography>
    </>
  );

  const data = [
    {
      icon: <PlaylistPlayIcon />,
      primary: 'Games Played',
      value: numberOfGamesPlayed,
      secondary: `${playedPercentage}% of ${games.length} games`,
    },
    {
      icon: <EqualizerIcon />,
      primary: 'Average Finish',
      secondary: '',
      value: averageFinalPosition,
    },
    {
      icon: <MonetizationOnIcon />,
      primary: 'Buy Backs',
      value: numberOfBuyBacks,
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
      <Typography variant='h3' style={{ margin: '10px auto' }}>
        {name}
      </Typography>
      <ListContainer>
        {data.map(({ primary, secondary, value, icon }, i) => (
          <ListItem key={primary + i}>
            <ListAvatar>{icon}</ListAvatar>
            <ListItemText primary={primary} secondary={secondary} />
            <ListValueText>{value}</ListValueText>
          </ListItem>
        ))}
      </ListContainer>

      <PlayerGraphs data={arrOfFinalPositions} games={games} />
    </>
  ) : (
    <Typography>No games played yet</Typography>
  );
};

export default PlayerDetails;
