import React from 'react';
import { List, Typography } from '@material-ui/core';
import GameListItem from './GameListItem';

const GamesList = ({ games }) => {
  return games.length ? (
    <List>
      {games.map((game, i) => (
        <GameListItem game={game} index={i} key={game.id} />
      ))}
    </List>
  ) : (
    <Typography>No games yet!</Typography>
  );
};

export default GamesList;
