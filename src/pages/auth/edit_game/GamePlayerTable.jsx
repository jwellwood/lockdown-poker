import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from 'components/spinners/Spinner.component';
import { useParams } from 'react-router-dom';
import { FormContainer } from 'shared/layout';
import GamePlayerRow from './GamePlayerRow';
import { useAuth } from 'shared/hooks/useAuth';
import AuthLinkButton from 'components/buttons/AuthLinkButton';

const GamePlayerTable = ({ players, playerData }) => {
  const { id } = useParams();
  const { isAuth } = useAuth();

  return (
    <FormContainer>
      <AuthLinkButton to={`/games/${id}/add_player`} isAuth={isAuth}>
        Add Player To Game
      </AuthLinkButton>
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
                  players={playerData}
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
