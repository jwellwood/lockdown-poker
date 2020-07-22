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
              }, Buy in: €${game.buyIn}`}
            />
            {game.participants &&
              game.participants.map((player) => (
                <List key={player.name} style={{ border: '1px solid green' }}>
                  <ListItem>Name: {player.name}</ListItem>
                  <ListItem>Buy backs:{player.buyIns}</ListItem>
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
