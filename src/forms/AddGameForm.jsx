import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card } from '@material-ui/core';
import DateInput from '../ui/inputs/DateInput';
import TextInput from '../ui/inputs/TextInput';
import NumberInput from '../ui/inputs/NumberInput';
import { GAMES } from '../router';
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
} from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import SelectInput from '../ui/inputs/SelectInput';
import { useSelector } from 'react-redux';
import {
  playerNameOptions,
  finalPositionOptions,
} from './utils/select-options';

const AddGameForm = () => {
  const fireStore = useFirestore();
  const history = useHistory();
  useFirestoreConnect(['players']);
  const players = useSelector((state) => state.firestore.ordered.players) || [];
  const initPlayerForm = { name: '', buyIns: 1, finalPosition: '' };
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({});
  const [inputFields, setInputFields] = useState([initPlayerForm]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleInputChange = (index, e) => {
    const values = [...inputFields];
    values[index][e.currentTarget.name] = e.currentTarget.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push(initPlayerForm);
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const onSubmit = () => {
    const data = { ...input, date: selectedDate, participants: inputFields };
    fireStore.add('games', { ...data });
    history.push(GAMES);
  };

  return !isLoaded ? (
    <div>not loaded</div>
  ) : (
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

      {inputFields.map((inputField, index) => (
        <React.Fragment key={`${inputField}~${index}`}>
          <Card>
            <SelectInput
              inputName='name'
              label='Name'
              onChange={(e) => handleInputChange(index, e)}
              validators={register({ required: true })}
              errors={errors.name || null}
              options={playerNameOptions(players)}
            />

            <NumberInput
              inputName='buyIns'
              label='Buy Ins'
              defaultValue={inputFields.buyIns}
              onChange={(e) => handleInputChange(index, e)}
              validators={register({ required: true, min: 1, max: 3 })}
              errors={errors.buyIn || null}
            />
            <SelectInput
              inputName='finalPosition'
              label='Final Position'
              onChange={(e) => handleInputChange(index, e)}
              validators={register({ required: true })}
              errors={errors.finalPosition || null}
              options={finalPositionOptions(players)}
            />
          </Card>
          <div>
            <Button type='button' onClick={handleRemoveFields}>
              -
            </Button>
            <Button type='button' onClick={handleAddFields}>
              +
            </Button>
          </div>
        </React.Fragment>
      ))}

      <pre>{JSON.stringify(inputFields, null, 2)}</pre>
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AddGameForm;
