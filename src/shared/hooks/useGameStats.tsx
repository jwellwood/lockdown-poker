import { IGame } from 'types';

export const useGameStats = (game: IGame) => {
  const { participants, buyIn } = game;

  const thirdPlaysForFreeValue = 100;
  const secondPlaysForFreeValue = 5;

  const totalBuyIns = participants
    .map((player) => player.buyIns)
    .reduce((tot, acc) => +tot + +acc, 0);

  const totalPot = +buyIn * totalBuyIns;
  const moneyToThird = totalPot >= thirdPlaysForFreeValue ? +buyIn : 0;
  const moneyToSecond =
    totalPot >= +buyIn * secondPlaysForFreeValue ? +buyIn * 2 : +buyIn;
  const moneyToWinner = totalPot - (moneyToSecond - moneyToThird);

  return { totalPot, moneyToWinner, moneyToSecond, moneyToThird };
};
