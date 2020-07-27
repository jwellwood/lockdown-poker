import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PlayerDetails from './PlayerDetails';
import Spinner from 'components/spinners/Spinner.component';
import UserDetails from './UserDetails';
import LinkButton from 'components/buttons/LinkButton.component';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';

export default () => {
  const { id } = useParams();

  const { isAuth } = useAuth();
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

  useFirestoreConnect(['games']);
  const { games } = useSelector((state) => state.firestore.ordered);
  return (
    <PageContainer hasBackButton title='Player Details'>
      {player && games ? (
        <div>
          {isAuth ? (
            <LinkButton to={`/players/edit/${id}`}>Edit Player</LinkButton>
          ) : null}
          <UserDetails player={new Array({ ...player, id })} />
          <PlayerDetails
            player={new Array({ ...player, id })}
            id={id}
            games={games}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
