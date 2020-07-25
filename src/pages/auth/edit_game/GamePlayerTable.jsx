import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from 'components/spinners/Spinner.component';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LinkButton from 'components/buttons/LinkButton.component';
import FormContainer from 'shared/layout/FormContainer';
import GamePlayerRow from './GamePlayerRow';

const GamePlayerTable = ({ players, game }) => {
  const { id } = useParams();
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);

  return (
    <FormContainer>
      {!isEmpty && isLoaded ? (
        <LinkButton to={`/games/${id}/add_player`}>
          Add Player To Game
        </LinkButton>
      ) : null}
      {players ? (
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Buy-backs</TableCell>
                <TableCell align='right'>Position</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player, i) => (
                <GamePlayerRow
                  key={`${player.id}-${i}`}
                  player={player}
                  game={id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Spinner />
      )}
    </FormContainer>
  );
};

export default GamePlayerTable;
