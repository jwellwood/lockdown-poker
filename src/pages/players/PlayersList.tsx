import React from 'react';
import { Typography } from '@material-ui/core';
import { usePlayerStatsArray } from 'shared/hooks';
import { ListContainer } from 'shared/layout';
import PlayerListItem from './PlayerListItem';
import { IPlayerWithStats, IGame } from 'types';
import StatKeys from './StatKeys';

interface Props {
  players: IPlayerWithStats[];
  games: IGame[];
}

const PlayersList: React.FC<Props> = ({ players, games }) => {
  const { sorted } = usePlayerStatsArray(players, games);
  return (
    <ListContainer>
      <StatKeys />
      {sorted.length ? (
        sorted.map((player, i) => {
          return (
            <PlayerListItem
              key={player.id}
              player={player}
              index={i}
              games={games}
            />
          );
        })
      ) : (
        <Typography>No players yet!</Typography>
      )}
    </ListContainer>
  );
};

export default PlayersList;
