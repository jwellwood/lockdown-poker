import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PlayerDetails from './PlayerDetails';
import Spinner from 'components/spinners/Spinner.component';
import { useLoadPlayerGames } from 'shared/hooks';
import UserDetails from './UserDetails';
import LinkButton from 'components/buttons/LinkButton.component';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';

export default () => {
  const { id } = useParams();
  const { isAuth } = useAuth;
  useFirestoreConnect([
    {
      collection: 'players',
      doc: id,
    },
    {
      collection: 'games',
    },
  ]);

  const player = useSelector(
    ({ firestore: { data } }) => data.players && data.players[id]
  );

  const { games } = useSelector((state) => state.firestore.ordered);

  const { playerGames, gamesPlayedIn } = useLoadPlayerGames(id, games);

  return (
    <PageContainer title='Player Details'>
      {player && games ? (
        <div>
          {isAuth ? (
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
        </div>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
