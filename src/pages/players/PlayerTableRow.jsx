import React from 'react';

import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import { useLoadPlayerGames } from '../../hooks/useLoadPlayerGames';
import LinkButton from '../../ui/buttons/LinkButton.component';

const PlayerTableRow = ({ player, games, index }) => {
  const { playerGames } = useLoadPlayerGames(player.id, games);
  const numberOfGamesPlayed = playerGames.length;
  const getBuyIns = playerGames.map((game) => game.buyIns);
  const numberOfBuyIns = getBuyIns.reduce((tot, acc) => +tot + +acc, 0);
  const positionFinishes = playerGames.map((game) => game.finalPosition);
  const averageFinish = (
    positionFinishes.reduce((tot, acc) => +tot + +acc, 0) / numberOfGamesPlayed
  ).toFixed(2);
  const buyBacks = numberOfBuyIns - numberOfGamesPlayed;

  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell component='th' scope='row'>
        {player.name}
      </TableCell>
      <TableCell align='right'>{numberOfGamesPlayed}</TableCell>
      <TableCell align='right'>{buyBacks}</TableCell>
      <TableCell align='right'>{averageFinish}</TableCell>
      <TableCell align='right'>
        <LinkButton to={`/players/${player.id}`}>Details</LinkButton>
      </TableCell>
    </TableRow>
  );
};

export default PlayerTableRow;
