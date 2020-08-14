import React from 'react';
import { Paper, Container, Grid } from '@material-ui/core';
import PlayerPieChart from './PlayerPieChart';
import PlayerLineGraph from './PlayerLineGraph';

interface Props {
  arrOfFinalPositions: number[];
}

const PlayerGraphs: React.FC<Props> = ({ arrOfFinalPositions }) => {
  return (
    <Container maxWidth='md'>
      <Paper>
        <Grid
          container
          justify='center'
          alignContent='center'
          alignItems='center'>
          <Grid item xs={12} sm={6}>
            <PlayerPieChart positionArray={arrOfFinalPositions} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PlayerLineGraph
              arrOfFinalPositions={arrOfFinalPositions.reverse()}
            />
            {/* reverse so the data shows games left to right */}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PlayerGraphs;
