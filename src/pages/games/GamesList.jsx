import React from 'react';
import { parseDate } from '../../utils/parseDate';

const GamesList = ({ games }) => {
  return games ? (
    games.map((game) => {
      console.log(game.date);
      return (
        <div key={game.id} style={{ border: '1px solid black' }}>
          <div>Date: {parseDate(game.date)}</div>
          <div>Buy in: {game.buyIn}</div>
          <div>
            No.of players: {game.participants && game.participants.length}
          </div>
          <div>
            {game.participants &&
              game.participants.map((player) => (
                <ul key={player.id} style={{ border: '1px solid green' }}>
                  <li>Name: {player.name}</li>
                  <li>Buy backs:{player.buyBacks}</li>
                  <li>Final position:{player.finalPosition}</li>
                </ul>
              ))}
          </div>
        </div>
      );
    })
  ) : (
    <div>No games yet!</div>
  );
};

export default GamesList;
