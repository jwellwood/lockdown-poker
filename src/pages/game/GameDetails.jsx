import React from 'react';
import { List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { parseDate } from 'shared/utils';

const GameDetails = ({ game, id }) => {
  const { date, table, buyIn, participants } = game;

  const totalBuyIns = participants
    .map((player) => player.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);

  // TODO write an algorithm to calc these properly
  const totalCash = totalBuyIns * buyIn;
  const secondPlacePrize = participants.length > 1 ? buyIn * 2 : 0;
  const firstPlacePrize = totalCash - secondPlacePrize;

  const gameData = [
    { primary: 'Game ID', secondary: id },
    { primary: 'Date', secondary: parseDate(date) },
    { primary: 'Table', secondary: table },
  ];

  const playerData = [
    { primary: 'Players', secondary: participants.length },
    { primary: 'Buy in', secondary: `€${buyIn}` },
    {
      primary: 'Prize money',
      secondary: `€${totalCash} (€${firstPlacePrize}/€${secondPlacePrize})`,
    },
  ];

  return (
    <Grid container direction='row' justify='space-evenly'>
      <Grid item xs={12} sm={6}>
        <List dense>
          {gameData.map((item) => (
            <ListItem key={item.primary}>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <List dense>
          {playerData.map((item) => (
            <ListItem key={item.primary}>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default GameDetails;
