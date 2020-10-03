import { useMemo } from 'react';
import { getPercentage } from 'shared/utils/functions';
import { IGame, IPlayerWithStats } from 'types';

export const usePlayerStatsArray = (
  players: IPlayerWithStats[],
  games: IGame[]
) =>
  // games is total games
  useMemo(() => {
    const playersWithGames = players.reduce((arr: any, player: any) => {
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

    const getAverage = (player: IPlayerWithStats) =>
      player.stats
        .map((stat) => stat.finalPosition)
        .reduce((a, b) => +a + +b, 0) / player.games.length;

    const getTotalBuyIns = (player: IPlayerWithStats) =>
      player.stats
        .map((stat: any) => stat.buyIns)
        .reduce((a: number, b: number) => +a + +b, 0);

    const getTotalBuyBacks = (player: IPlayerWithStats) =>
      getTotalBuyIns(player) - player.games.length;

    const calcBuyBackPenalty = (player: IPlayerWithStats) =>
      getTotalBuyBacks(player) * 0.025;

    const averagePosition = playersWithGames.map(
      (player: IPlayerWithStats) => ({
        ...player,
        averagePosition: getAverage(player),
        ranking: player.stats.length
          ? (getAverage(player) /
              getPercentage(games.length, player.games.length)) *
              10 +
            calcBuyBackPenalty(player)
          : null,
      })
    );

    const sorted = [...averagePosition].sort((a, b) => {
      return (
        +(a.ranking === null) - +(b.ranking === null) ||
        -(b.ranking > a.ranking) ||
        +(b.ranking < a.ranking)
      );
    });
    return { playersWithGames, sorted };
  }, [players, games]);
