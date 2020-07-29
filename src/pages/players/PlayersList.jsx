import React from 'react';
import { Typography } from '@material-ui/core';
import { usePlayerStatsArray } from 'shared/hooks';
import { ListContainer } from 'shared/layout';
import PlayerListItem from './PlayerListItem';

const PlayersList = ({ players, games }) => {
  const { sortedPlayers } = usePlayerStatsArray(players, games);
  const playersToShow = sortedPlayers.filter((player) => player.games.length);
  const rest = sortedPlayers.filter((player) => !player.games.length);
  return (
    <ListContainer>
      {players.length ? (
        [...playersToShow, ...rest].map((player, i) => {
          return <PlayerListItem key={player.id} player={player} index={i} />;
        })
      ) : (
        <Typography>No players yet!</Typography>
      )}
    </ListContainer>
  );
};

export default PlayersList;
