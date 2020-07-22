import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import GamesList from './GamesList';
import LinkButton from '../../ui/buttons/LinkButton.component';
import { ADD_GAME } from '../../router';
import ListPageContainer from '../../ui/layout/ListPageContainer';

const GamesPage = () => {
  useFirestoreConnect([
    {
      collection: 'games',
      orderBy: ['date', 'desc'],
    },
  ]);
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const { games } = useSelector((state) => state.firestore.ordered);

  return (
    <ListPageContainer title='Games'>
      {!isEmpty && isLoaded ? (
        <LinkButton to={ADD_GAME}>Add Game</LinkButton>
      ) : null}

      <GamesList games={games} />
    </ListPageContainer>
  );
};

export default GamesPage;
