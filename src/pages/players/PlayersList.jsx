import React from 'react';

const PlayersList = ({ players }) => {
  return (
    <div>
      {players ? (
        players.map((player) => (
          <div key={player.id}>
            Name:{player.name}, IBAN: {player.iban}
          </div>
        ))
      ) : (
        <div>No players</div>
      )}
    </div>
  );
};

export default PlayersList;
