import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core';
import { getOrdinals } from 'shared/utils';
import ListAvatar from 'components/avatars/ListAvatar.component';

const GamePlayerDetails = ({ game, players }) => {
  return (
    <List>
      {game.participants.map((player) => {
        // Name is stored as ID, so we need to convert it back in the view
        const getNameFromId = players.find((p) =>
          p.id === player.name ? p.name : ''
        );

        const buyBacks = player.buyIns - 1;
        const totalMoney = player.buyIns * game.buyIn;
        return (
          <ListItem key={player.name}>
            <ListAvatar>
              {player.finalPosition}
              <Typography component='span' variant='caption'>
                {getOrdinals(player.finalPosition)}
              </Typography>
            </ListAvatar>

            <ListItemText
              primary={getNameFromId.name || ''}
              secondary={`Buy backs: ${buyBacks}`}
            />
            <ListItemSecondaryAction>€{totalMoney}</ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GamePlayerDetails;
