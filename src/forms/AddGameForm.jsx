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
  tableNameOptions,
  buyBackOptions,
  buyInOptions,
} from './utils/select-options';
import FormContainer from '../ui/layout/FormContainer';

const AddGameForm = () => {
  const fireStore = useFirestore();
  const history = useHistory();

  useFirestoreConnect(['players']);
  const players = useSelector((state) => state.firestore.ordered.players) || [];

  const initPlayerForm = { name: '', buyIns: '', finalPosition: '' };
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

  const isValid = inputFields.every(
    (field) => Object.values(field).every((k) => k !== '')
    // field.name !== '' && field.buyIns !== '' && field.finalPosition !== ''
  );

  return !isLoaded ? (
    <div>not loaded</div>
  ) : (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateInput
          inputName='date'
          label='Date'
          defaultValue={selectedDate}
          onChange={setSelectedDate}
          validators={register({ required: true })}
          errors={errors.date || null}
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
        <h3>Game Players</h3>
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

              <SelectInput
                inputName='buyIns'
                label='Buy Ins'
                onChange={(e) => handleInputChange(index, e)}
                validators={register({ required: true })}
                errors={errors.buyIns || null}
                options={buyBackOptions()}
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
              <Button
                disabled={inputFields.length < 2}
                type='button'
                onClick={handleRemoveFields}
              >
                -
              </Button>
              <Button type='button' onClick={handleAddFields}>
                +
              </Button>
            </div>
          </React.Fragment>
        ))}

        <pre>DATE: {JSON.stringify(selectedDate, null, 2)}</pre>
        <pre>INPUTS: {JSON.stringify(input, null, 2)}</pre>
        <pre>PARTICIPANTS: {JSON.stringify(inputFields, null, 2)}</pre>
        <Button type='submit' disabled={!isValid}>
          Submit
        </Button>
      </form>
    </FormContainer>
  );
};

export default AddGameForm;
