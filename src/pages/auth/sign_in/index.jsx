import React from 'react';
import PageContainer from 'shared/layout/PageContainer';
import SignIn from './SignIn.container';

const SignInPage = () => {
  return (
    <PageContainer title='Admin'>
      <SignIn />
    </PageContainer>
  );
};

export default SignInPage;
