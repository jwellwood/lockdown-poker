import { IPlayerWithStats } from 'types';
import { useArrayOfFinalPositions } from './useArrayOfFinalPositions';
import { useBuyIns } from './useBuyIns';

export const usePlayerStats = (player: IPlayerWithStats) => {
  const { games, stats } = player;
  const numberOfGamesPlayed = games.length;
  const ranking = player.ranking;

  const { numberOfBuyIns, numberOfBuyBacks } = useBuyIns(games, stats);

  const {
    arrOfFinalPositions,
    averageFinalPosition,
    bestFinish,
    worstFinish,
    numberOfBest,
    numberOfWorst,
  } = useArrayOfFinalPositions(player);

  return {
    ranking,
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
