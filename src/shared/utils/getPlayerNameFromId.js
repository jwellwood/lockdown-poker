// Name is stored as ID, so we need to convert it back in the view
export const getNameFromId = (players, player) => {
  const foundPlayer = players.find((p) => p.id === player.name);
  return foundPlayer.name;
};
