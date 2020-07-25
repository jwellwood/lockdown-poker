import React from 'react';
import { useForm } from 'react-hook-form';
import DateTimeInput from 'components/inputs/DateTimeInput';
import TextInput from 'components/inputs/TextInput';
import { Button } from '@material-ui/core';
import SelectInput from 'components/inputs/SelectInput';
import { tableNameOptions, buyInOptions } from 'shared/utils';
import { FormContainer } from 'shared/layout';
import DeleteConfirmation from 'components/dialogs/DeleteConfirmation';

const EditGameForm = ({
  onChange,
  onSubmit,
  onDelete,
  input,
  selectedDate,
  setSelectedDate,
}) => {
  const { register, handleSubmit, errors } = useForm();

  return (
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
          validators={register({ required: true, maxLength: 200 })}
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
      </form>
      <DeleteConfirmation onDelete={onDelete} type='game' />
    </FormContainer>
  );
};

export default EditGameForm;
