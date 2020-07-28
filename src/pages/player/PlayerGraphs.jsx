import React from 'react';
import { Paper, Container, Grid } from '@material-ui/core';
import PlayerPieChart from './PlayerPieChart';
import PlayerLinGraph from './PlayerLineGraph';

const PlayerGraphs = ({ data, games }) => {
  return (
    <Container maxWidth='md'>
      <Paper>
        <Grid
          container
          justify='center'
          alignContent='center'
          alignItems='center'
        >
          <Grid item xs={12} sm={6}>
            <PlayerPieChart positionArray={data} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PlayerLinGraph data={data.reverse()} games={games} />
            {/* reverse so the data shows games left to right */}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PlayerGraphs;
