import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useFirebase } from 'react-redux-firebase';
import { useAuth } from 'shared/hooks';
import SignInForm from './SignInForm.component';

const SignInFormContainer = () => {
  const firebase = useFirebase();
  const { isAuth, email } = useAuth();
  const [input, setInput] = useState({});

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    firebase.login({ ...input });
  };

  const onLogout = (e) => {
    firebase.logout();
  };

  return !isAuth ? (
    <SignInForm onChange={onChange} onSubmit={onSubmit} />
  ) : (
    <>
      <div>Signed in as {email}</div>
      <Button onClick={onLogout} variant='contained' color='secondary'>
        logout
      </Button>
    </>
  );
};

export default SignInFormContainer;
