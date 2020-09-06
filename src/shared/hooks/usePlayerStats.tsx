import { IPlayerWithStats } from 'shared/utils/customTypes';

export const usePlayerStats = (player: IPlayerWithStats) => {
  const { games, stats } = player;
  //@TODO Check stats type

  const numberOfGamesPlayed = games.length;
  const numberOfBuyIns = stats
    .map((stat: any) => stat.buyIns)
    .reduce((a: number, b: number) => +a + +b, 0);
  const numberOfBuyBacks = numberOfBuyIns - numberOfGamesPlayed;
  const arrOfFinalPositions = stats.map((stat: any) => stat.finalPosition);
  const averageFinalPosition = (
    arrOfFinalPositions.reduce((a: number, b: number) => +a + +b, 0) /
    numberOfGamesPlayed
  ).toFixed(2);

  const bestFinish = Math.min(...arrOfFinalPositions);
  const worstFinish = Math.max(...arrOfFinalPositions);
  const numberOfBest = arrOfFinalPositions.filter(
    (pos: number) => +pos === bestFinish
  ).length;
  const numberOfWorst = arrOfFinalPositions.filter(
    (pos: number) => +pos === worstFinish
  ).length;

  return {
    numberOfGamesPlayed,
    numberOfBuyIns,
    numberOfBuyBacks,
    arrOfFinalPositions,
    averageFinalPosition,
    bestFinish,
    worstFinish,
    numberOfBest,
    numberOfWorst,
  };
};
