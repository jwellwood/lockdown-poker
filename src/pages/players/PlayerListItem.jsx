import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { usePlayerStats } from 'shared/hooks';

const PlayerListItem = ({ player, index }) => {
  const {
    numberOfGamesPlayed,
    numberOfBuyBacks,
    averageFinalPosition,
  } = usePlayerStats(player);

  return (
    <ListItem
      key={player.id}
      button
      component={Link}
      to={`/players/${player.id}`}
    >
      <ListItemAvatar>
        <Avatar>{index + 1}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={player.name}
        secondary={`Played(BB): ${numberOfGamesPlayed}(${numberOfBuyBacks})`}
      />
      <ListItemSecondaryAction>
        {`Avg: ${averageFinalPosition}`}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default PlayerListItem;
