// Name is stored as ID, so we need to convert it back in the view
import { IGameParticipant } from '../../../types';

export const getNameFromId = (
  players: IGameParticipant[],
  player: IGameParticipant
) => {
  const foundPlayer = players.find((p) => p.id === player.name);
  return foundPlayer ? foundPlayer.name : '';
};
