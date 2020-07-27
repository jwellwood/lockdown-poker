import React, { useState, useEffect } from 'react';
import isFuture from 'date-fns/isFuture';
import parseISO from 'date-fns/parseISO';
import closestTo from 'date-fns/closestTo';
import closestIndexTo from 'date-fns/closestIndexTo';
import VideoCamRounded from '@material-ui/icons/VideocamRounded';
import LinkRounded from '@material-ui/icons/LinkRounded';
import AttachMoneyRounded from '@material-ui/icons/AttachMoneyRounded';
import EventAvailableRounded from '@material-ui/icons/EventAvailableRounded';
import { PageContainer } from 'shared/layout';
import { useSelector } from 'react-redux';
import LinkButton from 'components/buttons/LinkButton.component';
import { ADD_GAME } from 'router';
import { useFirestoreConnect } from 'react-redux-firebase';
import { parseDateAndTime, parseDateAsISOString } from 'shared/utils';
import Spinner from 'components/spinners/Spinner.component';
import NextGameDetails from './NextGameDetails';
import LogoImageBox from './LogoImageBox';

const HomePage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const [gameDate, setGameDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [zoomInputValue, setZoomInputValue] = useState({
    value: '',
    copied: false,
  });
  const [gameInputValue, setGameInputValue] = useState({
    value: '',
    copied: false,
  });
  const [buyIn, setBuyIn] = useState('');

  useFirestoreConnect([
    {
      collection: 'games',
      orderBy: ['date'],
    },
  ]);

  const games = useSelector((state) => state.firestore.ordered.games);
  const gameDates =
    games &&
    games
      //convert firebase timestamp to iso string
      .map((game) => parseDateAsISOString(game.date))
      // parseISO so that it works in closestTo function
      .map((date) => parseISO(date));
  const dateNow = new Date();
  //Compares current date with game dates and gives us the closest by index.
  const closestGameDateIndex = closestIndexTo(dateNow, gameDates);
  //Gives us the closest game date in the correct format
  const closestGameDate = closestTo(dateNow, gameDates);
  const closestGame = games && games[closestGameDateIndex];

  useEffect(() => {
    if (!closestGame) {
      return;
    } else {
      const { date, zoomLink, gameLink, buyIn } = closestGame;
      setGameDate(parseDateAndTime(date));
      setZoomInputValue({
        value: zoomLink,
      });
      setGameInputValue({
        value: gameLink,
      });
      setBuyIn(buyIn);
      setLoading(false);
    }
  }, [closestGame]);

  const onCopy = (copyId) => {
    if (copyId === 'zoom')
      setZoomInputValue({ ...zoomInputValue, copied: true });
    if (copyId === 'game')
      setGameInputValue({ ...gameInputValue, copied: true });
  };

  const nextGameData = [
    {
      icon: <EventAvailableRounded />,
      text: 'Next Game:',
      copyButton: false,
      textFromDb: gameDate,
    },
    {
      icon: <VideoCamRounded />,
      text: 'Zoom Link:',
      inputValue: zoomInputValue.value,
      copyButton: true,
      copyId: 'zoom',
      copiedStatus: zoomInputValue.copied,
      copiedMessage: 'Zoom link copied!',
    },
    {
      icon: <LinkRounded />,
      text: 'Game Link:',
      inputValue: gameInputValue.value,
      copyButton: true,
      copyId: 'game',
      copiedStatus: gameInputValue.copied,
      copiedMessage: 'Game link copied!',
    },
    {
      icon: <AttachMoneyRounded />,
      text: 'Buy in:',
      copyButton: false,
      textFromDb: `€${buyIn}`,
    },
  ];

  const ContentToDisplay = () => {
    if (games && !games.length) {
      return <div>No games yet</div>;
    } else if (isFuture(closestGameDate)) {
      return <NextGameDetails nextGameData={nextGameData} onCopy={onCopy} />;
    } else
      return (
        <LinkButton to={(games && `/games/${closestGame.id}`) || '/'}>
          Go to latest game
        </LinkButton>
      );
  };

  return (
    <PageContainer title='Home'>
      {loading && !isLoaded ? (
        <Spinner />
      ) : !isEmpty && isLoaded ? (
        <LinkButton to={ADD_GAME}>Add new game</LinkButton>
      ) : null}
      <LogoImageBox />
      {loading && !isLoaded ? <Spinner /> : <ContentToDisplay />}
    </PageContainer>
  );
};

export default HomePage;
