import React, { useState, useEffect } from 'react';
import { PageContainer } from 'shared/layout';
import GamePlayerTable from './GamePlayerTable';
import { useFirestore } from 'react-redux-firebase';
import { useParams, Redirect } from 'react-router-dom';
import { useAuth } from 'shared/hooks';
import { SIGN_IN } from 'router';
import EditGameFormContainer from './EditGameFormContainer.container';
import { useSelector } from 'react-redux';
import Spinner from 'components/spinners/Spinner.component';

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
  const { players } = useSelector((state) => state.firestore.ordered);

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }

  return players ? (
    <PageContainer hasBackButton title='Edit Game'>
      <GamePlayerTable
        players={game.participants}
        game={game}
        playerData={players}
      />
      <EditGameFormContainer game={game} player={players} />
    </PageContainer>
  ) : (
    <Spinner />
  );
};
