import React from 'react';
import { parseDate } from '../../utils/parseDate';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const GamesList = ({ games }) => {
  return games ? (
    <List style={{ overflow: 'scroll' }}>
      {games.map((game) => {
        return (
          <ListItem
            key={game.id}
            button
            component={Link}
            to={`/games/${game.id}`}
          >
            <ListItemText
              primary={parseDate(game.date)}
              secondary={`Players: ${
                game.participants && game.participants.length
              }, Buy in: €${game.buyIn}`}
            />
          </ListItem>
        );
      })}
    </List>
  ) : (
    <div>No games yet!</div>
  );
};

export default GamesList;
