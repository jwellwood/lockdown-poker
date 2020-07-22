import React from 'react';
import { Card, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { parseDate } from '../../utils/parseDate';

const GameDetails = ({ game, id }) => {
  const { date, table, buyIn, participants } = game;

  const totalBuyIns = participants
    .map((player) => player.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);

  const totalCash = totalBuyIns * buyIn;
  return (
    <div>
      <Card>
        <h3>Game details</h3>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary='Game ID' secondary={id} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Date' secondary={parseDate(date)} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Table' secondary={table} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Buy in' secondary={`€${buyIn}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Total pot' secondary={`€${totalCash}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Number of players'
              secondary={participants.length}
            />
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default GameDetails;
