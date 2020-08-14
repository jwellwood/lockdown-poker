import React from 'react';
import { PageContainer } from 'shared/layout';
import SignInFormContainer from './SignInFormContainer.container';
import Version from './Version';

export default () => {
  return (
    <PageContainer title='Admin'>
      <div>
        <SignInFormContainer />
      </div>
      <Version />
    </PageContainer>
  );
};
