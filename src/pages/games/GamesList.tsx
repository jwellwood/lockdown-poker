import React from 'react';
import GameListItem from './GameListItem';
import { ListContainer } from 'shared/layout';
import { IGame } from 'types';
import NoGamesYet from 'components/typography/NoGamesYet';

interface Props {
  games: IGame[];
}

const GamesList: React.FC<Props> = ({ games }) => {
  return (
    <ListContainer>
      {games.length ? (
        games.map((game, i) => (
          <GameListItem game={game} index={i} key={game.id} />
        ))
      ) : (
        <NoGamesYet />
      )}
    </ListContainer>
  );
};

export default GamesList;
