import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import GamesList from './GamesList';
import LinkButton from 'components/buttons/LinkButton.component';
import { ADD_GAME } from 'router';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';

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

      <GamesList games={games} />
    </PageContainer>
  );
};
