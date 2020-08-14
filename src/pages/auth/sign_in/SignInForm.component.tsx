import React from 'react';
import TextInput from 'components/inputs/TextInput';
import { FormContainer } from 'shared/layout';
import { useForm } from 'react-hook-form';
import SubmitButton from 'components/buttons/SubmitButton';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SignInForm: React.FC<Props> = ({ onChange, onSubmit }) => {
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
        <SubmitButton />
      </form>
    </FormContainer>
  );
};

export default SignInForm;
