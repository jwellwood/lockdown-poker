import React, { useState, useEffect } from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector, RootStateOrAny } from 'react-redux';
import isFuture from 'date-fns/isFuture';
import { ADD_GAME } from 'router';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks/useAuth';
import { getDateFromTimestamp } from 'shared/utils/parseDate';
import { IGame } from 'shared/utils/customTypes';
import LinkButton from 'components/buttons/LinkButton.component';
import Spinner from 'components/spinners/Spinner.component';
import AuthLinkButton from 'components/buttons/AuthLinkButton';
import NextGameDetails from './NextGameDetails';
import LogoImageBox from './LogoImageBox';

const HomePage = () => {
  const { isAuth } = useAuth();
  const [latestGame, setLatestGame] = useState<IGame | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useFirestoreConnect([
    {
      collection: 'games',
      orderBy: ['date', 'desc'],
    },
  ]);

  const games = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered.games
  );

  useEffect(() => {
    if (games && games.length) setLatestGame(games[0]);
    setLoading(false);
  }, [games]);

  const isInFuture = (gameDate: Date): boolean => {
    const parsedDate: Date = getDateFromTimestamp(gameDate);
    return isFuture(parsedDate);
  };

  const ContentToDisplay = () => {
    if (games && !games.length) {
      return <div>No games yet</div>;
    } else if (latestGame && isInFuture(latestGame.date)) {
      return <NextGameDetails nextGameData={latestGame} />;
    } else
      return (
        <LinkButton to={(games && `/games/${latestGame?.id}`) || '/'}>
          Go to latest game
        </LinkButton>
      );
  };

  return (
    <PageContainer title='Home'>
      <AuthLinkButton to={ADD_GAME} isAuth={isAuth}>
        Add new game
      </AuthLinkButton>
      <LogoImageBox />
      {loading ? <Spinner /> : <ContentToDisplay />}
    </PageContainer>
  );
};

export default HomePage;
