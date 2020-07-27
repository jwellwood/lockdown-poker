import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import { usePlayerStats, usePlayerStatsArray } from 'shared/hooks';

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
  const positionList = arrOfFinalPositions.map((item) => `${item}, `);

  const data = [
    {
      text: 'Games Played',
      primary: numberOfGamesPlayed,
      secondary: `${playedPercentage}% of ${games.length} games`,
    },

    {
      text: 'Buy Backs',
      primary: numberOfBuyBacks,
      secondary: `${numberOfBuyIns} buy ins total`,
    },
    { text: 'Average Finish', primary: averageFinalPosition },
    //TODO These in graph/chart form
    { text: 'List of Finishes', primary: positionList },
    { text: 'Best Finish', primary: bestFinish, secondary: `x${numberOfBest}` },
    {
      text: 'Worst Finish',
      primary: worstFinish,
      secondary: `x${numberOfWorst}`,
    },
  ];

  return (
    <>
      <h1>{name}</h1>
      <Grid container justify='space-around' spacing={2}>
        {data.map(({ text, primary, secondary }, i) => (
          <Grid item xs={6} sm={4} key={text + i}>
            <Card key={text + i} style={{ margin: '5px', height: '100%' }}>
              <Typography>{text}</Typography>
              <Typography variant='h5'>{primary}</Typography>
              <Typography>{secondary}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PlayerDetails;
