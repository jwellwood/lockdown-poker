import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import LinkButton from 'components/buttons/LinkButton.component';
import { ADD_PLAYER } from 'router';
import PageContainer from 'shared/layout/PageContainer';
import Spinner from 'components/spinners/Spinner.component';
import PlayersTable from './PlayersTable';

const PlayersPage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect('players');
  useFirestoreConnect('games');

  const { players } = useSelector((state) => state.firestore.ordered);
  const { games } = useSelector((state) => state.firestore.ordered);

  return (
    <PageContainer title='Players'>
      {!isEmpty && isLoaded ? (
        <LinkButton to={ADD_PLAYER}>Add Player</LinkButton>
      ) : null}
      {games && players ? (
        <PlayersTable players={players} games={games} />
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};

export default PlayersPage;
