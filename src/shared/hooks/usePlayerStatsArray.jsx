import { useMemo } from 'react';

export const usePlayerStatsArray = (players, games) =>
  useMemo(() => {
    const playersWithGames = players.reduce((arr, player) => {
      const filteredGames = games.filter((game) =>
        game.participants.map((pt) => pt.name).includes(player.id)
      );

      const playerGameStats = filteredGames.map((game) =>
        game.participants.filter((pt) => pt.name === player.id)
      );
      arr.push({
        ...player,
        games: filteredGames,
        stats: playerGameStats.flat(), // TODO check browser support for this
      });
      return arr;
    }, []);

    const rankingByAveragePosition = playersWithGames.map((player) => ({
      ...player,
      averagePosition: player.stats.length
        ? player.stats
            .map((stat) => stat.finalPosition)
            .reduce((a, b) => +a + +b, 0) / player.games.length
        : null,
    }));

    const sorted = [...rankingByAveragePosition].sort((a, b) => {
      return (
        (a.averagePosition === null) - (b.averagePosition === null) ||
        -(b.averagePosition > a.averagePosition) ||
        +(b.averagePosition < a.averagePosition)
      );
    });

    return { playersWithGames, sorted };
  }, [players, games]);
