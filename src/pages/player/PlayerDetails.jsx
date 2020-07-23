import React from 'react';
import { Card, List, ListItem, ListItemText } from '@material-ui/core';

const PlayerDetails = ({ player, games, playerGames, gamesPlayedIn }) => {
  const played = playerGames.length;
  const playedPercentage = (playerGames.length / games.length) * 100;
  const totalBuyIns = playerGames
    .map((game) => game.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);
  const buyBacks = totalBuyIns - played;
  const positionFinishes = playerGames.map((game) => game.finalPosition);
  const averageFinish = (
    positionFinishes.reduce((tot, acc) => +tot + +acc, 0) / played
  ).toFixed(2);
  const bestFinish = Math.min(...positionFinishes);
  const worstFinish = Math.max(...positionFinishes);

  return (
    <div>
      <Card>
        <h3>Player Details</h3>
        <List>
          <ListItem>
            <ListItemText primary='Games played' secondary={played} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Played %' secondary={playedPercentage} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Buy ins' secondary={totalBuyIns} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Buy backs' secondary={buyBacks} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Average' secondary={averageFinish} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Best finish' secondary={bestFinish} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Worst finish' secondary={worstFinish} />
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default PlayerDetails;
