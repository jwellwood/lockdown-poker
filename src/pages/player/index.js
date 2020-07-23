import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PlayerDetails from './PlayerDetails';
import Spinner from '../../ui/spinners/Spinner.component';
import { useLoadPlayerGames } from '../../hooks/useLoadPlayerGames';
import OtherDetails from './OtherDetails';
import UserDetails from './UserDetails';
import GamePlayerDetails from '../game/GamePlayerDetails';
import LinkButton from '../../ui/buttons/LinkButton.component';

const PlayerPage = () => {
  const { id } = useParams();
  useFirestoreConnect([
    {
      collection: 'players',
      doc: id,
    },
    {
      collection: 'games',
    },
  ]);

  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const player = useSelector(
    ({ firestore: { data } }) => data.players && data.players[id]
  );

  const { games } = useSelector((state) => state.firestore.ordered);

  const { playerGames, gamesPlayedIn } = useLoadPlayerGames(id, games);
  // useEffect(() => {}, [games]);

  return player && games ? (
    <div>
      {!isEmpty && isLoaded ? (
        <LinkButton to={`/players/edit/${id}`}>Edit Player</LinkButton>
      ) : null}
      <UserDetails player={player} id={id} />
      <PlayerDetails
        player={player}
        id={id}
        games={games}
        playerGames={playerGames}
        gamesPlayedIn={gamesPlayedIn}
      />
      <OtherDetails player={player} />
    </div>
  ) : (
    <Spinner />
  );
};

export default PlayerPage;
