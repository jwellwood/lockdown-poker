import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../ui/inputs/TextInput';
import { useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { PLAYERS } from '../router';

const AddPlayerForm = () => {
  const fireStore = useFirestore();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({});

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    const data = { ...input };
    fireStore.add('players', { ...data });
    history.push(PLAYERS);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        inputName='name'
        label='Name'
        onChange={onChange}
        validators={register({ required: true, minLength: 2, maxLength: 20 })}
        errors={errors.name || null}
      />
      <TextInput
        inputName='iban'
        label='IBAN'
        onChange={onChange}
        validators={register({ required: true })}
        errors={errors.iban || null}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AddPlayerForm;
