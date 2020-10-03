import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector, RootStateOrAny } from 'react-redux';
import { ADD_PLAYER } from 'router';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';
import Spinner from 'components/spinners/Spinner.component';
import AuthLinkButton from 'components/buttons/AuthLinkButton';
import PlayersList from './PlayersList';

export default () => {
  const { isAuth } = useAuth();

  useFirestoreConnect('players');
  useFirestoreConnect('games');

  const { players } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );
  const { games } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );
  return (
    <PageContainer title='Player Rankings'>
      <AuthLinkButton to={ADD_PLAYER} isAuth={isAuth}>
        Add Player
      </AuthLinkButton>

      {games && players ? (
        <PlayersList players={players} games={games} />
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
