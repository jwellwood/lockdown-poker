import React, { useState, useEffect } from 'react';

import VideoCamRounded from '@material-ui/icons/VideocamRounded';
import LinkRounded from '@material-ui/icons/LinkRounded';
import EventAvailableRounded from '@material-ui/icons/EventAvailableRounded';
import { PageContainer } from 'shared/layout';
import { useSelector } from 'react-redux';
import LinkButton from 'components/buttons/LinkButton.component';
import { ADD_GAME } from 'router';
import { useFirestoreConnect } from 'react-redux-firebase';
import { parseDate } from 'shared/utils';
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

  useFirestoreConnect([
    {
      collection: 'games',
      orderBy: ['date'],
      limit: 1,
    },
  ]);

  const games = useSelector((state) => state.firestore.ordered.games);

  useEffect(() => {
    if (!games) {
      return;
    } else {
      setGameDate(parseDate(games[0].date));
      setZoomInputValue({
        value: games[0].zoomLink,
      });
      setGameInputValue({
        value: games[0].gameLink,
      });
      setLoading(false);
    }
  }, [games]);

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
      date: gameDate,
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
  ];
  return (
    <PageContainer title='Home'>
      {loading ? (
        <Spinner />
      ) : !isEmpty && isLoaded ? (
        <LinkButton to={ADD_GAME}>Add new game</LinkButton>
      ) : null}
      <LogoImageBox />
      {loading ? (
        <Spinner />
      ) : (
        <NextGameDetails nextGameData={nextGameData} onCopy={onCopy} />
      )}
    </PageContainer>
  );
};

export default HomePage;
