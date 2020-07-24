import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../../../ui/inputs/TextInput';
import { preferredPaymentOptions } from '../../../shared/utils/select-options';
import SelectInput from '../../../ui/inputs/SelectInput';
import FormContainer from '../../../layout/FormContainer';

const AddPlayerForm = ({ onChange, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

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
