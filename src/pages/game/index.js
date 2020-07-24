import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import GameDetails from './GameDetails';
import Spinner from '../../ui/spinners/Spinner.component';
import GamePlayerDetails from './GamePlayerDetails';
import LinkButton from '../../ui/buttons/LinkButton.component';
import PageContainer from '../../ui/layout/PageContainer';

const GamePage = () => {
  const { id } = useParams();
  useFirestoreConnect([
    {
      collection: 'games',
      doc: id,
    },
  ]);
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const game = useSelector(
    ({ firestore: { data } }) => data.games && data.games[id]
  );
  return (
    <PageContainer title='Game Details'>
      {game ? (
        <>
          {!isEmpty && isLoaded ? (
            <LinkButton to={`/games/edit/${id}`}>Edit Game</LinkButton>
          ) : null}
          <GameDetails game={game} id={id} />
          <GamePlayerDetails game={game} />
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};

export default GamePage;
