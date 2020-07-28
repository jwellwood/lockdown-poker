import React from 'react';
import { List, Typography } from '@material-ui/core';
import { usePlayerStatsArray } from 'shared/hooks';
import PlayerListItem from './PlayerListItem';

const PlayersList = ({ players, games }) => {
  const { sortedPlayers } = usePlayerStatsArray(players, games);
  const playersToShow = sortedPlayers.filter((player) => player.games.length);
  const rest = sortedPlayers.filter((player) => !player.games.length);
  return players.length ? (
    <List>
      {[...playersToShow, ...rest].map((player, i) => {
        return <PlayerListItem key={player.id} player={player} index={i} />;
      })}
    </List>
  ) : (
    <Typography>No players yet!</Typography>
  );
};

export default PlayersList;
