import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../ui/inputs/TextInput';
import { useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { PLAYERS } from '../router';
import { preferredPaymentOptions } from './utils/select-options';
import SelectInput from '../ui/inputs/SelectInput';
import FormContainer from '../ui/layout/FormContainer';

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
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputName='name'
          label='Name'
          onChange={onChange}
          validators={register({ required: true, minLength: 2, maxLength: 20 })}
          errors={errors.name || null}
        />
        <SelectInput
          inputName='preferredPayment'
          label='Preferred Payment Method'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.preferredPayment || null}
          options={preferredPaymentOptions()}
        />
        <TextInput
          inputName='iban'
          label='IBAN'
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
    </FormContainer>
  );
};

export default AddPlayerForm;
