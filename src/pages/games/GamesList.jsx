import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core';
import { parseDate } from 'shared/utils';
import ListAvatar from 'components/avatars/ListAvatar.component';

const GamesList = ({ games }) => {
  return games.length ? (
    <List>
      {games.map((game, i) => {
        return (
          <ListItem
            key={game.id}
            button
            component={Link}
            to={`/games/${game.id}`}
          >
            <ListAvatar>{i + 1}</ListAvatar>
            <ListItemText
              primary={parseDate(game.date)}
              secondary={`€${game.buyIn}`}
            />
            <ListItemSecondaryAction>
              {`Players: ${game.participants && game.participants.length}`}
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  ) : (
    <Typography>No games yet!</Typography>
  );
};

export default GamesList;
