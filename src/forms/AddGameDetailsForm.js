import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DateInput from '../ui/inputs/DateInput';
import DateTimeInput from '../ui/inputs/DateTimeInput';
import TextInput from '../ui/inputs/TextInput';
import { Button } from '@material-ui/core';
import { useFirestore, isLoaded } from 'react-redux-firebase';

const AddGameDetailsForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [input, setInput] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const fireStore = useFirestore();
  const history = useHistory();

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    console.log(input);
    console.log('submit');
    console.log(selectedDate);
    const data = { ...input, date: selectedDate };
    console.log(data);
    fireStore.add('gamepreviews', { ...data });
    history.push('/');
  };
  return !isLoaded ? (
    <div>not loaded</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateTimeInput
        disableFuture={false}
        inputName='date'
        label='Date'
        defaultValue={selectedDate}
        onChange={setSelectedDate}
        validators={register({ required: true })}
        errors={errors.date || null}></DateTimeInput>
      <TextInput
        inputName='zoomLink'
        label='Zoom Link'
        onChange={onChange}
        errors={errors.zoomLink || null}></TextInput>
      <TextInput
        inputName='gameLink'
        label='Game Link'
        onChange={onChange}></TextInput>
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AddGameDetailsForm;
