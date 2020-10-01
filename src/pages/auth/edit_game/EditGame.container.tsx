import React, { useState, useEffect } from 'react';
import { PageContainer } from 'shared/layout';
import GamePlayerTable from './GamePlayerTable';
import { useFirestore } from 'react-redux-firebase';
import { useParams, Redirect } from 'react-router-dom';
import { useAuth } from 'shared/hooks';
import { SIGN_IN } from 'router';
import EditGameFormContainer from './EditGameFormContainer.container';
import { useSelector, RootStateOrAny } from 'react-redux';
import Spinner from 'components/spinners/Spinner.component';
import { IGame } from 'types';
import { initGame } from 'shared/utils/initGame';

export default () => {
  const { id } = useParams();
  const [game, setGame] = useState<IGame>({
    ...initGame,
  });
  const fireStore = useFirestore();
  useEffect(() => {
    const gameRef = fireStore.collection('games').doc(id);
    gameRef.get().then((doc) => {
      //Ensures <DocumentData> is never undefined
      const data = doc.data()!;
      if (data) setGame(data as IGame);
    });
  }, [fireStore, id]);

  const { isAuth } = useAuth();
  const { players } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }

  return players ? (
    <PageContainer hasBackButton title='Edit Game'>
      <GamePlayerTable players={game.participants} playerData={players} />
      <EditGameFormContainer game={game} />
    </PageContainer>
  ) : (
    <Spinner />
  );
};
