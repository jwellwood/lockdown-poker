import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { ADD_PLAYER } from 'router';
import { PageContainer, ContentContainer } from 'shared/layout';
import Spinner from 'components/spinners/Spinner.component';
import { useAuth } from 'shared/hooks';
import PlayersList from './PlayersList';
import AuthLinkButton from 'components/buttons/AuthLinkButton';

export default () => {
  const { isAuth } = useAuth();

  useFirestoreConnect('players');
  useFirestoreConnect('games');

  const { players } = useSelector((state) => state.firestore.ordered);
  const { games } = useSelector((state) => state.firestore.ordered);

  return (
    <PageContainer title='Players'>
      <AuthLinkButton to={ADD_PLAYER} isAuth={isAuth}>
        Add Player
      </AuthLinkButton>

      <ContentContainer>
        {games && players ? (
          <PlayersList players={players} games={games} />
        ) : (
          <Spinner />
        )}
      </ContentContainer>
    </PageContainer>
  );
};
