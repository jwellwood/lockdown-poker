import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import {
  playerNameOptions,
  finalPositionOptions,
  buyBackOptions,
} from 'shared/utils/select-options';
import SelectInput from 'components/inputs/SelectInput';
import FormContainer from 'shared/layout/FormContainer';

const AddPlayerToGameForm = ({ onChange, onSubmit, players }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
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
  );
};

export default AddPlayerToGameForm;
