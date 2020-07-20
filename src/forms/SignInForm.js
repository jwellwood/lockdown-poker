import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import TextInput from '../ui/inputs/TextInput';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const SignInForm = () => {
  const firebase = useFirebase();
  const { auth } = useSelector((state) => state.firebase);
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({});

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    firebase.login({ ...input });
  };

  const onLogout = (e) => {
    firebase.logout();
  };

  console.log(auth);

  return auth.isLoaded && auth.isEmpty ? (
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
  ) : (
    <>
      <div>Signed in as {auth.email}</div>
      <Button onClick={onLogout}>logout</Button>
    </>
  );
};

export default SignInForm;
