import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import GameDetails from './GameDetails';
import Spinner from 'components/spinners/Spinner.component';
import GamePlayerDetails from './GamePlayerDetails';
import LinkButton from 'components/buttons/LinkButton.component';
import PageContainer from 'shared/layout/PageContainer';
import { useAuth } from 'shared/hooks/useAuth';

const GamePage = () => {
  const { id } = useParams();
  const { isAuth } = useAuth();
  useFirestoreConnect([
    {
      collection: 'games',
      doc: id,
    },
  ]);
  const game = useSelector(
    ({ firestore: { data } }) => data.games && data.games[id]
  );
  return (
    <PageContainer title='Game Details'>
      {game ? (
        <>
          {isAuth ? (
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
