import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';
import { GAMES } from 'router';
import EditGameForm from './EditGameForm.component';
import Spinner from 'components/spinners/Spinner.component';

const EditGameFormContainer = ({ game }) => {
  const { id } = useParams();
  const history = useHistory();
  const fireStore = useFirestore();

  const [selectedDate, setSelectedDate] = useState(game.date);
  const [input, setInput] = useState({});

  const gameRef = fireStore.collection('games').doc(id);

  useEffect(() => {
    if (game) {
      setInput({
        buyIn: game.buyIn,
        gameLink: game.gameLink,
        table: game.table,
        zoomLink: game.zoomLink,
      });
      setSelectedDate(game.date);
    }
  }, [game]);

  const onChange = (e) =>
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
