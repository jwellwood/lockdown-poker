import React from 'react';
import { parseDate } from '../../utils/parseDate';
import { List, ListItem, ListItemText } from '@material-ui/core';

const GamesList = ({ games }) => {
  return games ? (
    <List>
      {games.map((game) => {
        return (
          <ListItem key={game.id}>
            <ListItemText
              primary={parseDate(game.date)}
              secondary={`Players: ${
                game.participants && game.participants.length
              }`}
            />
            {game.participants &&
              game.participants.map((player) => (
                <List key={player.id} style={{ border: '1px solid green' }}>
                  <ListItem>Name: {player.name}</ListItem>
                  <ListItem>Buy backs:{player.buyBacks}</ListItem>
                  <ListItem>Final position:{player.finalPosition}</ListItem>
                </List>
              ))}
          </ListItem>
        );
      })}
    </List>
  ) : (
    <div>No games yet!</div>
  );
};

export default GamesList;
