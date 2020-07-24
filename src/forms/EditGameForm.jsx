import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import DateTimeInput from '../ui/inputs/DateTimeInput';
import TextInput from '../ui/inputs/TextInput';
import { Button } from '@material-ui/core';
import { useFirestore } from 'react-redux-firebase';
import SelectInput from '../ui/inputs/SelectInput';
import { tableNameOptions, buyInOptions } from './utils/select-options';
import Spinner from '../ui/spinners/Spinner.component';
import FormContainer from '../ui/layout/FormContainer';

const EditGameForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const fireStore = useFirestore();
  const { register, handleSubmit, errors } = useForm();
  // Local state
  const [game, setGame] = useState({});
  const [selectedDate, setSelectedDate] = useState(game.date);
  const [input, setInput] = useState({});

  // *************************

  const gameRef = fireStore.collection('games').doc(id);

  useEffect(() => {
    gameRef.get().then((doc) => {
      setGame(doc.data());
    });
  }, []);
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
  // *************************

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input, date: selectedDate }; // participants as empty array
    gameRef.update({ ...data });
    history.push('/');
  };

  return game && input.buyIn ? (
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
          defaultValue={input.zoomLink}
          onChange={onChange}
          validators={register({ required: true, maxLength: 200 })} // Guard against posting huge portions of text
          errors={errors.zoomLink || null}
        />
        <TextInput
          inputName='gameLink'
          label='Game Link'
          defaultValue={input.gameLink}
          onChange={onChange}
          validators={register({ required: true, maxLength: 200 })}
          errors={errors.gameLink || null}
        />
        <SelectInput
          inputName='table'
          label='Table Name'
          defaultValue={input.table}
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.table || null}
          options={tableNameOptions()}
        />
        <SelectInput
          inputName='buyIn'
          label='Buy In Price'
          defaultValue={input.buyIn}
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
  ) : (
    <Spinner />
  );
};

export default EditGameForm;
