import React from 'react';
import { PageContainer } from 'shared/layout';
import SignInFormContainer from './SignInFormContainer.container';

export default () => {
  return (
    <PageContainer title='Admin'>
      <SignInFormContainer />
    </PageContainer>
  );
};
