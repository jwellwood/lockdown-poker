import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { PLAYERS } from 'router';
import AddPlayerForm from './AddPlayerForm.component';

const AddPlayerFormContainer = () => {
  const fireStore = useFirestore();
  const history = useHistory();
  const initInput = { name: '', preferredPayment: '', iban: '' };
  const [input, setInput] = useState({ ...initInput });

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input };
    fireStore.add('players', { ...data });
    history.push(PLAYERS);
  };
  return <AddPlayerForm onChange={onChange} onSubmit={onSubmit} />;
};

export default AddPlayerFormContainer;
