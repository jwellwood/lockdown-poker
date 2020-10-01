import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector, RootStateOrAny } from 'react-redux';
import PlayerDetails from './PlayerDetails';
import Spinner from 'components/spinners/Spinner.component';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';
import PaymentDetails from './PaymentDetails';
import AuthLinkButton from 'components/buttons/AuthLinkButton';

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
    (state: RootStateOrAny) =>
      state.firestore.data.players && state.firestore.data.players[id]
  );

  useFirestoreConnect([
    {
      collection: 'games',
      orderBy: ['date', 'desc'],
    },
  ]);
  const { games } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );
  return (
    <PageContainer hasBackButton title='Player Details'>
      {player && games ? (
        <>
          <AuthLinkButton to={`/players/edit/${id}`} isAuth={isAuth}>
            Edit Player
          </AuthLinkButton>
          <PlayerDetails
            player={new Array({ ...player, id })} // we have to do this to fit the data structure required in the stats hook
            games={games}
          />
          <PaymentDetails player={player} />
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
