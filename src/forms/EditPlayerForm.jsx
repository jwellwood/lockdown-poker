import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../ui/inputs/TextInput';
import { useFirestore } from 'react-redux-firebase';
import { useHistory, useParams } from 'react-router-dom';
import { PLAYERS } from '../router';
import { preferredPaymentOptions } from './utils/select-options';
import SelectInput from '../ui/inputs/SelectInput';
import FormContainer from '../ui/layout/FormContainer';
import Spinner from '../ui/spinners/Spinner.component';
import DeleteConfirmation from '../ui/dialogs/DeleteConfirmation';

// TODO, refactor this
const EditPlayerForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const fireStore = useFirestore();
  const { register, handleSubmit, errors } = useForm();

  const playerRef = fireStore.collection('players').doc(id);
  const [player, setPlayer] = useState({});
  const [input, setInput] = useState({});

  useEffect(() => {
    playerRef.get().then((doc) => {
      setPlayer(doc.data());
    });
  }, []);
  useEffect(() => {
    if (player) {
      const { name, preferredPayment, iban } = player;
      setInput({ ...input, name, preferredPayment, iban });
    }
  }, [player]);

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input };
    playerRef.update({ ...data });
    history.push(PLAYERS);
  };

  const onDelete = () => {
    playerRef.delete();
    history.push(PLAYERS);
  };
  return player && input.name ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputName='name'
          label='Name'
          defaultValue={input.name}
          onChange={onChange}
          validators={register({ required: true, minLength: 2, maxLength: 20 })}
          errors={errors.name || null}
        />
        <SelectInput
          inputName='preferredPayment'
          label='Preferred Payment Method'
          defaultValue={input.preferredPayment}
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.preferredPayment || null}
          options={preferredPaymentOptions()}
        />
        <TextInput
          inputName='iban'
          label='IBAN'
          defaultValue={input.iban}
          onChange={onChange}
          validators={register({
            required: false,
            minLength: 16,
            maxLength: 31,
          })} // min = Belgium, max = Seychelles!
          errors={errors.iban || null}
        />
        <Button type='submit'>Submit</Button>
      </form>
      <DeleteConfirmation onDelete={onDelete} type='player' />
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default EditPlayerForm;
