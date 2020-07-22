import React from 'react';
import { List, ListItem, Divider } from '@material-ui/core';

const GamePlayerDetails = ({ game }) => {
  return (
    <div>
      <h3>Players</h3>
      <Divider />
      {game.participants.map((player) => (
        <List key={player.name} style={{ border: '1px solid green' }}>
          <ListItem>Name: {player.name}</ListItem>
          <ListItem>Buy backs:{player.buyIns}</ListItem>
          <ListItem>Final position:{player.finalPosition}</ListItem>
        </List>
      ))}
    </div>
  );
};

export default GamePlayerDetails;
