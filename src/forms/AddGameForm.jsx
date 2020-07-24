import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DateTimeInput from '../ui/inputs/DateTimeInput';
import TextInput from '../ui/inputs/TextInput';
import { Button } from '@material-ui/core';
import { useFirestore } from 'react-redux-firebase';
import SelectInput from '../ui/inputs/SelectInput';
import { tableNameOptions, buyInOptions } from './utils/select-options';
import FormContainer from '../ui/layout/FormContainer';

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
    const data = { ...input, date: selectedDate, participants: [] }; // participants as empty array
    fireStore.add('games', { ...data });
    history.push('/');
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateTimeInput
          disableFuture={false}
          inputName='date'
          label='Date'
          defaultValue={selectedDate}
          onChange={setSelectedDate}
          validators={register({ required: true })}
          errors={errors.date || null}
        />
        <TextInput
          inputName='zoomLink'
          label='Zoom Link'
          onChange={onChange}
          validators={register({ required: true, maxLength: 200 })} // Guard against posting huge portions of text
          errors={errors.zoomLink || null}
        />
        <TextInput
          inputName='gameLink'
          label='Game Link'
          onChange={onChange}
          validators={register({ required: true, maxLength: 200 })}
          errors={errors.gameLink || null}
        />
        <SelectInput
          inputName='table'
          label='Table Name'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.table || null}
          options={tableNameOptions()}
        />
        <SelectInput
          inputName='buyIn'
          label='Buy In Price'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.buyIn || null}
          options={buyInOptions()}
        />
        <Button type='submit'>Submit</Button>
        <pre>DATE: {JSON.stringify(selectedDate, null, 2)}</pre>
        <pre>INPUTS: {JSON.stringify(input, null, 2)}</pre>
      </form>
    </FormContainer>
  );
};

export default AddGameDetailsForm;
