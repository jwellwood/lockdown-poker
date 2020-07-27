import React from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useAuth } from 'shared/hooks';
import { PageContainer, ContentContainer } from 'shared/layout';
import Spinner from 'components/spinners/Spinner.component';
import LinkButton from 'components/buttons/LinkButton.component';
import GamePlayerDetails from './GamePlayerDetails';
import GameDetails from './GameDetails';

export default () => {
  const { id } = useParams();
  const { isAuth } = useAuth();
  useFirestoreConnect([
    {
      collection: 'games',
      doc: id,
    },
  ]);
  useFirestoreConnect('players');
  const game = useSelector(
    ({ firestore: { data } }) => data.games && data.games[id]
  );
  const { players } = useSelector((state) => state.firestore.ordered);

  return (
    <PageContainer hasBackButton title='Game Details'>
      {game ? (
        <>
          {isAuth ? (
            <LinkButton to={`/games/edit/${id}`}>Edit Game</LinkButton>
          ) : null}
          <ContentContainer>
            <GameDetails game={game} id={id} />
          </ContentContainer>
          <ContentContainer>
            {players ? (
              <GamePlayerDetails game={game} players={players} />
            ) : (
              <Spinner />
            )}
          </ContentContainer>
        </>
      ) : (
        <Spinner />
      )}
    </PageContainer>
  );
};
