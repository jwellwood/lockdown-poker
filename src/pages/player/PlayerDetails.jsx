import React from 'react';
import { Grid, Card, Typography, Container } from '@material-ui/core';
import { usePlayerStats, usePlayerStatsArray } from 'shared/hooks';
import PlayerGraphs from './PlayerGraphs';
import PlayerPieChart from './PlayerPieChart';
import { getOrdinals } from 'shared/utils/getOrdinals';

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

    {
      text: 'Best Finish',
      primary: `${bestFinish}${getOrdinals(bestFinish)}`,
      secondary: `x${numberOfBest}`,
    },
    {
      text: 'Worst Finish',
      primary: `${worstFinish}${getOrdinals(worstFinish)}`,
      secondary: `x${numberOfWorst}`,
    },
  ];

  return numberOfGamesPlayed ? (
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
        <Container maxWidth='md'>
          <Grid
            container
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item xs={12} sm={6}>
              <PlayerPieChart positionArray={arrOfFinalPositions} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PlayerGraphs
                data={arrOfFinalPositions.reverse()}
                games={games}
              />
              {/* reverse so the data shows games left to right */}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  ) : (
    <Typography>No games played yet</Typography>
  );
};

export default PlayerDetails;
