import React from 'react';
// Icons
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AllOutIcon from '@material-ui/icons/AllOut';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EuroIcon from '@material-ui/icons/Euro';
import { ListItem, ListItemText } from '@material-ui/core';
import { parseDate } from 'shared/utils';
import ListAvatar from 'components/avatars/ListAvatar.component';
import ListValueText from 'components/typography/ListValueText';
import { ListContainer } from 'shared/layout';

const GameDetails = ({ game }) => {
  const { date, table, buyIn, participants } = game;

  const totalBuyIns = participants
    .map((player) => player.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);

  // TODO write an algorithm to calc these properly
  const totalCash = totalBuyIns * buyIn;
  const secondPlacePrize = participants.length > 1 ? buyIn * 2 : 0;
  const firstPlacePrize = totalCash - secondPlacePrize;

  const data = [
    {
      icon: <CalendarTodayIcon />,
      primary: 'Date',
      secondary: parseDate(date),
      value: '',
    },
    { icon: <AllOutIcon />, primary: 'Table', secondary: table, value: '' },
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
      secondary: `€${firstPlacePrize}/€${secondPlacePrize}`,
      value: `€${totalCash}`,
    },
  ];

  return (
    <ListContainer>
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
