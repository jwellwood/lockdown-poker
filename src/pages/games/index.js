import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import GamesList from './GamesList';
import LinkButton from '../../ui/buttons/LinkButton.component';
import { ADD_GAME } from '../../router';
import PageContainer from '../../ui/layout/PageContainer';

const GamesPage = () => {
  useFirestoreConnect('games');
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const { games } = useSelector((state) => state.firestore.ordered);

  return (
    <PageContainer>
      {!isEmpty && isLoaded ? (
        <LinkButton to={ADD_GAME}>Add Game</LinkButton>
      ) : null}

      <GamesList games={games} />
    </PageContainer>
  );
};

export default GamesPage;
