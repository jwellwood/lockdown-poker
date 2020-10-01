import { paymentOptions } from 'shared/assets/data/paymentOptions';
import { tableNames } from 'shared/assets/data/tableNames';
import { IGameParticipant, IGame } from 'types';
import { DocumentData } from '@firebase/firestore-types';

export const playerNameOptions = (
  players: IGameParticipant[],
  game: IGame | DocumentData
) => {
  const gameParticipants = game.participants
    ? game.participants.map((player: IGameParticipant) => player.name)
    : [];

  const unselectedPlayers = players.filter(
    (player) => !gameParticipants.includes(player.id)
  );

  const playerList = unselectedPlayers.map((player) => ({
    text: player.name,
    value: player.id,
  }));

  return [{ text: '', value: '' }, ...playerList];
};

export const finalPositionOptions = (players: IGameParticipant[]) => {
  const options = [{ text: '', value: '' }];
  for (let i = 0; i < players.length; i++) {
    options.push({ text: `${i + 1}`, value: `${i + 1}` });
  }
  return options;
};

export const preferredPaymentOptions = () => {
  const options = [{ text: '', value: '' }];
  paymentOptions.forEach((el) => options.push({ text: el, value: el }));
  return options;
};

export const tableNameOptions = () => {
  const options = [{ text: '', value: '' }];
  tableNames.forEach((el) => options.push({ text: el, value: el }));
  return options;
};

export const buyInOptions = () => {
  const options = [{ text: '', value: '' }];
  for (let i = 5; i < 30; i += 5) {
    options.push({ text: `${i}`, value: `${i}` });
  }
  return options;
};

export const buyBackOptions = () => {
  const options = [{ text: '', value: '' }];
  for (let i = 1; i < 6; i++) {
    options.push({ text: `${i}`, value: `${i}` });
  }
  return options;
};
