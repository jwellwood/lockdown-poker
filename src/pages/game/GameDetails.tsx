import React from 'react';
// Icons
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AllOutIcon from '@material-ui/icons/AllOut';
import PeopleIcon from '@material-ui/icons/People';
import VideoCamRounded from '@material-ui/icons/VideocamRounded';
import LinkRounded from '@material-ui/icons/LinkRounded';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EuroIcon from '@material-ui/icons/Euro';
import { ListItem, ListItemText } from '@material-ui/core';
import { parseDate } from 'shared/utils/functions';
import ListAvatar from 'components/avatars/ListAvatar.component';
import ListValueText from 'components/typography/ListValueText';
import { ListContainer } from 'shared/layout';
import { IGame } from 'types';
import CopyButton from '../home/CopyButton';
import { shortenTextLength } from 'shared/utils/functions/shortenTextLength';
import { useGameStats } from 'shared/hooks/useGameStats';

interface Props {
  game: IGame;
}

const GameDetails: React.FC<Props> = ({ game }) => {
  const { date, table, buyIn, participants, zoomLink, gameLink } = game;

  const { totalPot, moneyToWinner, moneyToSecond, moneyToThird } = useGameStats(
    game
  );

  const data = [
    {
      icon: <CalendarTodayIcon />,
      primary: 'Date',
      secondary: parseDate(date),
      value: '',
    },
    { icon: <AllOutIcon />, primary: 'Table', secondary: table, value: '' },
    {
      icon: <VideoCamRounded />,
      primary: 'Zoom Link',
      secondary: shortenTextLength(zoomLink),
      value: <CopyButton text={zoomLink} />,
    },
    {
      icon: <LinkRounded />,
      primary: 'Game Link',
      secondary: shortenTextLength(gameLink),
      value: <CopyButton text={gameLink} />,
    },

    {
      icon: <PeopleIcon />,
      primary: 'Players',
      secondary: '',
      value: participants.length,
    },
    {
      icon: <MonetizationOnIcon />,
      primary: 'Buy in',
      secondary: '',
      value: `€${buyIn}`,
    },
    {
      icon: <EuroIcon />,
      primary: 'Prize money',
      secondary: `€${moneyToWinner}/€${moneyToSecond}${
        moneyToThird ? `/€${moneyToThird}` : ''
      }`,
      value: `€${totalPot}`,
    },
  ];

  return (
    <ListContainer dense={false}>
      {data.map(({ primary, secondary, icon, value }) => (
        <ListItem key={primary}>
          <ListAvatar>{icon}</ListAvatar>
          <ListItemText primary={primary} secondary={secondary} />
          <ListValueText>{value}</ListValueText>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default GameDetails;
