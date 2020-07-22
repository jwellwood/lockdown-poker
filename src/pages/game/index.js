import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import GameDetails from './GameDetails';
import Spinner from '../../ui/spinners/Spinner.component';
import GamePlayerDetails from './GamePlayerDetails';

const GamePage = () => {
  const { id } = useParams();
  useFirestoreConnect([
    {
      collection: 'games',
      doc: id,
    },
  ]);
  const game = useSelector(
    ({ firestore: { data } }) => data.games && data.games[id]
  );
  return game ? (
    <div>
      <GameDetails game={game} id={id} />
      <GamePlayerDetails game={game} />
    </div>
  ) : (
    <Spinner />
  );
};

export default GamePage;
