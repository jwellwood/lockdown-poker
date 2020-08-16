import React from 'react';
import { Typography } from '@material-ui/core';
import { usePlayerStatsArray } from 'shared/hooks';
import { ListContainer } from 'shared/layout';
import PlayerListItem from './PlayerListItem';
import { IPlayerWithStats, IGame } from 'shared/utils/customTypes';

interface Props {
  players: IPlayerWithStats[];
  games: IGame[];
}

const PlayersList: React.FC<Props> = ({ players, games }) => {
  const { sorted } = usePlayerStatsArray(players, games);
  return (
    <ListContainer>
      {sorted.length ? (
        sorted.map((player, i) => {
          return <PlayerListItem key={player.id} player={player} index={i} />;
        })
      ) : (
        <Typography>No players yet!</Typography>
      )}
    </ListContainer>
  );
};

export default PlayersList;
