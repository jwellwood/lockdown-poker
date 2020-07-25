import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from 'components/inputs/TextInput';
import { preferredPaymentOptions } from 'shared/utils';
import SelectInput from 'components/inputs/SelectInput';
import { FormContainer } from 'shared/layout';
import DeleteConfirmation from 'components/dialogs/DeleteConfirmation';

const EditPlayerForm = ({ onChange, onSubmit, onDelete, input }) => {
  const { register, handleSubmit, errors } = useForm();
  console.log(input);
  return (
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
          defaultValue={input.iban || ''}
          onChange={onChange}
          validators={register({
            required: false,
            minLength: 16,
            maxLength: 31,
          })} // min = Belgium, max = Seychelles!
          errors={errors.iban || null}
        />
        <Button type='submit'>Update</Button>
      </form>
      <DeleteConfirmation onDelete={onDelete} type='player' />
    </FormContainer>
  );
};

export default EditPlayerForm;
