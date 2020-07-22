import React, { useState, useEffect } from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
} from '@material-ui/core';

const PlayerListItem = ({ player, games }) => {
  const [playerGames, setPlayerGames] = useState([]);

  const loadGames = () => {
    const gamesPlayed = [];
    games.map((game) =>
      game.participants.forEach((pl) => {
        if (pl.name === player.id) {
          gamesPlayed.push(pl);
        }
      })
    );
    setPlayerGames(gamesPlayed);
  };

  useEffect(() => {
    loadGames();
  }, []);

  const numberOfGamesPlayed = playerGames.length;
  const getBuyIns = playerGames.map((game) => game.buyIns);
  const numberOfBuyIns = getBuyIns.reduce((tot, acc) => +tot + +acc, 0);
  const positionFinishes = playerGames.map((game) => game.finalPosition);
  const averageFinish = (
    positionFinishes.reduce((tot, acc) => +tot + +acc, 0) / numberOfGamesPlayed
  ).toFixed(2);
  const buyBacks = numberOfBuyIns - numberOfGamesPlayed;

  return (
    <>
      <ListItem key={player.id}>
        <ListItemAvatar>
          <Avatar>{player.name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={player.name}
          secondary={`${numberOfGamesPlayed} games played `}
        />
      </ListItem>
      <List>
        <ListItemText primary={`BUY BACKS: ${buyBacks}`} />
        <ListItemText primary={`FINISHES: ${positionFinishes}`} />
        <ListItemText primary={`AVERAGE FINISH: ${averageFinish}`} />
      </List>
    </>
  );
};

export default PlayerListItem;
