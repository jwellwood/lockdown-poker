import React from 'react';
import { List } from '@material-ui/core';
import PlayerListItem from './PlayerListItem';

const PlayersList = ({ players, games }) => {
  return (
    <List>
      {players ? (
        players.map((player) => (
          <PlayerListItem key={player.id} player={player} games={games} />
        ))
      ) : (
        <div>No players</div>
      )}
    </List>
  );
};

export default PlayersList;
