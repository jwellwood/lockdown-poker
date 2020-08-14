import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useAuth } from 'shared/hooks';
import { PageContainer } from 'shared/layout';
import Spinner from 'components/spinners/Spinner.component';
import GamePlayerDetails from './GamePlayerDetails';
import GameDetails from './GameDetails';
import AuthLinkButton from 'components/buttons/AuthLinkButton';
import { Typography } from '@material-ui/core';

export default () => {
  const { id } = useParams();
  const { isAuth } = useAuth();
  useFirestoreConnect([
    {
      collection: 'games',
      doc: id,
    },
  ]);
  useFirestoreConnect('players');
  const game = useSelector(
    (state: RootStateOrAny) =>
      state.firestore.data.games && state.firestore.data.games[id]
  );
  const { players } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );

  return (
    <PageContainer hasBackButton title='Game Details'>
      {game ? (
        <>
          <AuthLinkButton to={`/games/edit/${id}`} isAuth={isAuth}>
            Edit Game
          </AuthLinkButton>

          <GameDetails game={game} />

          <Typography variant='h6'>Players</Typography>
          {players ? (
            <GamePlayerDetails game={game} players={players} />
          ) : (
            <Spinner />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
