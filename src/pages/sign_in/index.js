import React from 'react';
import SignInForm from '../../forms/SignInForm';
import PageContainer from '../../ui/layout/PageContainer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignInPage = () => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!auth.isEmpty && !auth.isLoaded) {
    return <Redirect to='/' />;
  }

  return (
    <PageContainer>
      Admin
      <div>
        <SignInForm />
      </div>
    </PageContainer>
  );
};

export default SignInPage;
