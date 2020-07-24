import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';
import { HOME } from '../../../router';
import AddGameForm from './AddGameForm.component';

const AddGame = () => {
  const fireStore = useFirestore();
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [input, setInput] = useState({});

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input, date: selectedDate, participants: [] };
    // participants as empty array so it immediately exists in DB
    fireStore.add('games', { ...data });
    history.push(HOME);
  };
  return (
    <AddGameForm
      onChange={onChange}
      onSubmit={onSubmit}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};

export default AddGame;
