import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { getOrdinals, getNameFromId } from 'shared/utils/functions';
import { ListContainer } from 'shared/layout';
import { IGameParticipant, IGame } from 'types';

interface Props {
  game: IGame;
  players: IGameParticipant[];
}

const GamePlayerDetails: React.FC<Props> = ({ game, players }) => {
  const sortedPlayers = [...game.participants].sort(
    (a, b) => +a.finalPosition - +b.finalPosition
  );

  return (
    <ListContainer>
      {sortedPlayers.map((player) => {
        const name = getNameFromId(players, player);
        const buyBacks = +player.buyIns - 1;
        const totalMoney = +player.buyIns * +game.buyIn;
        return (
          <ListItem key={player.name}>
            <ListItemAvatar>
              <Avatar>
                {player.finalPosition}
                <Typography component='span' variant='caption'>
                  {getOrdinals(player.finalPosition)}
                </Typography>
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={name} secondary={`Buy backs: ${buyBacks}`} />
            <ListItemSecondaryAction>€{totalMoney}</ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default GamePlayerDetails;
