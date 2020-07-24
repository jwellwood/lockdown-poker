import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory, useParams } from 'react-router-dom';
import { GAMES } from '../router';
import {
  playerNameOptions,
  finalPositionOptions,
  buyBackOptions,
} from './utils/select-options';
import SelectInput from '../ui/inputs/SelectInput';
import FormContainer from '../ui/layout/FormContainer';
import { useSelector } from 'react-redux';
import Spinner from '../ui/spinners/Spinner.component';

const AddPlayerToGameForm = () => {
  const { id } = useParams();
  const fireStore = useFirestore();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({});
  useFirestoreConnect('players');

  const { players } = useSelector((state) => state.firestore.ordered);
  const gameRef = fireStore.collection('games').doc(id);

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    const data = { ...input };

    gameRef.update({
      participants: fireStore.FieldValue.arrayUnion(data),
    });

    history.push(GAMES);
  };
  return players ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectInput
          inputName='name'
          label='Name'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.preferredPayment || null}
          options={playerNameOptions(players)}
        />
        <SelectInput
          inputName='buyIns'
          label='Buy ins'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.preferredPayment || null}
          options={buyBackOptions()}
        />
        <SelectInput
          inputName='finalPosition'
          label='Final Positions'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.finalPosition || null}
          options={finalPositionOptions(players)}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default AddPlayerToGameForm;
