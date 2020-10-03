import { IGame, IGameParticipant } from 'types';

export const useBuyIns = (games: IGame[], stats: IGameParticipant[]) => {
  const numberOfGamesPlayed = games.length;

  const numberOfBuyIns = stats
    .map((stat: any) => stat.buyIns)
    .reduce((a: number, b: number) => +a + +b, 0);

  const numberOfBuyBacks = numberOfBuyIns - numberOfGamesPlayed;
  return { numberOfBuyIns, numberOfBuyBacks };
};
