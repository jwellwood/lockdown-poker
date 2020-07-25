import React from 'react';
import TextInput from 'components/inputs/TextInput';
import { FormContainer } from 'shared/layout';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';

const SignInForm = ({ onChange, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputName='email'
          label='Email Address'
          onChange={onChange}
          validators={register({
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          errors={errors.email || null}
        />
        <TextInput
          isPassword={true}
          inputName='password'
          label='Password'
          onChange={onChange}
          validators={register({ required: true })}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
