import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector, RootStateOrAny } from 'react-redux';
import { ADD_GAME } from 'router';
import { PageContainer } from 'shared/layout';
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
  const { games } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );
  //@TODO check if ID field is mentioned
  console.log(games);

  return (
    <PageContainer title='Games'>
      <AuthLinkButton to={ADD_GAME} isAuth={isAuth}>
        Add Game
      </AuthLinkButton>
      {games ? <GamesList games={games} /> : <Spinner />}
    </PageContainer>
  );
};
