import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';
import { GAMES } from 'router';
import EditGameForm from './EditGameForm.component';
import Spinner from 'components/spinners/Spinner.component';
import { IGame } from 'types';
import { initGame } from 'shared/utils/initGame';

interface Props {
  game: IGame;
}

const EditGameFormContainer: React.FC<Props> = ({ game }) => {
  const { id } = useParams();
  const history = useHistory();
  const fireStore = useFirestore();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [input, setInput] = useState<IGame>({ ...initGame });
  const gameRef = fireStore.collection('games').doc(id);

  useEffect(() => {
    if (game) {
      setInput({
        ...initGame,
        buyIn: game.buyIn,
        gameLink: game.gameLink,
        table: game.table,
        zoomLink: game.zoomLink,
      });
      if (game.date) setSelectedDate(new Date(game.date));
    }
  }, [game]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input, date: selectedDate };
    gameRef.update({ ...data });
    history.push('/');
  };

  const onDelete = () => {
    gameRef.delete();
    history.push(GAMES);
  };

  return game && input.buyIn ? (
    <EditGameForm
      onChange={onChange}
      onSubmit={onSubmit}
      onDelete={onDelete}
      input={input}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  ) : (
    <Spinner />
  );
};

export default EditGameFormContainer;
