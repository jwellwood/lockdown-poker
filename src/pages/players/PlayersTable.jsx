import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlayerTableRow from './PlayerTableRow';
import Spinner from '../../ui/spinners/Spinner.component';

const PlayersTable = ({ players, games }) => {
  return players ? (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Played</TableCell>
            <TableCell align='right'>Buy backs</TableCell>
            <TableCell align='right'>Avg Finish</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, i) => (
            <PlayerTableRow
              key={player.id}
              player={player}
              games={games}
              index={i}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Spinner />
  );
};

export default PlayersTable;
