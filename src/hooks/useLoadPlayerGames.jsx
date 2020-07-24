import { useState, useEffect } from 'react';

export const useLoadPlayerGames = (playerId, games) => {
  const [gamesPlayedIn, setGamesPlayedIn] = useState([]);
  const [playerGames, setPlayerGames] = useState([]);

  // Get the games that an individual player has been involved in
  const loadPlayerGames = () => {
    const gamesPlayed = [];
    games.map((game) =>
      game.participants.forEach((pl) => {
        if (pl.name === playerId) {
          gamesPlayed.push(pl);
        }
      })
    );
    setPlayerGames(gamesPlayed);
  };

  // Get the individuals details from each game they have been involved in
  const loadGamesPlayedIn = () => {
    const gamesPlayed = [];

    games.map((game) =>
      game.participants.forEach((pl) => {
        if (pl.name === playerId) {
          gamesPlayed.push(game);
        }
      })
    );
    setGamesPlayedIn(gamesPlayed);
  };

  useEffect(() => {
    if (games) {
      loadPlayerGames();
      loadGamesPlayedIn();
    }
  }, [games]);

  return { playerGames, gamesPlayedIn };
};
