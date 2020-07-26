export const usePlayerStats = (player) => {
  const { games, stats } = player;

  const numberOfGamesPlayed = games.length;
  const numberOfBuyIns = stats
    .map((stat) => stat.buyIns)
    .reduce((a, b) => +a + +b, 0);
  const numberOfBuyBacks = numberOfBuyIns - numberOfGamesPlayed;
  const arrOfFinalPositions = stats.map((stat) => stat.finalPosition);
  const averageFinalPosition = (
    arrOfFinalPositions.reduce((a, b) => +a + +b, 0) / numberOfGamesPlayed
  ).toFixed(2);

  const bestFinish = Math.min(...arrOfFinalPositions);
  const worstFinish = Math.max(...arrOfFinalPositions);

  return {
    numberOfGamesPlayed,
    numberOfBuyIns,
    numberOfBuyBacks,
    arrOfFinalPositions,
    averageFinalPosition,
    bestFinish,
    worstFinish,
  };
};
