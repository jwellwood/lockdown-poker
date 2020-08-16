// Name is stored as ID, so we need to convert it back in the view
import { IGameParticipant } from './customTypes';

export const getNameFromId = (
  players: IGameParticipant[],
  player: IGameParticipant
) => {
  console.log(player);
  const foundPlayer = players.find((p) => p.id === player.name);
  return foundPlayer ? foundPlayer.name : '';
};
