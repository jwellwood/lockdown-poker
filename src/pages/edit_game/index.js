import React, { useState, useEffect } from 'react';
import EditGameForm from '../../forms/EditGameForm';
import PageContainer from '../../ui/layout/PageContainer';
import GamePlayerTable from './GamePlayerTable';
import { useFirestore } from 'react-redux-firebase';
import { useParams } from 'react-router-dom';

const EditGamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const fireStore = useFirestore();
  useEffect(() => {
    const gameRef = fireStore.collection('games').doc(id);
    gameRef.get().then((doc) => {
      setGame(doc.data());
    });
  }, [fireStore, id]);

  return (
    <PageContainer title='Edit Game'>
      <EditGameForm game={game} />
      <GamePlayerTable players={game.participants} game={game} />
    </PageContainer>
  );
};

export default EditGamePage;
