import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import LinkButton from 'components/buttons/LinkButton.component';
import { ADD_PLAYER } from 'router';
import { PageContainer } from 'shared/layout';
import Spinner from 'components/spinners/Spinner.component';
import PlayersTable from './PlayersTable';
import { useAuth } from 'shared/hooks';

export default () => {
  const { isAuth } = useAuth;

  useFirestoreConnect('players');
  useFirestoreConnect('games');

  const { players } = useSelector((state) => state.firestore.ordered);
  const { games } = useSelector((state) => state.firestore.ordered);

  return (
    <PageContainer title='Players'>
      {isAuth ? <LinkButton to={ADD_PLAYER}>Add Player</LinkButton> : null}
      {games && players ? (
        <PlayersTable players={players} games={games} />
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
