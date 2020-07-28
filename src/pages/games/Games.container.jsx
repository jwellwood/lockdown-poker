import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { ADD_GAME } from 'router';
import { PageContainer, ContentContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';
import Spinner from 'components/spinners/Spinner.component';
import GamesList from './GamesList';
import AuthLinkButton from 'components/buttons/AuthLinkButton';

export default () => {
  const { isAuth } = useAuth();
  useFirestoreConnect([
    {
      collection: 'games',
      orderBy: ['date', 'desc'],
    },
  ]);
  const { games } = useSelector((state) => state.firestore.ordered);

  return (
    <PageContainer title='Games'>
      <AuthLinkButton to={ADD_GAME} isAuth={isAuth}>
        Add Game
      </AuthLinkButton>
      <ContentContainer>
        {games ? <GamesList games={games} /> : <Spinner />}
      </ContentContainer>
    </PageContainer>
  );
};
