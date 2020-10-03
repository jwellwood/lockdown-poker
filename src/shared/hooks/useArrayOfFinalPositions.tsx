import { IPlayerWithStats } from 'types';

export const useArrayOfFinalPositions = (player: IPlayerWithStats) => {
  const { games, stats } = player;

  const arrOfFinalPositions = stats.map((stat: any) => stat.finalPosition);
  const averageFinalPosition = (
    arrOfFinalPositions.reduce((a: number, b: number) => +a + +b, 0) /
    games.length
  ).toFixed(2);
  const bestFinish = Math.min(...arrOfFinalPositions);
  const worstFinish = Math.max(...arrOfFinalPositions);

  const numberOf = (stat: number) =>
    arrOfFinalPositions.filter((pos: number) => +pos === stat).length;

  const numberOfBest = numberOf(bestFinish);
  const numberOfWorst = numberOf(worstFinish);

  return {
    arrOfFinalPositions,
    averageFinalPosition,
    bestFinish,
    worstFinish,
    numberOfBest,
    numberOfWorst,
  };
};
