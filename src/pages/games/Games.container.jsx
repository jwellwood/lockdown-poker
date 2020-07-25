import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { ADD_GAME } from 'router';
import { PageContainer, ContentContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';
import LinkButton from 'components/buttons/LinkButton.component';
import Spinner from 'components/spinners/Spinner.component';
import GamesList from './GamesList';

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
      {isAuth ? <LinkButton to={ADD_GAME}>Add Game</LinkButton> : null}
      <ContentContainer>
        {games ? <GamesList games={games} /> : <Spinner />}
      </ContentContainer>
    </PageContainer>
  );
};
