import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PlayersList from './PlayersList';
import LinkButton from '../../ui/buttons/LinkButton.component';
import { ADD_PLAYER } from '../../router';
import PageContainer from '../../ui/layout/PageContainer';

const PlayersPage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect('players');

  const players = useSelector((state) => state.firestore.ordered.players);

  return (
    <PageContainer>
      {!isEmpty && isLoaded ? (
        <LinkButton to={ADD_PLAYER}>Add Player</LinkButton>
      ) : null}
      <PlayersList players={players} />
    </PageContainer>
  );
};

export default PlayersPage;
