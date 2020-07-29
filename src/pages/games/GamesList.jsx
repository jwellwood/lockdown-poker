import React from 'react';
import { Typography } from '@material-ui/core';
import GameListItem from './GameListItem';
import { ListContainer } from 'shared/layout';

const GamesList = ({ games }) => {
  return (
    <ListContainer>
      {games.length ? (
        games.map((game, i) => (
          <GameListItem game={game} index={i} key={game.id} />
        ))
      ) : (
        <Typography>No games yet!</Typography>
      )}
    </ListContainer>
  );
};

export default GamesList;
