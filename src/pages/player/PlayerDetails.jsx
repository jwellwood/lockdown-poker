import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { usePlayerStats, usePlayerStatsArray } from 'shared/hooks';

const PlayerDetails = ({ player, games }) => {
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
  } = usePlayerStats(playerWithStats);
  const playedPercentage = ((numberOfGamesPlayed * 100) / games.length).toFixed(
    2
  );
  const positionList = arrOfFinalPositions.map((item) => `${item} ,`);

  const data = [
    { text: 'Games Played', value: numberOfGamesPlayed },
    { text: 'Played %', value: playedPercentage },
    { text: 'Buy ins', value: numberOfBuyIns },
    { text: 'Buy Backs', value: numberOfBuyBacks },
    { text: 'Average Finish', value: averageFinalPosition },
    { text: 'List of Finishes', value: positionList },
    { text: 'Best Finish', value: bestFinish },
    { text: 'Worst Finish', value: worstFinish },
  ];

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.text}>
          <ListItemText primary={item.text} secondary={item.value} />
        </ListItem>
      ))}
    </List>
  );
};

export default PlayerDetails;
