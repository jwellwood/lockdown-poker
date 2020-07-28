import React from 'react';
import { useForm } from 'react-hook-form';
import DateTimeInput from 'components/inputs/DateTimeInput';
import TextInput from 'components/inputs/TextInput';
import SelectInput from 'components/inputs/SelectInput';
import { tableNameOptions, buyInOptions } from 'shared/utils';
import { FormContainer } from 'shared/layout';
import SubmitButton from 'components/buttons/SubmitButton';

const AddGameForm = ({ onChange, onSubmit, selectedDate, setSelectedDate }) => {
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
          onChange={onChange}
          validators={register({ required: true, maxLength: 200 })} // Guard against posting huge portions of text
          errors={errors.zoomLink || null}
        />
        <TextInput
          inputName='gameLink'
          label='Game Link'
          onChange={onChange}
          validators={register({ required: true, maxLength: 200 })}
          errors={errors.gameLink || null}
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
        <SubmitButton />
      </form>
    </FormContainer>
  );
};

export default AddGameForm;
