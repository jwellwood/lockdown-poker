import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteConfirmation from 'components/dialogs/DeleteConfirmation';
import { useHistory } from 'react-router-dom';
import { GAMES } from 'router';
import { useFirestore } from 'react-redux-firebase';
import { getNameFromId } from 'shared/utils';
import { IGameParticipant } from 'shared/utils/customTypes';

interface Props {
  player: IGameParticipant;
  players: IGameParticipant[];
  game: string;
}

const GamePlayerRow: React.FC<Props> = ({ player, players, game }) => {
  const fireStore = useFirestore();
  const history = useHistory();
  const { buyIns, finalPosition } = player;

  const buyBacks = +buyIns - 1;

  const gamePlayerRef = fireStore.collection('games').doc(game);

  const onRemovePlayer = () => {
    gamePlayerRef.update({
      participants: fireStore.FieldValue.arrayRemove({ ...player }),
    });
    history.push(GAMES);
  };

  const name = getNameFromId(players, player);

  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {name}
      </TableCell>
      <TableCell align='right'>{buyBacks}</TableCell>
      <TableCell align='right'>{finalPosition}</TableCell>

      <TableCell align='right'>
        <DeleteConfirmation onDelete={onRemovePlayer} type='Player' />
      </TableCell>
    </TableRow>
  );
};

export default GamePlayerRow;
