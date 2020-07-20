import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import DateInput from '../ui/inputs/DateInput';
import TextInput from '../ui/inputs/TextInput';
import NumberInput from '../ui/inputs/NumberInput';
import { GAMES } from '../router';
import { useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const AddGameForm = () => {
  const fireStore = useFirestore();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    const data = { ...input, date: selectedDate };
    fireStore.add('games', { ...data });
    history.push(GAMES);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateInput
        inputName='date'
        label='Date'
        defaultValue={selectedDate}
        onChange={setSelectedDate}
        validators={register({ required: true })}
        errors={errors.date || null}
      />
      <TextInput
        inputName='table'
        label='Table'
        onChange={onChange}
        validators={register({ required: false, maxLength: 20 })}
        errors={errors.table || null}
      />
      <NumberInput
        inputName='buyIn'
        label='Buy In'
        onChange={onChange}
        validators={register({ required: true, min: 0, max: 10000 })}
        errors={errors.buyIn || null}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AddGameForm;
