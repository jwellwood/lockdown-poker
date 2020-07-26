import React from 'react';
import { List, Typography } from '@material-ui/core';
import PlayerListItem from './PlayerListItem';
import { usePlayerStatsArray } from 'shared/hooks';

const PlayersList = ({ players, games }) => {
  const { sortedPlayers } = usePlayerStatsArray(players, games);

  return players.length ? (
    <List>
      {sortedPlayers.map((player, i) => {
        return <PlayerListItem key={player.id} player={player} index={i} />;
      })}
    </List>
  ) : (
    <Typography>No players yet!</Typography>
  );
};

export default PlayersList;
