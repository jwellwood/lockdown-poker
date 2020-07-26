export const usePlayerStatsArray = (players, games) => {
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
    averagePosition:
      player.stats
        .map((stat) => stat.finalPosition)
        .reduce((a, b) => +a + +b, 0) / player.games.length,
  }));

  const sortedPlayers = rankingByAveragePosition.sort(
    (a, b) => a.averagePosition - b.averagePosition
  );

  return { playersWithGames, sortedPlayers };
};
