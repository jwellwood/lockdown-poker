import React, { useState, useEffect } from 'react';
import { PageContainer } from 'shared/layout';
import GamePlayerTable from './GamePlayerTable';
import { useFirestore } from 'react-redux-firebase';
import { useParams, Redirect } from 'react-router-dom';
import { useAuth } from 'shared/hooks';
import { SIGN_IN } from 'router';
import EditGameFormContainer from './EditGameFormContainer.container';

export default () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const fireStore = useFirestore();
  useEffect(() => {
    const gameRef = fireStore.collection('games').doc(id);
    gameRef.get().then((doc) => {
      setGame(doc.data());
    });
  }, [fireStore, id]);

  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }

  return (
    <PageContainer hasBackButton title='Edit Game'>
      <EditGameFormContainer game={game} />
      <GamePlayerTable players={game.participants} game={game} />
    </PageContainer>
  );
};
