import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from 'components/inputs/TextInput';
import { preferredPaymentOptions } from 'shared/utils';
import SelectInput from 'components/inputs/SelectInput';
import { FormContainer } from 'shared/layout';
import SubmitButton from 'components/buttons/SubmitButton';

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
        <SubmitButton />
      </form>
    </FormContainer>
  );
};

export default AddPlayerForm;
